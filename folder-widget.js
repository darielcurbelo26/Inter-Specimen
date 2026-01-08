/* ==========================================================================
   WIDGET CARPETA: DESCARGA + TIEMPOS RELAJADOS ("MÁS AIRE")
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- CONFIGURACIÓN ---
    const ID_CONTENEDOR = '#mi-carpeta-descargas';
    const RUTA_ARCHIVO  = 'assets/Inter-4.1.zip'; 
    // --------------------

    const container = document.querySelector(ID_CONTENEDOR);
    
    if (!container) {
        console.warn(`❌ Widget Error: No existe el contenedor ${ID_CONTENEDOR}`);
        return;
    }

    // 1. INYECTAR ESTILOS
    if (!document.getElementById('folder-styles')) {
        const style = document.createElement('style');
        style.id = 'folder-styles';
        style.innerHTML = `
            .folder-widget-wrapper { position: relative; width: 80px; height: auto; z-index: 10; user-select: none; margin: 0 auto; cursor: pointer; transition: transform 0.2s; }
            .folder-widget-wrapper svg { width: 100%; height: auto; display: block; overflow: visible; }
            .folder-tooltip { position: absolute; top: 0; left: 0; transform: translate(-50%, -100%); background-color: #2d3748; color: #ffffff; padding: 6px 10px; border-radius: 6px; font-family: sans-serif; font-size: 12px; font-weight: 500; white-space: nowrap; pointer-events: none; opacity: 0; visibility: hidden; transition: opacity 0.2s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.15); z-index: 20; }
            .folder-tooltip::after { content: ''; position: absolute; top: 100%; left: 50%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: #2d3748 transparent transparent transparent; }
            .folder-widget-wrapper:hover .folder-tooltip { opacity: 1; visibility: visible; }
            
            /* Animaciones */
            .page-elem { transform-origin: center 100px; animation: page-float 4s ease-in-out infinite; }
            .fold-elem { transform-origin: center 138px; animation: folder-breathe 4s ease-in-out infinite; }
            .page-elem.extracting-up { animation: extract-up 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards; }
            .page-elem.extracting-down { animation: land-down 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
            
            /* Explosión final */
            .folder-explode { animation: explode-out 0.6s ease-out forwards; pointer-events: none; }

            @keyframes page-float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-12px) rotate(-1deg); } }
            @keyframes folder-breathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.97) skewX(0.5deg); } }
            @keyframes extract-up { 0% { transform: translateY(0); } 100% { transform: translateY(-90px); } }
            @keyframes land-down { 0% { transform: translateY(-90px); } 100% { transform: translateY(40px) rotate(-4deg); } }
            
            @keyframes explode-out {
                0% { transform: scale(1); opacity: 1; }
                40% { transform: scale(1.1); opacity: 0.8; }
                100% { transform: scale(3); opacity: 0; filter: blur(20px); }
            }
        `;
        document.head.appendChild(style);
    }

    // 2. INYECTAR HTML
    container.innerHTML = `
        <div class="folder-widget-wrapper">
            <div class="folder-tooltip">Click para descargar</div>
            <svg viewBox="0 0 112 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g class="back-part"><path d="M33.12 44.39c1.45 0 2.88.54 4.25 1.32 1.38.79 2.73 1.83 4.03 2.85 1.3 1.03 2.56 2.04 3.76 2.8 1.2.75 2.3 1.22 3.32 1.22h56.34c1.85 0 3.24.44 4.28 1.12 1.04.68 1.7 1.59 2.13 2.49.43.9.62 1.79.7 2.45.04.33.06.6.06.8 0 .1 0 .18 0 .23v67.6c0 6.22-5.04 11.27-11.27 11.27H11.27C5.04 138.63 0 133.59 0 127.36V51.56c0-3.96 3.21-7.17 7.17-7.17h25.95z" fill="url(#paint0_linear)"/></g>
                <g class="page-elem">
                    <g filter="url(#filter0_dddd)"><path d="M91.51 28.56v66.02H20.49V.68h43.15c1.45 0 2.84.58 3.86 1.6l22.41 22.41c1.02 1.02 1.6 2.41 1.6 3.86z" fill="url(#paint1_radial)"/></g>
                    <g><path d="M58.97 86.05v-10.44h3.78c.78 0 1.44.14 1.98.43.54.28.95.68 1.23 1.17.28.5.42 1.08.42 1.73 0 .66-.14 1.24-.43 1.74-.28.5-.69.9-1.23 1.18-.54.29-1.2.43-1.99.43h-2.73v-1.35h2.63c.48 0 .89-.08 1.21-.25.32-.17.56-.4.71-.7.16-.3.24-.65.24-1.04 0-.39-.08-.73-.24-1.03-.15-.3-.39-.53-.71-.7-.32-.16-.73-.25-1.22-.25h-2.07v9.08h-1.58z" fill="#808080"/><path d="M56.81 75.61v10.44h-1.58v-10.44h1.58z" fill="#808080"/><path d="M45.76 86.05v-1.14l4.78-6.6c.23-.31.48-.63.73-.95.26-.32.52-.64.78-.95l.17.53c-.43.02-.86.03-1.3.04-.43 0-.86 0-1.29 0h-3.82v-1.37h7.63v1.14l-4.69 6.48c-.25.34-.5.67-.77 1.01-.27.34-.54.67-.81 1l-.17-.52c.43-.02.86-.04 1.29-.04.43 0 .86 0 1.29 0h3.91v1.37h-7.72z" fill="#808080"/></g>
                    <g filter="url(#filter1_dddd)"><path d="M87.21 21.99c-5.28-1.45-9.36-1.73-16.19-1.5.57-5.91.33-8.42-1.32-16.01L87.21 21.99z" fill="url(#paint4_linear)"/></g>
                </g>
                <g class="fold-elem"><path d="M100.73 60.1c6.22 0 11.27 5.04 11.27 11.26v56c0 6.22-5.05 11.27-11.27 11.27H11.27C5.04 138.63 0 133.59 0 127.36V71.36c0-6.22 5.04-11.27 11.27-11.27h89.46z" fill="url(#paint5_linear)"/><path d="M100.73 60.1c6.22 0 11.27 5.04 11.27 11.26v56c0 6.22-5.05 11.27-11.27 11.27H11.27C5.04 138.63 0 133.59 0 127.36V71.36c0-6.22 5.04-11.27 11.27-11.27h89.46z" fill="url(#paint6_radial)" fill-opacity="0.2" style="mix-blend-mode:plus-darker"/></g>
                <defs>
                    <filter id="filter0_dddd" x="19.12" y="0" width="73.75" height="99.36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="0.34"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/><feBlend in2="BackgroundImageFix" result="effect1"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="0.68"/><feGaussianBlur stdDeviation="0.34"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"/><feBlend in2="effect1" result="effect2"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2.04"/><feGaussianBlur stdDeviation="0.68"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/><feBlend in2="effect2" result="effect3"/><feBlend in="SourceGraphic" in2="effect3" result="shape"/></filter>
                    <filter id="filter1_dddd" x="65.6" y="3.8" width="25.7" height="32.54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="0.68"/><feGaussianBlur stdDeviation="0.68"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"/><feBlend in2="BackgroundImageFix" result="effect1"/><feBlend in="SourceGraphic" in2="effect1" result="shape"/></filter>
                    <linearGradient id="paint0_linear" x1="55.5" y1="41" x2="55.5" y2="138" gradientUnits="userSpaceOnUse"><stop stop-color="#609DCF"/><stop offset="1" stop-color="#32638D"/></linearGradient>
                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 28 75) scale(236 178)"><stop stop-color="#F7F7F7"/><stop offset="1" stop-color="#BBBBBB"/></radialGradient>
                    <linearGradient id="paint4_linear" x1="78" y1="22" x2="103" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#F0F0F0"/><stop offset="1" stop-color="#8A8A8A"/></linearGradient>
                    <linearGradient id="paint5_linear" x1="56" y1="60" x2="56" y2="138" gradientUnits="userSpaceOnUse"><stop stop-color="#89CEF6"/><stop offset="1" stop-color="#79BAE1"/></linearGradient>
                    <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57 99) rotate(180) scale(63 90)"><stop stop-color="white"/><stop offset="1"/></radialGradient>
                </defs>
            </svg>

specimen.zip
        </div>
    `;

    // 3. VARIABLES
    const wrapper = container.querySelector('.folder-widget-wrapper');
    const svg = container.querySelector('svg');
    const paper = container.querySelector('.page-elem');
    const tooltip = container.querySelector('.folder-tooltip');
    let isAnimating = false;

    // 4. SEGUIMIENTO VISUAL
    function updateTooltipPosition() {
        if (!paper || !wrapper) return;
        const paperRect = paper.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();
        const relativeX = paperRect.left + (paperRect.width / 2) - wrapperRect.left;
        const relativeY = paperRect.top - wrapperRect.top;
        tooltip.style.left = `${relativeX}px`;
        tooltip.style.top = `${relativeY - 10}px`;
        requestAnimationFrame(updateTooltipPosition);
    }
    requestAnimationFrame(updateTooltipPosition);

    // 5. LÓGICA DE DESCARGA
    wrapper.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        // --- FASE 1: SUBIR HOJA ---
        paper.classList.add('extracting-up');
        tooltip.style.opacity = 1;
        tooltip.style.visibility = "visible";
        tooltip.textContent = "Iniciando...";

        const xhr = new XMLHttpRequest();
        xhr.open('GET', RUTA_ARCHIVO, true);
        xhr.responseType = 'blob'; 

        // BARRA DE PROGRESO
        xhr.onprogress = (event) => {
            if (event.lengthComputable) {
                const porcentaje = Math.round((event.loaded / event.total) * 100);
                tooltip.textContent = `Descargando ${porcentaje}%...`;
            } else {
                tooltip.textContent = "Descargando...";
            }
        };

        // DESCARGA COMPLETADA
        xhr.onload = () => {
            if (xhr.status === 200) {
                // Generar archivo para guardar
                const blob = xhr.response;
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = RUTA_ARCHIVO.split('/').pop() || 'archivo.zip';
                document.body.appendChild(link);
                link.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(link);

                tooltip.textContent = "¡Archivo listo!";

                // --- FASE 2: PAUSA ARRIBA (0.5s) ---
                setTimeout(() => {
                    // --- FASE 3: BAJAR HOJA (0.8s) ---
                    svg.appendChild(paper); 
                    paper.classList.remove('extracting-up');
                    paper.classList.add('extracting-down'); 
                    
                    tooltip.textContent = "¡Descargado!";

                    // --- FASE 4: ESPERA LECTURA (2.5s) ---
                    setTimeout(() => {
                        
                        // --- FASE 5: EXPLOSIÓN ---
                        wrapper.classList.add('folder-explode');
                        tooltip.style.opacity = 0;

                        // ELIMINAR DEL HTML
                        setTimeout(() => {
                            container.remove(); 
                        }, 600);

                    }, 2500); // 2.5 segundos de espera antes de explotar

                }, 500); // 0.5 segundos de espera con la hoja arriba

            } else {
                tooltip.textContent = "Error: Archivo no encontrado";
                paper.classList.remove('extracting-up');
                isAnimating = false;
            }
        };

        xhr.onerror = () => {
            tooltip.textContent = "Error de red";
            paper.classList.remove('extracting-up');
            isAnimating = false;
        };

        xhr.send();
    });
});