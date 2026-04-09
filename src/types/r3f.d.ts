declare module "@react-three/fiber" {
  import * as THREE from "three";
  import React from "react";

  export type RootState = {
    clock: THREE.Clock;
    camera: THREE.Camera;
    scene: THREE.Scene;
    gl: THREE.WebGLRenderer;
    [key: string]: unknown;
  };

  export type RenderCallback = (state: RootState, delta: number) => void;

  export function useFrame(callback: RenderCallback, renderPriority?: number): null;
  export function useThree(): RootState;

  export interface CanvasProps {
    children?: React.ReactNode;
    camera?: Partial<THREE.PerspectiveCamera> | { position?: number[]; fov?: number };
    gl?: { alpha?: boolean; antialias?: boolean };
    style?: React.CSSProperties;
    className?: string;
    frameloop?: "always" | "demand" | "never";
    dpr?: number | [min: number, max: number];
    [key: string]: unknown;
  }

  export const Canvas: React.FC<CanvasProps>;
}
