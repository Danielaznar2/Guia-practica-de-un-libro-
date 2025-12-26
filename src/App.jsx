import React, { useEffect, useState, useRef } from 'react';
import { useConversation } from '@elevenlabs/react';
import { ConversationWidget } from './components/ConversationWidget';
import { ReactiveBlobs } from './components/ReactiveBlobs';
import { Scene3D } from './components/Scene3D';
import papiroImg from './assets/papiro.jpg';

function App() {
  const [showPapiro, setShowPapiro] = useState(false);
  const [viewMode, setViewMode] = useState('blobs'); // 'blobs' or '3d'
  const [hasSpokenSinceTrigger, setHasSpokenSinceTrigger] = useState(false);
  const hideTimerRef = useRef(null);

  // Lifted conversation state
  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => {
      console.log('Disconnected');
      setShowPapiro(false);
      setHasSpokenSinceTrigger(false);
    },
    onMessage: (message) => {
      console.log('Conversation Message:', message);
      const isUser = message.source === 'user';
      if (isUser) {
        const content = message.message || message.text || (typeof message === 'string' ? message : '');
        if (content && typeof content === 'string' && content.toLowerCase().includes('papiro')) {
          setShowPapiro(true);
          setHasSpokenSinceTrigger(false);
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        }
      }
    },
    onError: (error) => console.error('Error:', error),
  });

  const { status, startSession, endSession, isSpeaking } = conversation;
  const isConnected = status === 'connected';
  const isConnecting = status === 'connecting';

  // --- Auto-Hide Logic ---
  useEffect(() => {
    if (showPapiro && isSpeaking) {
      setHasSpokenSinceTrigger(true);
    }
    if (showPapiro && hasSpokenSinceTrigger && !isSpeaking) {
      hideTimerRef.current = setTimeout(() => {
        setShowPapiro(false);
        setHasSpokenSinceTrigger(false);
      }, 1500);
    }
    return () => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); };
  }, [showPapiro, isSpeaking, hasSpokenSinceTrigger]);

  async function toggleConversation() {
    if (isConnected) {
      await endSession();
    } else {
      await startSession({
        agentId: 'agent_4901kbdcxxw2ev2r9vsc1agvkerq',
      });
    }
  }

  // Entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
    document.querySelectorAll('.animate-in').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="main-layout">
      {/* Top Status Bar */}
      <div className="top-bar animate-in" style={{ '--i': 1 }}>
        <span> chatbot: {isConnected ? 'ACTIVO' : 'ONLINE'}</span>
        <span className='audio-input'>Entrada de audio: {isSpeaking ? 'ESCUCHANDO' : 'LISTA'}</span>
        <button
          className="mode-toggle"
          onClick={() => setViewMode(prev => prev === 'blobs' ? '3d' : 'blobs')}
          style={{
            background: 'transparent',
            border: '1px solid currentColor',
            color: 'inherit',
            padding: '2px 8px',
            fontSize: '0.8em',
            cursor: 'pointer',
            marginLeft: '1rem',
            fontFamily: 'inherit'
          }}
        >
          VIEW: {viewMode === 'blobs' ? '2D BLOBS' : '3D MODEL'}
        </button>
        <span>V 2.0 BETA</span>
      </div>

      <div className="content-grid">
        {/* Left Column: Hero Text Only */}
        <div className="hero-section">
          <p className="hero-eyebrow animate-in" style={{ '--i': 2 }}>
            Añadiremos un texto pequeño<br />
            para completar estilo visual quiza<br />
            un poco mas largo asi 3 4 lineas.
          </p>

          <h1 className="hero-title animate-in" style={{ '--i': 3 }}>
            Guía Práctica <br />para recuperar <br />los libros
          </h1>

          <p className="hero-subtitle animate-in" style={{ '--i': 4 }}>
            Chat de voz dedicado a ayudarte a entender cómo era la forma de almacenar información más importante de la historia.
          </p>
        </div>

        {/* Right Column: Blobs Only (Always Visible) */}
        <div className="dynamic-section">
          <div className="active-content visible">
            {viewMode === 'blobs' ? (
              <ReactiveBlobs
                conversation={conversation}
                isConnected={isConnected}
                isSpeaking={isSpeaking}
                showPapiro={showPapiro}
              />
            ) : (
              <Scene3D
                conversation={conversation}
                isConnected={isConnected}
                isSpeaking={isSpeaking}
              />
            )}
          </div>
        </div>
      </div>

      {/* Bottom Controls: Centered Button */}
      <div className="bottom-controls animate-in" style={{ '--i': 5 }}>
        <ConversationWidget
          isConnected={isConnected}
          isConnecting={isConnecting}
          onToggle={toggleConversation}
        />
      </div>
    </div>
  );
}

export default App;
