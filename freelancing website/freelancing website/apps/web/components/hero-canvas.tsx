"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.8, 4);
    const material = new THREE.MeshStandardMaterial({
      color: "#0E2F76",
      roughness: 0.2,
      metalness: 0.6,
      emissive: "#0B3C92",
      emissiveIntensity: 0.24
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.45, 0.025, 16, 160),
      new THREE.MeshBasicMaterial({ color: "#93C5FD", transparent: true, opacity: 0.72 })
    );
    ring.rotation.x = 1.1;
    scene.add(ring);

    scene.add(new THREE.AmbientLight("#ffffff", 1.4));
    const light = new THREE.DirectionalLight("#ffffff", 2.8);
    light.position.set(3, 3, 4);
    scene.add(light);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      mesh.rotation.x += 0.004;
      mesh.rotation.y += 0.006;
      ring.rotation.z += 0.003;
      renderer.render(scene, camera);
    };

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-full min-h-[340px] w-full" aria-hidden />;
}
