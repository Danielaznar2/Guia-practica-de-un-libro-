import React, { useEffect, useState, useRef } from 'react';
import { useConversation } from '@elevenlabs/react';
import { ConversationWidget } from './components/ConversationWidget';
import { ReactiveBlobs } from './components/ReactiveBlobs';

import papiroImg from './assets/02_papiro.png';

function App() {
  const [showPapiro, setShowPapiro] = useState(false);
  const [showEscritura, setShowEscritura] = useState(false);
  const [showPergamino, setShowPergamino] = useState(false);
  const [showPapel, setShowPapel] = useState(false);
  const [showManuscritos, setShowManuscritos] = useState(false);
  const [showXilografia, setShowXilografia] = useState(false);
  const [showTiposMoviles, setShowTiposMoviles] = useState(false);
  const [showTiposMovilesMetalicos, setShowTiposMovilesMetalicos] = useState(false);
  const [showGutenberg, setShowGutenberg] = useState(false);
  const [showIncunables, setShowIncunables] = useState(false);
  const [showAldoManuzio, setShowAldoManuzio] = useState(false);
  const [showSiglodeOro, setShowSiglodeOro] = useState(false);
  const [showIlustracion, setShowIlustracion] = useState(false);
  const [showRevIndustrial, setShowRevIndustrial] = useState(false);
  const [showPenguinBooks, setShowPenguinBooks] = useState(false);
  const [showIA, setShowIA] = useState(false);
  const [showInfantil, setShowInfantil] = useState(false);
  const [showNovela, setShowNovela] = useState(false);
  const [showEnsayo, setShowEnsayo] = useState(false);
  const [showPoesia, setShowPoesia] = useState(false);
  const [showTeatro, setShowTeatro] = useState(false);
  const [showDivulgacion, setShowDivulgacion] = useState(false);
  const [showAngeles, setShowAngeles] = useState(false);
  const [showBiblia42Lineas, setShowBiblia42Lineas] = useState(false);
  const [showCapitulo, setShowCapitulo] = useState(false);
  const [showCornisa, setShowCornisa] = useState(false);
  const [showMargenes, setShowMargenes] = useState(false);
  const [showPapiroDramatico, setShowPapiroDramatico] = useState(false);
  const [showSutraDelDiamante, setShowSutraDelDiamante] = useState(false);
  const [showTiposMoviles2, setShowTiposMoviles2] = useState(false);
  const [hasSpokenSinceTrigger, setHasSpokenSinceTrigger] = useState(false);
  const hideTimerRef = useRef(null);

  // Lifted conversation state
  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => {
      console.log('Disconnected');
      setShowPapiro(false);
      setShowEscritura(false);
      setShowPergamino(false);
      setShowPapel(false);
      setShowManuscritos(false);
      setShowXilografia(false);
      setShowTiposMoviles(false);
      setShowTiposMovilesMetalicos(false);
      setShowGutenberg(false);
      setShowIncunables(false);
      setShowAldoManuzio(false);
      setShowSiglodeOro(false);
      setShowIlustracion(false);
      setShowRevIndustrial(false);
      setShowPenguinBooks(false);
      setShowIA(false);
      setShowInfantil(false);
      setShowNovela(false);
      setShowEnsayo(false);
      setShowPoesia(false);
      setShowTeatro(false);
      setShowDivulgacion(false);
      setShowAngeles(false);
      setShowBiblia42Lineas(false);
      setShowCapitulo(false);
      setShowCornisa(false);
      setShowMargenes(false);
      setShowPapiroDramatico(false);
      setShowSutraDelDiamante(false);
      setShowTiposMoviles2(false);
      setHasSpokenSinceTrigger(false);
    },
    onMessage: (message) => {
      console.log('Conversation Message:', message);
      const isUser = message.source === 'user';
      if (isUser) {
        const content = message.message || message.text || (typeof message === 'string' ? message : '');
        if (content && typeof content === 'string') {
          const lowerContent = content.toLowerCase();

          // Check for Papiro keywords
          const papiroKeywords = ['papiro', 'papiro dramático', 'papiro dramatico', 'ramesseum', 'rameseu', 'rameseum'];
          if (papiroKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowPapiro(true);
            setShowEscritura(false);
            setShowPergamino(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Escritura keywords
          const escrituraKeywords = ['mesopotamia', 'escritura', 'sumerios', 'tablilla de arcilla', 'cuneiforme'];
          if (escrituraKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowEscritura(true);
            setShowPapiro(false);
            setShowPergamino(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Pergamino keywords
          const pergaminoKeywords = ['pergamino', 'piel de animal', 'vitela', 'códice', 'codice'];
          if (pergaminoKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowPergamino(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPapel(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Papel keywords
          const papelKeywords = ['papel', 'cáñamo', 'cañamo', 'trapo'];
          if (papelKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowPapel(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowManuscritos(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Manuscritos keywords
          const manuscritosKeywords = ['manuscritos iluminados', 'iluminados', 'monje', 'copista', 'capitular'];
          if (manuscritosKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowManuscritos(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowXilografia(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Xilografia keywords
          const xilografiaKeywords = ['xilografía', 'xilografia', 'silografia', 'silografía', 'sutra del diamante', 'matríz', 'matriz'];
          if (xilografiaKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowXilografia(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowTiposMoviles(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Tipos Moviles keywords
          const tiposMovilesKeywords = ['tipos móviles', 'tipos moviles', 'glifo'];
          if (tiposMovilesKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowTiposMoviles(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Tipos Moviles Metalicos keywords
          const tiposMovilesMetalicosKeywords = ['tipos moviles metalicos', 'tipos móviles metalicos', 'tipos móviles metálicos', 'tipos moviles metálicos'];
          if (tiposMovilesMetalicosKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowTiposMovilesMetalicos(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowGutenberg(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Gutenberg keywords
          const gutenbergKeywords = ['gutenberg', 'prensa'];
          if (gutenbergKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowGutenberg(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Incunables keywords
          const incunablesKeywords = ['incunables', 'incunable'];
          if (incunablesKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowIncunables(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Aldo Manuzio keywords
          const aldoManuzioKeywords = ['aldo manuzio', 'octavo', 'italica', 'itálica', 'aldo manucio', 'aldo manuchio', 'aldo manutzio', 'aldo'];
          if (aldoManuzioKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowAldoManuzio(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Ilustracion keywords
          const ilustracionKeywords = ['ilustracion', 'ilustración', 'enciclopedia', 'cloro'];
          if (ilustracionKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowIlustracion(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Siglo de Oro keywords
          const siglodeOroKeywords = ['siglo de oro', 'orlando furioso', 'el quijote', 'quijote'];
          if (siglodeOroKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowSiglodeOro(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for RevIndustrial keywords
          const revIndustrialKeywords = ['revolucion industrial', 'revolución industrial', 'periodicos', 'periódicos'];
          if (revIndustrialKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowRevIndustrial(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Penguin Books keywords
          const penguinBooksKeywords = ['penguin books', 'penguin bucs', 'pengüin books', 'pengüin bucs', 'libro electrónico', 'libro electronico', 'tinta electrónica', 'tinta electronica'];
          if (penguinBooksKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowPenguinBooks(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for IA keywords
          const iaKeywords = ['inteligencia artificial'];
          if (iaKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowIA(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Infantil keywords
          const infantilKeywords = ['libro infantil', 'libro infantíl', 'infantil'];
          if (infantilKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowInfantil(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Novela keywords
          const novelaKeywords = ['novela'];
          if (novelaKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowNovela(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Ensayo keywords
          const ensayoKeywords = ['ensayo'];
          if (ensayoKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowEnsayo(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Poesia keywords
          const poesiaKeywords = ['poesia', 'poesía'];
          if (poesiaKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowPoesia(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Teatro keywords
          const teatroKeywords = ['teatro'];
          if (teatroKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowTeatro(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowDivulgacion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Divulgacion keywords
          const divulgacionKeywords = ['divulgacion', 'divulgación'];
          if (divulgacionKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowDivulgacion(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Angeles keywords
          const angelesKeywords = [
            'muestrame la imagen de angeles',
            'muéstrame la imagen de angeles',
            'muestrame la imagen de ángeles',
            'muéstrame la imagen de ángeles',
            'ángeles',
            'angeles',
            'querubines',
            'querubín',
            'querubin',
            'enseñame los ángeles',
            'enséñame los ángeles',
            'ponme los ángeles',
            'ponme los angeles'
          ];
          if (angelesKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowAngeles(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Biblia 42 Lineas keywords
          const biblia42LineasKeywords = [
            'muestrame la imagen de la biblia de 42 lineas',
            'muéstrame la imagen de la biblia de 42 lineas',
            'muestrame la imagen de la biblia de 42 líneas',
            'muéstrame la imagen de la biblia de 42 líneas',
            'muestrame la biblia de 42 lineas',
            'muéstrame la biblia de 42 líneas',
            'biblia de 42 lineas',
            'biblia de 42 líneas',
            'biblia de cuarenta y dos lineas',
            'biblia de cuarenta y dos líneas',
            'biblia de gutenberg',
            'biblia de mazarino',
            'biblia mazarina',
            '42 lineas',
            '42 líneas',
            'cuarenta y dos lineas',
            'cuarenta y dos líneas',
            'la biblia de gutenberg',
            'muestrame la biblia',
            'muéstrame la biblia',
            'enseñame la biblia',
            'enséñame la biblia'
          ];
          if (biblia42LineasKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowBiblia42Lineas(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setShowAngeles(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Capitulo keywords
          const capituloKeywords = [
            'muestrame la imagen de capítulo',
            'muestrame el capitulo',
            'muéstrame el capítulo',
            'capitulo',
            'capítulo',
            'letra capitular',
            'capitular',
            'enseñame el capitulo',
            'enséñame el capítulo',
            'ponme el capitulo',
            'ponme el capítulo'
          ];
          if (capituloKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowCapitulo(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setShowAngeles(false);
            setShowBiblia42Lineas(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Cornisa keywords
          const cornisaKeywords = [
            'muestrame la imagen de cornisa',
            'muestrame la cornisa',
            'muéstrame la cornisa',
            'cornisa',
            'encabezado de página',
            'encabezado de pagina',
            'encabezado',
            'enseñame la cornisa',
            'enséñame la cornisa',
            'ponme la cornisa'
          ];
          if (cornisaKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowCornisa(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setShowAngeles(false);
            setShowBiblia42Lineas(false);
            setShowCapitulo(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Margenes keywords
          const margenesKeywords = [
            'muestrame la imagen de margenes',
            'muestrame la imagen de márgenes',
            'muestrame los margenes',
            'muéstrame los márgenes',
            'margenes',
            'márgenes',
            'enseñame los margenes',
            'enséñame los márgenes',
            'ponme los margenes'
          ];
          if (margenesKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowMargenes(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setShowAngeles(false);
            setShowBiblia42Lineas(false);
            setShowCapitulo(false);
            setShowCornisa(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Papiro Dramatico keywords
          const papiroDramaticoKeywords = [
            'muestrame la imagen de papiro dramatico',
            'muestrame la imagen de papiro dramático',
            'muestrame el papiro dramatico',
            'muéstrame el papiro dramático',
            'papiro dramatico',
            'papiro dramático',
          ];
          if (papiroDramaticoKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowPapiroDramatico(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setShowAngeles(false);
            setShowBiblia42Lineas(false);
            setShowCapitulo(false);
            setShowCornisa(false);
            setShowMargenes(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Sutra del Diamante keywords
          const sutraDelDiamanteKeywords = [
            'muestrame la imagen de sutra del diamante',
            'muestrame el sutra del diamante',
            'muéstrame el sutra del diamante',
          ];
          if (sutraDelDiamanteKeywords.some(keyword => lowerContent.includes(keyword))) {
            setShowSutraDelDiamante(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setShowAngeles(false);
            setShowBiblia42Lineas(false);
            setShowCapitulo(false);
            setShowCornisa(false);
            setShowMargenes(false);
            setShowPapiroDramatico(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }

          // Check for Tipos Moviles 2 keywords
          const tiposMoviles2Keywords = [
            'muéstrame la imagen de tipos moviles',
            'muéstrame la imagen de tipos móviles',
            'enseñame los tipos moviles',
            'enséñame los tipos móviles',
            'ponme los tipos moviles'
          ];
          if (tiposMoviles2Keywords.some(keyword => lowerContent.includes(keyword))) {
            setShowTiposMoviles2(true);
            setShowPapiro(false);
            setShowEscritura(false);
            setShowPergamino(false);
            setShowPapel(false);
            setShowManuscritos(false);
            setShowXilografia(false);
            setShowTiposMoviles(false);
            setShowTiposMovilesMetalicos(false);
            setShowGutenberg(false);
            setShowIncunables(false);
            setShowAldoManuzio(false);
            setShowSiglodeOro(false);
            setShowIlustracion(false);
            setShowRevIndustrial(false);
            setShowPenguinBooks(false);
            setShowIA(false);
            setShowInfantil(false);
            setShowNovela(false);
            setShowEnsayo(false);
            setShowPoesia(false);
            setShowTeatro(false);
            setShowDivulgacion(false);
            setShowAngeles(false);
            setShowBiblia42Lineas(false);
            setShowCapitulo(false);
            setShowCornisa(false);
            setShowMargenes(false);
            setShowPapiroDramatico(false);
            setShowSutraDelDiamante(false);
            setHasSpokenSinceTrigger(false);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          }
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
    if ((showPapiro || showEscritura || showPergamino || showPapel || showManuscritos || showXilografia || showTiposMoviles || showTiposMovilesMetalicos || showGutenberg || showIncunables || showAldoManuzio || showSiglodeOro || showIlustracion || showRevIndustrial || showPenguinBooks || showIA || showInfantil || showNovela || showEnsayo || showPoesia || showTeatro || showDivulgacion || showAngeles || showBiblia42Lineas || showCapitulo || showCornisa || showMargenes || showPapiroDramatico || showSutraDelDiamante || showTiposMoviles2) && isSpeaking) {
      setHasSpokenSinceTrigger(true);
    }
    if ((showPapiro || showEscritura || showPergamino || showPapel || showManuscritos || showXilografia || showTiposMoviles || showTiposMovilesMetalicos || showGutenberg || showIncunables || showAldoManuzio || showSiglodeOro || showIlustracion || showRevIndustrial || showPenguinBooks || showIA || showInfantil || showNovela || showEnsayo || showPoesia || showTeatro || showDivulgacion || showAngeles || showBiblia42Lineas || showCapitulo || showCornisa || showMargenes || showPapiroDramatico || showSutraDelDiamante || showTiposMoviles2) && hasSpokenSinceTrigger && !isSpeaking) {
      hideTimerRef.current = setTimeout(() => {
        setShowPapiro(false);
        setShowEscritura(false);
        setShowPergamino(false);
        setShowPapel(false);
        setShowManuscritos(false);
        setShowXilografia(false);
        setShowTiposMoviles(false);
        setShowTiposMovilesMetalicos(false);
        setShowGutenberg(false);
        setShowIncunables(false);
        setShowAldoManuzio(false);
        setShowSiglodeOro(false);
        setShowIlustracion(false);
        setShowRevIndustrial(false);
        setShowPenguinBooks(false);
        setShowIA(false);
        setShowInfantil(false);
        setShowNovela(false);
        setShowEnsayo(false);
        setShowPoesia(false);
        setShowTeatro(false);
        setShowDivulgacion(false);
        setShowAngeles(false);
        setShowBiblia42Lineas(false);
        setShowCapitulo(false);
        setShowCornisa(false);
        setShowMargenes(false);
        setShowPapiroDramatico(false);
        setShowSutraDelDiamante(false);
        setShowTiposMoviles2(false);
        setHasSpokenSinceTrigger(false);
      }, 1500);
    }
    return () => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); };
  }, [showPapiro, showEscritura, showPergamino, showPapel, showManuscritos, showXilografia, showTiposMoviles, showTiposMovilesMetalicos, showGutenberg, showIncunables, showAldoManuzio, showSiglodeOro, showIlustracion, showRevIndustrial, showPenguinBooks, showIA, showInfantil, showNovela, showEnsayo, showPoesia, showTeatro, showDivulgacion, showAngeles, showBiblia42Lineas, showCapitulo, showCornisa, showMargenes, showPapiroDramatico, showSutraDelDiamante, showTiposMoviles2, isSpeaking, hasSpokenSinceTrigger]);


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
        <span>V 2.0 BETA</span>
      </div>

      <div className="content-grid">
        {/* Left Column: Hero Text Only */}
        <div className="hero-section">
          <p className="hero-eyebrow animate-in" style={{ '--i': 2 }}>
            ¡Hey! Gracias por darle una oportunidad a esta cosa <br />
            tan extraña. A lo mejor tienes que tener un poco de paciencia, <br />
            pero seguro que descubres cosas nuevas.
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
            <ReactiveBlobs
              conversation={conversation}
              isConnected={isConnected}
              isSpeaking={isSpeaking}
              showPapiro={showPapiro}
              showEscritura={showEscritura}
              showPergamino={showPergamino}
              showPapel={showPapel}
              showManuscritos={showManuscritos}
              showXilografia={showXilografia}
              showTiposMoviles={showTiposMoviles}
              showTiposMovilesMetalicos={showTiposMovilesMetalicos}
              showGutenberg={showGutenberg}
              showIncunables={showIncunables}
              showAldoManuzio={showAldoManuzio}
              showSiglodeOro={showSiglodeOro}
              showIlustracion={showIlustracion}
              showRevIndustrial={showRevIndustrial}
              showPenguinBooks={showPenguinBooks}
              showIA={showIA}
              showInfantil={showInfantil}
              showNovela={showNovela}
              showEnsayo={showEnsayo}
              showPoesia={showPoesia}
              showTeatro={showTeatro}
              showDivulgacion={showDivulgacion}
              showAngeles={showAngeles}
              showBiblia42Lineas={showBiblia42Lineas}
              showCapitulo={showCapitulo}
              showCornisa={showCornisa}
              showMargenes={showMargenes}
              showPapiroDramatico={showPapiroDramatico}
              showSutraDelDiamante={showSutraDelDiamante}
              showTiposMoviles2={showTiposMoviles2}
            />
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
