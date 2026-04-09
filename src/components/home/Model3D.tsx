// @ts-nocheck
/* eslint-disable */
"use client";
import { useRef, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Preload with Draco decoder (uses Google CDN decoder, cached after first load)
useGLTF.preload("/3Dmodel-draco.glb", true);

/**
 * Pulsing wireframe sphere shown while the GLB is loading.
 * Matches the green hologram aesthetic so the transition feels seamless.
 */
function HologramLoader() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.3;
    // Pulsing opacity
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity =
      0.3 + Math.sin(t * 2) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 12, 8]} />
      <meshBasicMaterial
        color="#00ff88"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

/**
 * Green hologram figure.
 * Auto-rotates slowly; user can drag to rotate via OrbitControls.
 */
function HologramFigure() {
  const group = useRef<THREE.Group>(null);
  // Second arg `true` enables DRACOLoader (Google CDN decoder, ~150KB, cached)
  const { scene } = useGLTF("/3Dmodel-draco.glb", true);

  // Clone once + apply green hologram material
  const holoScene = useMemo(() => {
    const clone = scene.clone(true);
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#00ff88"),
      emissive: new THREE.Color("#00cc6a"),
      emissiveIntensity: 2.0,
      metalness: 0.2,
      roughness: 0.5,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    clone.traverse((child: any) => {
      if (child.isMesh) child.material = mat;
    });
    return clone;
  }, [scene]);

  // Auto-fit model to ~2.8 units
  useEffect(() => {
    if (!group.current) return;
    const box = new THREE.Box3().setFromObject(holoScene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim > 0 ? 2.8 / maxDim : 1;
    group.current.scale.setScalar(scale);
    group.current.position.set(
      -center.x * scale,
      -center.y * scale,
      -center.z * scale
    );
  }, [holoScene]);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;

    // Slow auto-rotate
    group.current.rotation.y += 0.004;

    // Gentle float
    if (!(group.current as any).__baseY) {
      (group.current as any).__baseY = group.current.position.y;
    }
    group.current.position.y =
      (group.current as any).__baseY + Math.sin(t * 0.6) * 0.1;

    // Opacity flicker for hologram feel
    holoScene.traverse((child: any) => {
      if (child.isMesh) {
        child.material.opacity =
          0.85 + Math.sin(t * 6) * 0.05 + Math.sin(t * 13) * 0.03;
        child.material.emissiveIntensity =
          1.8 + Math.sin(t * 3) * 0.4;
      }
    });
  });

  return (
    <group ref={group}>
      <primitive object={holoScene} />
    </group>
  );
}

export default function Model3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <ambientLight color="#00ff88" intensity={0.8} />
        <directionalLight color="#00ff88" intensity={3} position={[3, 3, 5]} />
        <directionalLight color="#00cc6a" intensity={1.2} position={[-3, 1, 3]} />
        <pointLight color="#00ff88" intensity={3} distance={12} decay={2} position={[0, 3, -4]} />

        {/* Suspense inside Canvas — shows animated wireframe sphere while GLB loads */}
        <Suspense fallback={<HologramLoader />}>
          <HologramFigure />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          dampingFactor={0.08}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
