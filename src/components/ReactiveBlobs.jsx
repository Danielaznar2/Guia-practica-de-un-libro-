import React, { useEffect, useRef } from 'react';
import papiroImg from '../assets/papiro.jpg';

export function ReactiveBlobs({ conversation, isConnected, isSpeaking, showPapiro }) {
    const blobRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (isConnected) {
            const animate = () => {
                const volume = isSpeaking ? conversation.getOutputVolume() : 0;
                // Base scale + volume reactivity
                const scale = 1 + (volume * 1.5);
                const rotation = Math.sin(Date.now() / 1000) * 10; // Slow rotation

                if (blobRef.current) {
                    // Apply transform to the main container or specific blob layers
                    blobRef.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
                    // Adjust opacity slightly for "breathing"
                    blobRef.current.style.filter = `blur(${20 + volume * 10}px)`;
                }

                animationRef.current = requestAnimationFrame(animate);
            };

            animationRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isConnected, isSpeaking, conversation]);

    return (
        <div className="blobs-container">
            <div ref={blobRef} className="blob-group">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            {/* Papyrus Overlay - Now Centered Inside Blobs */}
            <div className={`papyrus-overlay ${showPapiro ? 'visible' : ''}`}>
                <img src={papiroImg} alt="Ancient Papyrus" />
            </div>
        </div>
    );
}
