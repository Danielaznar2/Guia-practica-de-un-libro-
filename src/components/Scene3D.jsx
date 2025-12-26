import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Modelo de cabeza realista estándar (Lee Perry Smith)
// NOTA: Este modelo es una escultura estática. No tiene huesos ni morph targets,
// por lo que no puede abrir la boca. Usamos vibración para simular el habla.
const MODEL_URL = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb';

function CyberFaceRealista({ isSpeaking, conversation }) {
    const groupRef = useRef();
    const voidsRef = useRef(); // Referencia para los elementos negros (ojos/boca)

    const { scene } = useGLTF(MODEL_URL);

    // --- OPTIMIZACIÓN DEL MATERIAL ---
    const wireframeScene = useMemo(() => {
        const clonedScene = scene.clone();
        clonedScene.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    // Usamos valores RGB > 1 para un efecto neón "superbrillante"
                    color: new THREE.Color(0.1, 1.5, 2.0),
                    wireframe: true,
                    // IMPORTANTE: 'FrontSide' oculta la parte trasera de la cabeza,
                    // limpiando el diseño y evitando el ruido visual.
                    side: THREE.FrontSide,
                    fog: false
                });
            }
        });
        return clonedScene;
    }, [scene]);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Obtener volumen (con protección si es null)
        let volume = (isSpeaking && conversation && conversation.getOutputVolume?.()) || 0;
        volume = Math.min(volume, 1.5);

        const time = state.clock.getElapsedTime();

        // Animación de "respiración" lenta
        groupRef.current.position.y = -0.5 + Math.sin(time * 0.4) * 0.03;
        groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;

        // --- REACTIVIDAD AL HABLAR (Escala y Vibración) ---
        // Como el modelo no puede abrir la boca, hacemos que vibre y se agrande.
        const targetScale = 1 + volume * 0.15;
        groupRef.current.scale.setScalar(THREE.MathUtils.lerp(
            groupRef.current.scale.x,
            targetScale,
            0.2
        ));

        if (isSpeaking && volume > 0.01) {
            // Vibración rápida en X e Y
            groupRef.current.position.x = (Math.random() - 0.5) * volume * 0.03;
        } else {
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 0, 0.1);
        }

        // --- PULSO DE LOS "VACÍOS" (Ojos y boca negros) ---
        if (voidsRef.current) {
            const eyeTargetScale = 1 + volume * 0.2;
            voidsRef.current.scale.setScalar(THREE.MathUtils.lerp(
                voidsRef.current.scale.x,
                eyeTargetScale,
                0.3
            ));
        }
    });

    return (
        <group ref={groupRef} position={[0, -0.5, 0]}>
            {/* El modelo wireframe principal */}
            <primitive object={wireframeScene} scale={[0.5, 0.5, 0.5]} />

            {/* Grupo de "Vacíos": Esferas negras mate para tapar el interior */}
            <group ref={voidsRef}>
                {/* Ojo Izquierdo */}
                <mesh position={[-0.16, 0.25, 0.22]} scale={[0.08, 0.08, 0.08]}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshBasicMaterial color="#000000" side={THREE.DoubleSide} />
                </mesh>
                {/* Ojo Derecho */}
                <mesh position={[0.16, 0.25, 0.22]} scale={[0.08, 0.08, 0.08]}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshBasicMaterial color="#000000" side={THREE.DoubleSide} />
                </mesh>
                {/* NUEVO: Vacío de la boca (tapa el interior del cuello) */}
                <mesh position={[0, -0.2, 0.2]} scale={[0.2, 0.1, 0.1]} rotation={[0.3, 0, 0]}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshBasicMaterial color="#000000" side={THREE.DoubleSide} />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload(MODEL_URL);

export function Scene3D({ conversation, isConnected, isSpeaking }) {
    return (
        <div className="scene-container" style={{ backgroundColor: 'black' }}>
            {/* Cámara un poco más cerca (2.5 en vez de 2.8) para más impacto */}
            <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>

                <CyberFaceRealista
                    isSpeaking={isSpeaking}
                    conversation={conversation}
                />

                {/* Controles bloqueados */}
                <OrbitControls
                    enableRotate={false}
                    enableZoom={false}
                    enablePan={false}
                />
            </Canvas>
        </div>
    );
}