"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { AcUnit } from "./ac-unit";

export function HeroScene() {
  const [scroll, setScroll] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const onScroll = () => {
      const max = window.innerHeight * 0.8;
      const y = Math.min(window.scrollY, max);
      setScroll(y / max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0.3, 5.2], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.8]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#f26419" />
        <Suspense fallback={null}>
          {reduced ? (
            <AcUnit scrollProgress={0} />
          ) : (
            <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
              <AcUnit scrollProgress={scroll} />
            </Float>
          )}
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -0.95, 0]}
            opacity={0.35}
            scale={6}
            blur={2.6}
            far={2}
            color="#0a1c20"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
