const { useState, useEffect, useRef } = React;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function TypeSpecimenApp() {
    const [weight, setWeight] = useState(400);
    const [opsz, setOpsz] = useState(32);
    const [letterIndex, setLetterIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(true);
    const [isLowercase, setIsLowercase] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [touchStartX, setTouchStartX] = useState(0);
    const containerRef = useRef(null);

    const currentLetter = isLowercase 
        ? ALPHABET[letterIndex].toLowerCase() 
        : ALPHABET[letterIndex];

    const handleInteraction = (clientY) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        
        // Calculamos la posición relativa dentro del contenedor
        const relativeY = Math.max(0, Math.min(rect.height, clientY - rect.top));
        const y = relativeY / rect.height;
        
        // Vertical: weight (100-900)
        const newWeight = 100 + (1 - y) * 800;
        setWeight(Math.max(100, Math.min(900, Math.round(newWeight))));
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        handleInteraction(e.clientY);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleInteraction(e.clientY);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setTouchStartX(e.touches[0].clientX);
        handleInteraction(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        if(e.cancelable) e.preventDefault();
        handleInteraction(e.touches[0].clientY);
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                setLetterIndex((prev) => (prev + 1) % ALPHABET.length);
            } else {
                setLetterIndex((prev) => (prev - 1 + ALPHABET.length) % ALPHABET.length);
            }
        }
        setIsDragging(false);
    };

    // Listeners globales de teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

            const key = e.key.toUpperCase();
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setLetterIndex((prev) => (prev - 1 + ALPHABET.length) % ALPHABET.length);
                return;
            }
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                setLetterIndex((prev) => (prev + 1) % ALPHABET.length);
                return;
            }
            
            const index = ALPHABET.indexOf(key);
            if (index !== -1) {
                setLetterIndex(index);
            }
            
            if (key === 'D') setShowDetails(prev => !prev);
            if (key === 'L') setIsLowercase(prev => !prev);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const fontVariationSettings = `'wght' ${weight}, 'opsz' ${opsz}`;
    const fontSize = 50; 
    const upm = 2816;
    
    const metrics = {
        ascender: 2728,
        descender: -680,
        capHeight: 2048,
        xHeight: 1536,
    };
    
    const totalHeight = metrics.ascender + Math.abs(metrics.descender); 
    const baselineFromTop = (metrics.ascender / totalHeight) * fontSize;
    
    const baselineTop = `calc(50% - ${fontSize/2.285}vmin + ${baselineFromTop}vmin)`;
    const capHeightTop = `calc(50% - ${fontSize/2.265}vmin + ${baselineFromTop - (metrics.capHeight / upm) * fontSize}vmin)`;
    const xHeightTop = `calc(50% - ${fontSize/2.45}vmin + ${baselineFromTop - (metrics.xHeight / upm) * fontSize}vmin)`;
    const ascenderTop = `calc(50% - ${fontSize/1.8}vmin)`;
    const descenderTop = `calc(50% - ${fontSize/2.45}vmin + ${baselineFromTop + (Math.abs(metrics.descender) / upm) * fontSize}vmin)`;

    return (
        <div className="relative w-full h-full bg-neutral-950 overflow-hidden select-none flex flex-col">
            
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between px-6 py-3 border-b border-neutral-800/50 gap-2">
                <div className="flex items-center gap-4">
                    <div className="font-mono text-xs text-neutral-600">
                        wght: <span className="text-neutral-400">{weight}</span>
                    </div>
                    <div className="font-mono text-xs text-neutral-600">
                        opsz: <span className="text-neutral-400">{opsz}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <input
                        type="range"
                        value={opsz}
                        min="14"
                        max="32"
                        step="0.1"
                        onChange={(e) => setOpsz(Number(e.target.value))}
                        className="w-24 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <label className="flex items-center gap-2 text-xs text-neutral-500 cursor-pointer hover:text-neutral-400">
                        <input
                            type="checkbox"
                            checked={showDetails}
                            onChange={(e) => setShowDetails(e.target.checked)}
                            className="w-3 h-3 accent-neutral-500"
                        />
                        Details
                    </label>
                    <label className="flex items-center gap-2 text-xs text-neutral-500 cursor-pointer hover:text-neutral-400">
                        <input
                            type="checkbox"
                            checked={isLowercase}
                            onChange={(e) => setIsLowercase(e.target.checked)}
                            className="w-3 h-3 accent-neutral-500"
                        />
                        Lowercase
                    </label>
                </div>

                <div className="font-mono text-xs text-neutral-600 hidden sm:block">
                    {currentLetter} · U+{(currentLetter.charCodeAt(0)).toString(16).toUpperCase().padStart(4, '0')}
                </div>
            </div>

            {/* Canvas principal */}
            <div 
                ref={containerRef}
                className="flex-1 relative cursor-ns-resize overflow-hidden touch-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Grid de fondo */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-5"
                    style={{
                        backgroundImage: 'linear-gradient(#525252 1px, transparent 1px), linear-gradient(90deg, #525252 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Guías tipográficas */}
                {showDetails && (
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute left-0 right-0 border-t border-dashed border-neutral-700" style={{ top: ascenderTop }}>
                            <span className="absolute left-4 -top-4 text-[9px] text-neutral-600 font-mono">ASCENDER</span>
                        </div>
                        <div className="absolute left-0 right-0 border-t border-dashed border-neutral-700" style={{ top: capHeightTop }}>
                            <span className="absolute left-4 -top-4 text-[9px] text-neutral-600 font-mono">CAP HEIGHT</span>
                        </div>
                        <div className="absolute left-0 right-0 border-t border-dashed border-neutral-700" style={{ top: xHeightTop }}>
                            <span className="absolute left-4 -top-4 text-[9px] text-neutral-600 font-mono">X-HEIGHT</span>
                        </div>
                        <div className="absolute left-0 right-0 border-t border-neutral-500" style={{ top: baselineTop }}>
                            <span className="absolute left-4 top-1 text-[9px] text-neutral-400 font-mono">BASELINE</span>
                        </div>
                        <div className="absolute left-0 right-0 border-t border-dashed border-neutral-700" style={{ top: descenderTop }}>
                            <span className="absolute left-4 top-1 text-[9px] text-neutral-600 font-mono">DESCENDER</span>
                        </div>
                    </div>
                )}

                {/* Letra principal */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <span
                        style={{
                            fontFamily: 'Inter Variable, sans-serif',
                            fontVariationSettings,
                            color: '#e5e5e5',
                            fontSize: '50vmin',
                            lineHeight: 1,
                        }}
                    >
                        {currentLetter}
                    </span>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="flex items-center gap-2 text-neutral-700 font-mono text-xs">
                        <span>←</span>
                        <span className="text-neutral-500">{letterIndex + 1}/{ALPHABET.length}</span>
                        <span>→</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-800/50">
                <div className="font-mono text-xs text-neutral-700 hidden sm:block">
                    {isDragging ? '↕ DRAGGING' : '↕ DRAG · ← → ARROWS'}
                </div>
                
                <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide w-full sm:w-auto justify-center">
                    {ALPHABET.map((letter, index) => (
                        <button
                            key={letter}
                            onClick={() => setLetterIndex(index)}
                            className={`w-5 h-5 flex-shrink-0 text-[9px] font-mono transition-colors ${
                                index === letterIndex 
                                    ? 'text-neutral-300 bg-neutral-800' 
                                    : 'text-neutral-700 hover:text-neutral-500'
                            }`}
                        >
                            {letter}
                        </button>
                    ))}
                </div>

                <div className="font-mono text-xs text-neutral-700 hidden sm:block">
                    INTER
                </div>
            </div>
        </div>
    );
}

// Renderizar en el ID específico
const rootElement = document.getElementById('type-specimen-root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<TypeSpecimenApp />);
}