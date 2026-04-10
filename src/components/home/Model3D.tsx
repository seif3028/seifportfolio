// @ts-nocheck
/* eslint-disable */
"use client";
import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Preload with Draco decoder (uses Google CDN decoder, cached after first load)
useGLTF.preload("/3Dmodel-draco.glb", true);

/** Returns false on devices/browsers where WebGL is unavailable. */
function canUseWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

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
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity =
      0.3 + Math.sin(t * 2) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 12, 8]} />
      <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.4} />
    </mesh>
  );
}

/**
 * Green hologram figure.
 * Auto-rotates slowly; user can drag to rotate via OrbitControls.
 * Respects prefers-reduced-motion for users sensitive to vestibular motion.
 */
function HologramFigure() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/3Dmodel-draco.glb", true);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Clone once + apply green hologram material.
  // Cache the mesh list so we avoid traversing the scene graph every frame.
  const { holoScene, meshes } = useMemo(() => {
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
    const meshList: THREE.Mesh[] = [];
    clone.traverse((child: any) => {
      if (child.isMesh) {
        child.material = mat;
        meshList.push(child);
      }
    });
    return { holoScene: clone, meshes: meshList };
  }, [scene]);

  // Auto-fit model to ~2.4 units (adjust this number to change model size)
  useEffect(() => {
    if (!group.current) return;
    const box = new THREE.Box3().setFromObject(holoScene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim > 0 ? 2.4 / maxDim : 1;
    group.current.scale.setScalar(scale);
    group.current.position.set(
      -center.x * scale,
      -center.y * scale,
      -center.z * scale
    );
  }, [holoScene]);

  useFrame(({ clock }) => {
    if (!group.current || prefersReducedMotion) return;
    const t = clock.elapsedTime;

    group.current.rotation.y += 0.004;

    if (!(group.current as any).__baseY) {
      (group.current as any).__baseY = group.current.position.y;
    }
    group.current.position.y =
      (group.current as any).__baseY + Math.sin(t * 0.6) * 0.1;

    const opacity = 0.85 + Math.sin(t * 6) * 0.05 + Math.sin(t * 13) * 0.03;
    const emissive = 1.8 + Math.sin(t * 3) * 0.4;
    for (const mesh of meshes) {
      (mesh.material as THREE.MeshStandardMaterial).opacity = opacity;
      (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = emissive;
    }
  });

  return (
    <group ref={group}>
      <primitive object={holoScene} />
    </group>
  );
}

interface Model3DProps {
  /** When true, the render loop is suspended (zero GPU cost). Resumes instantly when false. */
  paused?: boolean;
}

export default function Model3D({ paused = false }: Model3DProps) {
  // Detect WebGL support once on the client. If missing, return null so the
  // ErrorBoundary in HeroSection can show the CSS fallback instead.
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    setWebglOk(canUseWebGL());
  }, []);

  if (!webglOk) return null;

  return (
    // background: transparent on the wrapper — some Android browsers default
    // to white unless every layer in the chain is explicitly transparent.
    <div className="w-full h-full" style={{ background: "transparent" }}>
      <Canvas
        // frameloop="demand" freezes the render loop (zero GPU) when paused=true.
        // The last rendered frame stays visible; resumes instantly when paused=false.
        frameloop={paused ? "demand" : "always"}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: "transparent", display: "block" }}
        // Cap at 1.5× — dpr=2 doubles pixel count and tanks GPU on mid-range phones
        dpr={[1, 1.5]}
        onCreated={({ gl }) => {
          // Force truly transparent clear colour on mobile WebGL implementations
          gl.setClearColor(0x000000, 0);
          // Handle context loss (browser reclaims GPU on low-RAM phones).
          // Setting webglOk=false causes this component to return null, which
          // triggers the ErrorBoundary fallback in HeroSection.
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            setWebglOk(false);
          });
        }}
      >
        <ambientLight color="#00ff88" intensity={0.8} />
        <directionalLight color="#00ff88" intensity={3} position={[3, 3, 5]} />
        <directionalLight color="#00cc6a" intensity={1.2} position={[-3, 1, 3]} />
        <pointLight color="#00ff88" intensity={3} distance={12} decay={2} position={[0, 3, -4]} />

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
