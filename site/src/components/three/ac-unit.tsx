"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

type Props = {
  scrollProgress?: number;
};

export function AcUnit({ scrollProgress = 0 }: Props) {
  const group = useRef<Group>(null);
  const cover = useRef<Group>(null);
  const louvres = useRef<Group>(null);
  const fan = useRef<Mesh>(null);
  const coil = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.35) * 0.18 + scrollProgress * 0.6;
    group.current.position.y = Math.sin(t * 0.7) * 0.05;
    if (fan.current) fan.current.rotation.z += delta * 6;

    const explode = scrollProgress;
    if (cover.current) {
      cover.current.position.z = explode * 1.6;
      cover.current.rotation.x = explode * 0.2;
      (cover.current.children[0] as Mesh).material &&
        ((cover.current.children[0] as Mesh & {
          material: { opacity?: number; transparent?: boolean };
        }).material.opacity = 1 - explode * 0.4);
    }
    if (louvres.current) louvres.current.position.y = -0.45 + explode * 0.55;
    if (coil.current) coil.current.position.z = -explode * 0.9;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Back coil + electronics */}
      <group ref={coil} position={[0, 0, -0.35]}>
        {/* Heat exchanger fins */}
        {Array.from({ length: 18 }).map((_, i) => (
          <mesh key={i} position={[-1.55 + i * 0.17, 0.05, 0]}>
            <boxGeometry args={[0.02, 0.85, 0.55]} />
            <meshStandardMaterial color="#cfd6dc" metalness={0.7} roughness={0.4} />
          </mesh>
        ))}
        {/* Copper pipe */}
        <mesh position={[0, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.18, 0.04, 8, 24, Math.PI]} />
          <meshStandardMaterial color="#b87333" metalness={0.85} roughness={0.3} />
        </mesh>
        {/* Control box */}
        <mesh position={[1.8, 0, 0.05]}>
          <boxGeometry args={[0.32, 0.5, 0.45]} />
          <meshStandardMaterial color="#0f4c5c" metalness={0.4} roughness={0.5} />
        </mesh>
      </group>

      {/* Internal fan (centrifugal) */}
      <mesh ref={fan} position={[0, -0.05, -0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.45, 0.18, 8, 32]} />
        <meshStandardMaterial color="#f0ece4" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Mounting plate */}
      <mesh position={[0, 0, -0.55]}>
        <boxGeometry args={[3.8, 1.1, 0.1]} />
        <meshStandardMaterial color="#1b2a41" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Front cover (white face) */}
      <group ref={cover} position={[0, 0, 0.35]}>
        <mesh>
          <boxGeometry args={[3.6, 1, 0.5]} />
          <meshStandardMaterial color="#f6f4f0" metalness={0.2} roughness={0.35} transparent />
        </mesh>
        {/* Brand strip */}
        <mesh position={[0, 0.32, 0.26]}>
          <planeGeometry args={[3.4, 0.04]} />
          <meshStandardMaterial color="#f26419" emissive="#f26419" emissiveIntensity={0.3} />
        </mesh>
        {/* Display dot */}
        <mesh position={[1.45, -0.25, 0.26]}>
          <circleGeometry args={[0.045, 24]} />
          <meshStandardMaterial color="#0f4c5c" emissive="#1d6a7e" emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* Louvres (air flap) */}
      <group ref={louvres} position={[0, -0.45, 0.5]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={i} position={[0, -i * 0.08, 0]} rotation={[-0.4, 0, 0]}>
            <boxGeometry args={[3.2, 0.05, 0.18]} />
            <meshStandardMaterial color="#f6f4f0" metalness={0.3} roughness={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
