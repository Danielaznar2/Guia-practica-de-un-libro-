import React from 'react';

export function ConversationWidget({ isConnected, isConnecting, onToggle }) {
    return (
        <div className="custom-widget-container">
            <button
                onClick={onToggle}
                disabled={isConnecting}
                className="convai-btn"
            >
                {isConnecting ? 'Conectando...' : isConnected ? 'Finalizar' : 'Pregúntale a Aldo'}
            </button>
        </div>
    );
}
