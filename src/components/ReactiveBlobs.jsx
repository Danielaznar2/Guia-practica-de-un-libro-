import React, { useEffect, useRef } from 'react';
import papiroImg from '../assets/02_papiro.png';
import escrituraImg from '../assets/03_escritura.png';
import pergaminoImg from '../assets/04_Pergamino.png';
import papelImg from '../assets/05_papel.png';
import manuscritosImg from '../assets/06_manuscritosiluminados.png';
import xilografiaImg from '../assets/07_Xilografia.png';
import tiposMovilesImg from '../assets/08_tiposMoviles.png';
import tiposMovilesMetalicosImg from '../assets/09_tiposmovilesmetalicos.png';
import gutenbergImg from '../assets/10_gutenberg.png';
import incunablesImg from '../assets/11_Incunables.png';
import aldoManuzioImg from '../assets/12_AldoManuzio.png';
import siglodeOroImg from '../assets/13_SiglodeOro.png';
import ilustracionImg from '../assets/14_Ilustracion.png';
import revIndustrialImg from '../assets/15_RevIndustrial.png';
import penguinBooksImg from '../assets/16_Penguinbooks.png';
import iaImg from '../assets/17_IA.png';
import infantilImg from '../assets/18_Infantil.png';
import novelaImg from '../assets/19_Novela.png';
import ensayoImg from '../assets/20_Ensayo.png';
import poesiaImg from '../assets/21_Poesia.png';
import teatroImg from '../assets/22_Teatro.png';
import divulgacionImg from '../assets/23_Divulgacion.png';
import angelesImg from '../assets/24_Angeles.png';
import biblia42LineasImg from '../assets/25_Biblia42Lineas.jpg';
import capituloImg from '../assets/26_Capitulo.jpg';
import cornisaImg from '../assets/27_Cornisa.jpg';
import margenesImg from '../assets/28_Margenes.jpg';
import papiroDramaticoImg from '../assets/29_PapiroDramatico.jpg';
import sutraDelDiamanteImg from '../assets/30_SutraDelDiamante.jpg';
import tiposMoviles2Img from '../assets/31_TiposMoviles2.jpg';

export function ReactiveBlobs({ conversation, isConnected, isSpeaking, showPapiro, showEscritura, showPergamino, showPapel, showManuscritos, showXilografia, showTiposMoviles, showTiposMovilesMetalicos, showGutenberg, showIncunables, showAldoManuzio, showSiglodeOro, showIlustracion, showRevIndustrial, showPenguinBooks, showIA, showInfantil, showNovela, showEnsayo, showPoesia, showTeatro, showDivulgacion, showAngeles, showBiblia42Lineas, showCapitulo, showCornisa, showMargenes, showPapiroDramatico, showSutraDelDiamante, showTiposMoviles2 }) {
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

            {/* Escritura Overlay - Same Style */}
            <div className={`papyrus-overlay ${showEscritura ? 'visible' : ''}`}>
                <img src={escrituraImg} alt="Cuneiform Tablet" />
            </div>

            {/* Pergamino Overlay - Same Style */}
            <div className={`papyrus-overlay ${showPergamino ? 'visible' : ''}`}>
                <img src={pergaminoImg} alt="Pergamino" />
            </div>

            {/* Papel Overlay - Same Style */}
            <div className={`papyrus-overlay ${showPapel ? 'visible' : ''}`}>
                <img src={papelImg} alt="Papel" />
            </div>

            {/* Manuscritos Overlay - Same Style */}
            <div className={`papyrus-overlay ${showManuscritos ? 'visible' : ''}`}>
                <img src={manuscritosImg} alt="Manuscritos Iluminados" />
            </div>

            {/* Xilografia Overlay - Same Style */}
            <div className={`papyrus-overlay ${showXilografia ? 'visible' : ''}`}>
                <img src={xilografiaImg} alt="Xilografía" />
            </div>

            {/* Tipos Moviles Overlay - Same Style */}
            <div className={`papyrus-overlay ${showTiposMoviles ? 'visible' : ''}`}>
                <img src={tiposMovilesImg} alt="Tipos Móviles" />
            </div>

            {/* Tipos Moviles Metalicos Overlay - Same Style */}
            <div className={`papyrus-overlay ${showTiposMovilesMetalicos ? 'visible' : ''}`}>
                <img src={tiposMovilesMetalicosImg} alt="Tipos Móviles Metálicos" />
            </div>

            {/* Gutenberg Overlay - Same Style */}
            <div className={`papyrus-overlay ${showGutenberg ? 'visible' : ''}`}>
                <img src={gutenbergImg} alt="Gutenberg" />
            </div>

            {/* Incunables Overlay - Same Style */}
            <div className={`papyrus-overlay ${showIncunables ? 'visible' : ''}`}>
                <img src={incunablesImg} alt="Incunables" />
            </div>

            {/* Aldo Manuzio Overlay - Same Style */}
            <div className={`papyrus-overlay ${showAldoManuzio ? 'visible' : ''}`}>
                <img src={aldoManuzioImg} alt="Aldo Manuzio" />
            </div>

            {/* Siglo de Oro Overlay - Same Style */}
            <div className={`papyrus-overlay ${showSiglodeOro ? 'visible' : ''}`}>
                <img src={siglodeOroImg} alt="Siglo de Oro" />
            </div>

            {/* Ilustracion Overlay - Same Style */}
            <div className={`papyrus-overlay ${showIlustracion ? 'visible' : ''}`}>
                <img src={ilustracionImg} alt="Ilustración" />
            </div>

            {/* RevIndustrial Overlay - Same Style */}
            <div className={`papyrus-overlay ${showRevIndustrial ? 'visible' : ''}`}>
                <img src={revIndustrialImg} alt="Revolución Industrial" />
            </div>

            {/* Penguin Books Overlay - Same Style */}
            <div className={`papyrus-overlay ${showPenguinBooks ? 'visible' : ''}`}>
                <img src={penguinBooksImg} alt="Penguin Books" />
            </div>

            {/* IA Overlay - Same Style */}
            <div className={`papyrus-overlay ${showIA ? 'visible' : ''}`}>
                <img src={iaImg} alt="Inteligencia Artificial" />
            </div>

            {/* Libro Infantil Overlay - Same Style */}
            <div className={`papyrus-overlay ${showInfantil ? 'visible' : ''}`}>
                <img src={infantilImg} alt="Libro Infantil" />
            </div>

            {/* Novela Overlay - Same Style */}
            <div className={`papyrus-overlay ${showNovela ? 'visible' : ''}`}>
                <img src={novelaImg} alt="Novela" />
            </div>

            {/* Ensayo Overlay - Same Style */}
            <div className={`papyrus-overlay ${showEnsayo ? 'visible' : ''}`}>
                <img src={ensayoImg} alt="Ensayo" />
            </div>

            {/* Poesia Overlay - Same Style */}
            <div className={`papyrus-overlay ${showPoesia ? 'visible' : ''}`}>
                <img src={poesiaImg} alt="Poesía" />
            </div>

            {/* Teatro Overlay - Same Style */}
            <div className={`papyrus-overlay ${showTeatro ? 'visible' : ''}`}>
                <img src={teatroImg} alt="Teatro" />
            </div>

            {/* Divulgacion Overlay - Same Style */}
            <div className={`papyrus-overlay ${showDivulgacion ? 'visible' : ''}`}>
                <img src={divulgacionImg} alt="Divulgación" />
            </div>

            {/* Angeles Overlay - Same Style */}
            <div className={`papyrus-overlay ${showAngeles ? 'visible' : ''}`}>
                <img src={angelesImg} alt="Angeles" />
            </div>

            {/* Biblia 42 Lineas Overlay - Same Style */}
            <div className={`papyrus-overlay ${showBiblia42Lineas ? 'visible' : ''}`}>
                <img src={biblia42LineasImg} alt="Biblia de 42 Lineas" />
            </div>

            {/* Capitulo Overlay - Same Style */}
            <div className={`papyrus-overlay ${showCapitulo ? 'visible' : ''}`}>
                <img src={capituloImg} alt="Capitulo" />
            </div>

            {/* Cornisa Overlay - Same Style */}
            <div className={`papyrus-overlay ${showCornisa ? 'visible' : ''}`}>
                <img src={cornisaImg} alt="Cornisa" />
            </div>

            {/* Margenes Overlay - Same Style */}
            <div className={`papyrus-overlay ${showMargenes ? 'visible' : ''}`}>
                <img src={margenesImg} alt="Márgenes" />
            </div>

            {/* Papiro Dramatico Overlay - Same Style */}
            <div className={`papyrus-overlay ${showPapiroDramatico ? 'visible' : ''}`}>
                <img src={papiroDramaticoImg} alt="Papiro Dramático" />
            </div>

            {/* Sutra del Diamante Overlay - Same Style */}
            <div className={`papyrus-overlay ${showSutraDelDiamante ? 'visible' : ''}`}>
                <img src={sutraDelDiamanteImg} alt="Sutra del Diamante" />
            </div>

            {/* Tipos Moviles 2 Overlay - Same Style */}
            <div className={`papyrus-overlay ${showTiposMoviles2 ? 'visible' : ''}`}>
                <img src={tiposMoviles2Img} alt="Tipos Móviles" />
            </div>
        </div>
    );
}
