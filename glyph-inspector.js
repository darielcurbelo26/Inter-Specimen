// ===================================
// GLYPH INSPECTOR - INSPECTOR DE GLIFOS
// ===================================

// Todos los caracteres de la tipografía Inter
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' +
    'ÀÁÂÃÄÅĀĂĄǍǞǠǺȀȂȦàáâãäåāăąǎǟǡǻȁȃȧ' +
    'ÈÉÊËĒĔĖĘĚȄȆȨƇèéêëēĕėęěȅȇȩɇ' +
    'ÌÍÎÏĨĪĬĮİǏȈȊìíîïĩīĭįıǐȉȋ' +
    'ÒÓÔÕÖØŌŎŐƠǑǪǬǾȌȎȪȬȮȰòóôõöøōŏőơǒǫǭǿȍȏȫȭȯȱ' +
    'ÙÚÛÜŨŪŬŮŰŲƯǓǕǗǙǛȔȖùúûüũūŭůűųưǔǖǘǚǜȕȗ' +
    'ÝŸŶȲýÿŷȳ' +
    'ÇĆĈĊČçćĉċč' +
    'ĎĐďđ' +
    'ĠĢĜĞġģĝğ' +
    'ĤĦĥħ' +
    'Ĵĵ' +
    'Ķķ' +
    'ĹĻĽĿŁĺļľŀł' +
    'ŃŅŇŊÑńņňŋñ' +
    'ŔŖŘŕŗř' +
    'ŚŜŞŠśŝşš' +
    'ŢŤŦţťŧ' +
    'Ŵŵ' +
    'ŹŻŽźżž' +
    'ÆæŒœĲĳßẞ' +
    'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςστυφχψω' +
    '.,;:!?¡¿·•""\'\'«»‹›„‚\'"–—―‐‑‒−' +
    '()[]{}⟨⟩/\\|¦' +
    '+−×÷=≠<>≤≥±∓≈≡∝∞∫∑∏√∂∆∇' +
    '⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉' +
    '¼½¾⅓⅔⅛⅜⅝⅞' +
    '$€£¥¢₹₽₩₪₦₨฿' +
    '@#%&*^~`_§¶©®™℗℠°℃℉' +
    '←→↑↓↔↕⇐⇒⇑⇓⇔⇕↖↗↘↙' +
    '†‡‰‱№℮Ωµå' +
    '☐☑☒✓✗✕✖' +
    '…⋯⋮⋱' +
    '♠♣♥♦♩♪♫♬♭♮♯';

// Estado de la aplicación
const glyphState = {
    selectedElement: null
};

// Referencias a elementos del DOM
const glyphElements = {
    grid: document.getElementById('grid'),
    letter: document.querySelector('.letter'),
    scrollContainer: document.querySelector('.glyph-list')
};

// Actualizar letra mostrada
function updateLetter(char) {
    if (glyphElements.letter) {
        glyphElements.letter.textContent = char;
    }
}

// Inicializar el inspector de glifos
function initGlyphInspector() {
    if (!glyphElements.grid || !glyphElements.letter) {
        console.warn('Glyph inspector elements not found');
        return;
    }

    // Crear grid de caracteres
    for (let char of chars) {
        const cell = document.createElement('a');
        const codepoint = char.codePointAt(0);
        
        cell.textContent = char;
        cell.dataset.cp = codepoint.toString(16);
        cell.dataset.name = char;
        cell.href = '#';
        
        cell.onclick = (ev) => {
            ev.preventDefault();
            
            // Quitar selección anterior
            if (glyphState.selectedElement) {
                glyphState.selectedElement.classList.remove('selected');
            }
            
            // Seleccionar nueva celda
            cell.classList.add('selected');
            glyphState.selectedElement = cell;
            
            // Actualizar letra
            updateLetter(char);
        };
        
        glyphElements.grid.appendChild(cell);
        
        // Seleccionar 'A' por defecto
        if (char === 'A') {
            cell.classList.add('selected');
            glyphState.selectedElement = cell;
        }
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlyphInspector);
} else {
    initGlyphInspector();
}

