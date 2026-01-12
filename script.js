/* ==========================================================================
   1. CONFIGURACIÓN INICIAL & PLUGINS
   ========================================================================== */
// Registramos plugins de GSAP una sola vez
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, Draggable, ModifiersPlugin);
} else {
    console.error("GSAP no está cargado.");
}


/* ==========================================================================
   2. DATOS GLOBALES (LOTTIE JSON)
   ========================================================================== */
const animationData = { "v": "4.8.0", "meta": { "g": "LottieFiles AE 3.5.4", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 1, "op": 66, "w": 400, "h": 400, "nm": "hideUnhide", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "#hide02", "ln": "hide02", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [199.501, 201.646, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-67.832, 52.438], [67.832, -52.438]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.156862750649, 0.156862750649, 0.156862750649, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 15, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "tm", "s": { "a": 1, "k": [{ "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 10, "s": [5] }, { "i": { "x": [0.293], "y": [1] }, "o": { "x": [0.41], "y": [0] }, "t": 19, "s": [10] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 29, "s": [5] }, { "i": { "x": [0.378], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 36, "s": [5] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 41, "s": [1] }, { "t": 56, "s": [99.9] }], "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 10, "s": [5.1] }, { "i": { "x": [0.293], "y": [1] }, "o": { "x": [0.41], "y": [0] }, "t": 23, "s": [100] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 33, "s": [95] }, { "i": { "x": [0.378], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 36, "s": [95] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 41, "s": [90] }, { "t": 56, "s": [100] }], "ix": 2 }, "o": { "a": 1, "k": [{ "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.072], "y": [0] }, "t": 5, "s": [52] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 10, "s": [-17] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 19, "s": [0] }, { "i": { "x": [0.986], "y": [1] }, "o": { "x": [0.814], "y": [0] }, "t": 56, "s": [0] }, { "t": 61, "s": [-59] }], "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }], "ip": 5, "op": 62, "st": 5, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "#hide01", "ln": "hide01", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [190.878, 193.023, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-67.832, 52.438], [67.832, -52.438]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.949019610882, 0.952941179276, 0.96862745285, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 15, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "tm", "s": { "a": 1, "k": [{ "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 10, "s": [5] }, { "i": { "x": [0.293], "y": [1] }, "o": { "x": [0.41], "y": [0] }, "t": 19, "s": [10] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 29, "s": [5] }, { "i": { "x": [0.378], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 36, "s": [5] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 41, "s": [1] }, { "t": 56, "s": [99.9] }], "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 10, "s": [5.1] }, { "i": { "x": [0.293], "y": [1] }, "o": { "x": [0.41], "y": [0] }, "t": 23, "s": [100] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 33, "s": [95] }, { "i": { "x": [0.378], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 36, "s": [95] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 41, "s": [90] }, { "t": 56, "s": [100] }], "ix": 2 }, "o": { "a": 1, "k": [{ "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.072], "y": [0] }, "t": 5, "s": [52] }, { "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 10, "s": [-17] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.6], "y": [0] }, "t": 19, "s": [0] }, { "i": { "x": [0.986], "y": [1] }, "o": { "x": [0.814], "y": [0] }, "t": 56, "s": [0] }, { "t": 61, "s": [-59] }], "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }], "ip": 6, "op": 60, "st": 5, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "#strokeOlho", "ln": "strokeOlho", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [200, 200.509, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.9, "y": 1 }, "o": { "x": 0.7, "y": 0 }, "t": 1, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -48.271], [-74.271, -4.919], [-74.271, 4.919], [0, 48.271], [74.271, 4.919]], "c": true }] }, { "i": { "x": 0.3, "y": 1 }, "o": { "x": 0.1, "y": 0 }, "t": 11, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -4.771], [-74.271, -4.919], [-74.271, 4.919], [0, 5.271], [74.271, 4.919]], "c": true }] }, { "i": { "x": 0.3, "y": 1 }, "o": { "x": 0.7, "y": 0 }, "t": 21, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -48.271], [-74.271, -4.919], [-74.271, 4.919], [0, 48.271], [74.271, 4.919]], "c": true }] }, { "i": { "x": 0.9, "y": 1 }, "o": { "x": 0.7, "y": 0 }, "t": 36, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -48.271], [-74.271, -4.919], [-74.271, 4.919], [0, 48.271], [74.271, 4.919]], "c": true }] }, { "i": { "x": 0.3, "y": 1 }, "o": { "x": 0.1, "y": 0 }, "t": 46, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -4.771], [-74.271, -4.919], [-74.271, 4.919], [0, 5.271], [74.271, 4.919]], "c": true }] }, { "t": 56, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -48.271], [-74.271, -4.919], [-74.271, 4.919], [0, 48.271], [74.271, 4.919]], "c": true }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.156862750649, 0.156862750649, 0.156862750649, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 10, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 300, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "#matte", "ln": "matte", "td": 1, "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [200, 200.509, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.9, "y": 1 }, "o": { "x": 0.7, "y": 0 }, "t": 1, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -48.271], [-74.271, -4.919], [-74.271, 4.919], [0, 48.271], [74.271, 4.919]], "c": true }] }, { "i": { "x": 0.3, "y": 1 }, "o": { "x": 0.1, "y": 0 }, "t": 11, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -4.771], [-74.271, -4.919], [-74.271, 4.919], [0, 5.271], [74.271, 4.919]], "c": true }] }, { "i": { "x": 0.3, "y": 1 }, "o": { "x": 0.7, "y": 0 }, "t": 21, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -48.271], [-74.271, -4.919], [-74.271, 4.919], [0, 48.271], [74.271, 4.919]], "c": true }] }, { "i": { "x": 0.9, "y": 1 }, "o": { "x": 0.7, "y": 0 }, "t": 36, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -48.271], [-74.271, -4.919], [-74.271, 4.919], [0, 48.271], [74.271, 4.919]], "c": true }] }, { "i": { "x": 0.3, "y": 1 }, "o": { "x": 0.1, "y": 0 }, "t": 46, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -4.771], [-74.271, -4.919], [-74.271, 4.919], [0, 5.271], [74.271, 4.919]], "c": true }] }, { "t": 56, "s": [{ "i": [[0, 0], [38.578, 0], [0, 0], [0, 0], [-38.424, 0], [0, 0]], "o": [[0, 0], [-40.624, 0], [0, 0], [0, 0], [40.778, 0], [0, 0]], "v": [[74.271, -4.919], [0, -48.271], [-74.271, -4.919], [-74.271, 4.919], [0, 48.271], [74.271, 4.919]], "c": true }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.949019610882, 0.952941179276, 0.96862745285, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 300, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 5, "ty": 4, "nm": "#pupila", "ln": "pupila", "tt": 1, "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [200, 200.509, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 11, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0, 0, 0.333], "y": [0, 0, 0] }, "t": 12, "s": [120, 120, 100] }, { "i": { "x": [0.667, 0.667, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 31, "s": [100, 100, 100] }, { "i": { "x": [0.667, 0.667, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 46, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0, 0, 0.333], "y": [0, 0, 0] }, "t": 47, "s": [120, 120, 100] }, { "t": 66, "s": [100, 100, 100] }], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 16.444], [16.444, 0], [0, -16.444], [-16.444, 0]], "o": [[0, -16.444], [-16.444, 0], [0, 16.444], [16.444, 0]], "v": [[29.774, 0], [0, -29.774], [-29.774, 0], [0, 29.774]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.156862750649, 0.156862750649, 0.156862750649, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 300, "st": 0, "bm": 0 }], "markers": [{ "tm": 1, "cm": "1\r\n", "dr": 0 }, { "tm": 33, "cm": "33", "dr": 0 }, { "tm": 36, "cm": "36", "dr": 0 }, { "tm": 62, "cm": "62", "dr": 0 }] };


/* ==========================================================================
   3. UTILIDADES CORE (CURSOR, DRAGGABLE)
   ========================================================================== */

// --- 3.1 Draggable (Carpeta Descargas) ---
if (document.getElementById("mi-carpeta-descargas")) {
    Draggable.create("#mi-carpeta-descargas", {
        type: "x,y",
        bounds: document.documentElement,
        edgeResistance: 0.75,
        onPress() {
            this.target.style.cursor = "grabbing";
        },
        onRelease() {
            this.target.style.cursor = "pointer";
        }
    });
}

// --- 3.2 Cursor Personalizado ---
const cursor = document.getElementById("custom-cursor");
const cursorText = document.getElementById("cursor-text");

if (cursor && cursorText) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    // Tracking del movimiento
    document.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Suavizado del movimiento (Tick)
    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        gsap.set(cursor, { x: cursorX, y: cursorY });
    });

    // Interacciones del cursor con elementos
    document.querySelectorAll("[data-cursor-text]").forEach(el => {
        el.addEventListener("mouseenter", () => {
            const text = el.getAttribute("data-cursor-text");
            cursorText.textContent = text;
            cursor.classList.add("text-active");

            // Ajuste dinámico según tamaño del texto
            const rect = cursorText.getBoundingClientRect();
            const padding = 12;
            cursor.style.width = rect.width + padding * 2 + "px";
            cursor.style.height = rect.height + padding * 2 + "px";
        });

        el.addEventListener("mouseleave", () => {
            cursorText.textContent = "";
            cursor.classList.remove("text-active");
            cursor.style.width = "0.75rem";
            cursor.style.height = "0.75rem";
        });
    });
}


/* ==========================================================================
   4. ANIMACIONES BASADAS EN SCROLL
   ========================================================================== */

// --- 4.1 Animación Textos (Stagger/Accesibilidad) ---
(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selector = "p, [forzar-intro-stagger]";
    const blocks = [...document.querySelectorAll(selector)];

    if (!blocks.length) return;

    if (prefersReducedMotion) {
        gsap.set(blocks, { opacity: 1, y: 0, filter: "none" });
        return;
    }

    const groups = new Map();
    blocks.forEach(block => {
        const parent = block.parentElement;
        if (!groups.has(parent)) groups.set(parent, []);
        groups.get(parent).push(block);
    });

    const CONFIG = {
        y: 24, blur: 4, duration: 0.9, ease: "power3.out", baseDelay: 0.08, staggerStep: 0.07
    };

    gsap.set(blocks, { opacity: 0, y: CONFIG.y, filter: `blur(${CONFIG.blur}px)` });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const block = entry.target;
            const siblings = groups.get(block.parentElement) || [];
            const index = siblings.indexOf(block);

            gsap.to(block, {
                opacity: 1, y: 0, filter: "blur(0px)",
                duration: CONFIG.duration, ease: CONFIG.ease,
                delay: CONFIG.baseDelay + index * CONFIG.staggerStep
            });
            obs.unobserve(block);
        });
    }, { threshold: 0.5 });

    blocks.forEach(block => observer.observe(block));
})();

// --- 4.2 ScrollTrigger Rotación (Hover/View) ---
document.querySelectorAll("[movimiento-hover-press-view]").forEach(el => {
    gsap.set(el, { rotation: 0 });

    ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "top 40%",
        onEnter: () => gsap.to(el, { rotation: 4, duration: 0.3, ease: "power1.out" }),
        onLeave: () => gsap.to(el, { rotation: 0, duration: 0.3, ease: "power1.in" }),
        onEnterBack: () => gsap.to(el, { rotation: 4, duration: 0.3, ease: "power1.out" }),
        onLeaveBack: () => gsap.to(el, { rotation: 0, duration: 0.3, ease: "power1.in" })
    });
});

// --- 4.3 Animación Infinita (Marquee) ---
const marqueeContainer = document.querySelector(".bg-big-inter");
if (marqueeContainer) {
    let items = marqueeContainer.querySelectorAll(".inner-big-type");
    items.forEach(item => {
        const clone = item.cloneNode(true);
        marqueeContainer.appendChild(clone);
    });

    const totalWidth = Array.from(marqueeContainer.children).reduce((acc, el) => {
        const style = window.getComputedStyle(el);
        const marginRight = parseFloat(style.marginRight);
        return acc + el.offsetWidth + marginRight;
    }, 0);

    gsap.to(marqueeContainer, {
        x: `-=${totalWidth / 2}`,
        duration: 30,
        ease: "linear",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => {
                let val = parseFloat(x);
                if (val <= -totalWidth / 2) {
                    val += totalWidth / 2;
                }
                return val;
            })
        }
    });
}

// --- 4.4 SVG Toys (Caída libre) ---
document.addEventListener("DOMContentLoaded", () => {
    const toys = document.querySelectorAll("[svg-toy]");
    toys.forEach(el => {
        gsap.to(el, {
            y: "300vh",
            duration: 8,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reset",
            }
        });
    });
});

// --- 4.5 Fondo Negro al llegar al Carousel ---
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".carousel-container"); // Corregido selector
    if (!container) return;

    gsap.to(document.body, {
        backgroundColor: "#000",
        scrollTrigger: {
            trigger: container,
            start: "90% bottom",
            end: "+=200vh",
            scrub: true,
        }
    });
});


/* ==========================================================================
   5. COMPONENTES COMPLEJOS (LOTTIE, LIGHTBOX, CAROUSEL)
   ========================================================================== */

// --- 5.1 Lottie Animation Logic ---
function initLottie() {
    const container = document.getElementById("lottie-container");
    if (!container) return;
    
    if (typeof lottie === 'undefined') {
        setTimeout(initLottie, 100);
        return;
    }

    const anim = lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData
    });

    anim.addEventListener('data_ready', () => anim.goToAndStop(0, true));
    anim.addEventListener('DOMLoaded', () => anim.goToAndStop(0, true));
    setTimeout(() => anim.goToAndStop(0, true), 300);
    anim.setSpeed(1.2);

    let forward = true;
    let playing = false;

    anim.addEventListener("complete", () => { playing = false; });

    function toggleHiddenSVG(show) {
        document.querySelectorAll('.hide_svg').forEach(el => {
            el.style.display = show ? '' : 'none';
        });
    }

    container.addEventListener("click", () => {
        if (playing) return;
        playing = true;
        const start = 1;
        const end = 24;

        if (forward) {
            anim.playSegments([start, end], true);
            toggleHiddenSVG(false);
        } else {
            anim.playSegments([end, start], true);
            toggleHiddenSVG(true);
        }
        forward = !forward;
    });
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initLottie);
} else {
    setTimeout(initLottie, 100);
}


// --- 5.2 Overlay de Imágenes (Lightbox) ---
const overlay = document.getElementById("image-overlay");
const overlayImg = overlay ? overlay.querySelector("img") : null;
const galleryImages = [...document.querySelectorAll(".section img[movimiento-hover-press-view]")];
let lightboxIndex = 0;

if (overlay && overlayImg) {
    function showImage(index) {
        lightboxIndex = index;
        overlayImg.src = galleryImages[lightboxIndex].src;
        overlay.classList.add("active");
    }

    galleryImages.forEach((img, i) => {
        img.addEventListener("click", () => showImage(i));
    });

    overlay.addEventListener("click", e => {
        if (e.target === overlay || e.target === overlayImg) {
            overlay.classList.remove("active");
            overlayImg.src = "";
        }
    });

    document.addEventListener("keydown", e => {
        if (!overlay.classList.contains("active")) return;
        if (e.key === "Escape") {
            overlay.classList.remove("active");
            overlayImg.src = "";
        } else if (e.key === "ArrowRight") {
            lightboxIndex = (lightboxIndex + 1) % galleryImages.length;
            overlayImg.src = galleryImages[lightboxIndex].src;
        } else if (e.key === "ArrowLeft") {
            lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
            overlayImg.src = galleryImages[lightboxIndex].src;
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    overlayImg.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; });
    overlayImg.addEventListener("touchend", e => {
        touchEndX = e.changedTouches[0].screenX;
        const deltaX = touchEndX - touchStartX;
        if (Math.abs(deltaX) < 30) return;
        if (deltaX < 0) lightboxIndex = (lightboxIndex + 1) % galleryImages.length;
        else lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
        overlayImg.src = galleryImages[lightboxIndex].src;
    });
}


// --- 5.3 Carrusel 3D (Core) ---
(() => {
    const carousel3d = document.getElementById('carousel3d');
    if (!carousel3d) return;

    const carouselScene = document.getElementById('carouselScene');
    const carouselContainer = document.getElementById('carouselContainer');
    const progressText = document.getElementById('progressText');

    const carouselImages = [
        'assets/pesos/08.png', 'assets/pesos/07.png', 'assets/pesos/06.png',
        'assets/pesos/05.png', 'assets/pesos/04.png', 'assets/pesos/03.png',
        'assets/pesos/02.png', 'assets/pesos/01.png'
    ];

    let rotation = 0;
    let isUserScrolling = false;
    let autoRotationInterval = null;
    let scrollTimeout = null;
    const angleStep = 360 / carouselImages.length;

    function getRadius() { return carouselScene.offsetWidth * .9; }
    let radius = getRadius();

    window.addEventListener('resize', () => {
        radius = getRadius();
        updateItemPositions();
    });

    function updateItemPositions() {
        const items = carousel3d.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            const angle = angleStep * index;
            item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        });
    }

    function generateCarouselItems() {
        carouselImages.forEach((imageUrl, index) => {
            const angle = angleStep * index;
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `Peso ${String(index + 1).padStart(2, '0')}`;
            img.onerror = () => {
                console.warn(`No se encontró la imagen: ${imageUrl}`);
                img.style.backgroundColor = '#ccc';
            };

            item.appendChild(img);
            carousel3d.appendChild(item);
        });
    }

    generateCarouselItems();

    function startAutoRotation() {
        autoRotationInterval = setInterval(() => {
            if (!isUserScrolling) {
                rotation += 0.3;
                updateCarousel();
            }
        }, 16);
    }

    function updateCarousel() {
        carousel3d.style.transform = `rotateY(${rotation}deg)`;
        if (progressText) {
            const weight = Math.round((rotation % 360) / 360 * 900);
            progressText.textContent = `wght=${Math.abs(weight)}`;
        }
    }

    function handleScroll() {
        if (!carouselContainer) return;
        const rect = carouselContainer.getBoundingClientRect();
        const containerHeight = carouselContainer.offsetHeight;
        const viewportHeight = window.innerHeight;

        if (rect.top <= 0 && rect.bottom >= viewportHeight) {
            isUserScrolling = true;
            carousel3d.style.transition = 'none';

            const scrollProgress = Math.abs(rect.top) / (containerHeight - viewportHeight);
            rotation = scrollProgress * 360;
            updateCarousel();

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isUserScrolling = false;
                carousel3d.style.transition = 'transform 0.05s linear';
            }, 150);
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    startAutoRotation();
})();

// --- 5.4 Autoplay Images (Carousel Overlay) ---
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.ventana_autoplay img');
    if (images.length === 0) return;

    let currentIndex = 0;
    const intervalTime = 250;

    images[currentIndex].classList.add('active');

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, intervalTime);
});


/* ==========================================================================
   6. INTERACCIONES SIMPLES (HOVER COLORES)
   ========================================================================== */
const languageElements = document.querySelectorAll('.language');

languageElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        el.style.backgroundColor = randomColor;
    });

    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = '';
    });
});


/* ==========================================================================
   7. LOADING SCREEN (ANIMACIÓN DE ENTRADA)
   ========================================================================== */
(() => {
    const loadingContainer = document.getElementById('loadingContainer');
    const bar0 = document.getElementById('bar0');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    const buttonText = document.getElementById('buttonText');
    const allBars = [bar0, bar1, bar2, bar3];

    // Si no existen los elementos, salimos para evitar errores
    if (!loadingContainer || !bar0) return;

    function initializeBars() {
        allBars.forEach((bar) => {
            gsap.set(bar, { width: 24, height: 80, rotation: 0, opacity: 0 });
        });
        gsap.set(buttonText, { opacity: 0, visibility: 'hidden' });
    }

    function fadeInBars() {
        allBars.forEach((bar) => {
            gsap.to(bar, { opacity: 1, duration: 1, ease: "power2.out" });
        });
    }

    function animateAsterisk() {
        const rotations = [0, 60, 120, 180];
        allBars.forEach((bar, index) => {
            gsap.to(bar, { rotation: rotations[index], duration: 0.8, ease: "power3.inOut" });
        });
    }

    function animateHorizontal() {
        allBars.forEach((bar) => {
            gsap.to(bar, { rotation: 90, duration: 0.6, ease: "power3.inOut" });
        });
    }

    function animateButton() {
        gsap.to([bar0, bar1, bar2], { opacity: 0, duration: 0.8, ease: "power3.inOut" });
        gsap.to(bar3, { width: 48, height: 174, duration: 0.8, ease: "power3.inOut" });
    }

    function showButtonText() {
        gsap.to(buttonText, { opacity: 1, visibility: 'visible', duration: 0.6, ease: "power2.inOut" });
    }

    function startAnimationSequence() {
        initializeBars();
        const timeline = gsap.timeline();
        timeline
            .add(() => fadeInBars(), 0.5)
            .add(() => animateAsterisk(), 1.0)
            .add(() => animateHorizontal(), 1.8)
            .add(() => animateButton(), 2.6)
            .add(() => showButtonText(), 3.0);
    }

    function handleButtonClick() {
        gsap.to(loadingContainer, {
            y: '-120vh',
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
                loadingContainer.remove();
                document.body.style.overflow = 'auto'; // Restaurar scroll
            }
        });
    }

    bar3.addEventListener('click', handleButtonClick);

    // Iniciar
    if (document.readyState === 'complete') {
        startAnimationSequence();
    } else {
        window.addEventListener('load', startAnimationSequence);
    }
})();


/* ==========================================================================
   8. TYPE TESTER (APP LOGIC) - SOLO CURSOR (SIN PLACEHOLDER)
   ========================================================================== */
(() => {
    // Inicializar Lucide Icons si existen
    if (typeof lucide !== 'undefined') lucide.createIcons();

    const els = {
        container: document.getElementById('typeTester'),
        textArea: document.getElementById('textArea'),
        displayArea: document.getElementById('displayArea'),
        weightSlider: document.getElementById('weightSlider'),
        opszSlider: document.getElementById('opszSlider'),
        sizeSlider: document.getElementById('sizeSlider'),
        normalBtn: document.getElementById('normalBtn'),
        italicBtn: document.getElementById('italicBtn'),
        expandBtn: document.getElementById('expandBtn'),
        infoBtn: document.getElementById('infoBtn'),
        infoPanel: document.getElementById('infoPanel')
    };

    if (!els.container) return;

    // --- 1. CSS INYECTADO PARA EL CURSOR ---
    // Esto asegura que el cursor sea negro y que la caja tenga altura
    // incluso si no hay ni una sola letra escrita.
    const style = document.createElement('style');
    style.innerHTML = `
        #textArea {
            caret-color: black !important; /* Cursor siempre negro */
            outline: none; /* Sin borde azul */
            min-height: 1em; /* LA CLAVE: Reserva espacio vertical siempre */
            display: block;
            white-space: nowrap;
            /* Si usas flexbox para centrar en tu CSS, esto asegura que el cursor salga en medio */
            width: 100%; 
        }
        /* Ajuste para modo oscuro si lo necesitas */
        @media (prefers-color-scheme: dark) {
            #textArea { caret-color: white; }
        }
    `;
    document.head.appendChild(style);

    const ABSOLUTE_MAX_SIZE = 99;

    const state = {
        weight: 400,
        opsz: 24,
        fontSize: 60,
        maxPossibleSize: ABSOLUTE_MAX_SIZE,
        isItalic: false,
        isExpanded: false,
        showInfo: false,
        manualSizeControl: false
    };

    function isDesktop() { return window.innerWidth > 768; }

    if (!isDesktop()) {
        state.isExpanded = true;
        els.container.classList.add('tt-expanded');
    }

    function updateTextStyle() {
        els.textArea.style.fontFamily = 'InterVariable, sans-serif';
        els.textArea.style.fontWeight = state.weight;
        els.textArea.style.fontSize = state.fontSize + 'px';
        els.textArea.style.fontStyle = state.isItalic ? 'italic' : 'normal';
        els.textArea.style.fontVariationSettings = `'opsz' ${state.opsz}`;
        els.textArea.style.lineHeight = '1.1';
        els.textArea.style.letterSpacing = '-0.02em';
        els.textArea.style.whiteSpace = 'nowrap';
    }

    function updateUI() {
        document.getElementById('weightValue').textContent = state.weight;
        document.getElementById('opszValue').textContent = state.opsz.toFixed(1);
        document.getElementById('sizeValue').textContent = state.fontSize + 'px';
        
        const fWeight = document.getElementById('footerWeight');
        const fOpsz = document.getElementById('footerOpsz');
        const fStyle = document.getElementById('footerStyle');
        const fSize = document.getElementById('footerSize');

        if(fWeight) fWeight.textContent = state.weight;
        if(fOpsz) fOpsz.textContent = state.opsz.toFixed(1);
        if(fStyle) fStyle.textContent = state.isItalic ? 'italic' : 'normal';
        if(fSize) fSize.textContent = state.fontSize;
    }

    function calculateMaxSize() {
        if (!state.isExpanded) return;

        // Limpieza de basura HTML que a veces dejan los navegadores
        if (els.textArea.innerHTML === '<br>') els.textArea.innerHTML = '';

        const content = els.textArea.textContent;

        // --- MODO VACÍO ---
        // Si no hay texto, forzamos un tamaño de 60px.
        // Esto hace que la "min-height: 1em" sea de 60px, 
        // mostrando un cursor grande y claro esperando input.
        if (!content || content.length === 0) {
             state.fontSize = 60;
             els.textArea.style.fontSize = '60px';
             els.sizeSlider.value = 60;
             updateUI();
             return; 
        }
        
        const containerWidth = els.displayArea.clientWidth - 32;
        const containerHeight = els.displayArea.clientHeight - 32;
        
        // Prevención de errores de carga inicial
        if (containerWidth <= 0 || containerHeight <= 0) {
            if (els.displayArea.clientHeight === 0) {
                els.displayArea.style.height = '100%';
                setTimeout(() => {
                   els.displayArea.style.height = '';
                   calculateMaxSize();
                }, 50);
            }
            return;
        }

        const currentSizeSelection = state.fontSize;
        let min = 16, max = ABSOLUTE_MAX_SIZE, bestFit = 16, iterations = 0;
        
        // Cálculo del tamaño (Auto Fit)
        while (min <= max && iterations < 30) {
            const testSize = Math.floor((min + max) / 2);
            els.textArea.style.fontSize = testSize + 'px';
            const textWidth = els.textArea.scrollWidth;
            const textHeight = els.textArea.scrollHeight;
            
            if (textWidth > containerWidth || textHeight > containerHeight) {
                max = testSize - 1;
            } else {
                bestFit = testSize;
                min = testSize + 1;
            }
            iterations++;
        }
        
        state.maxPossibleSize = bestFit;
        els.sizeSlider.max = bestFit;

        // Decisión: Auto vs Manual
        if (!state.manualSizeControl) {
            state.fontSize = bestFit;
            els.sizeSlider.value = bestFit;
        } else {
            if (currentSizeSelection > bestFit) {
                state.fontSize = bestFit;
                els.sizeSlider.value = bestFit;
            } else {
                state.fontSize = currentSizeSelection;
            }
        }

        els.textArea.style.fontSize = state.fontSize + 'px';
        updateUI();
    }

    // Event Listeners
    els.weightSlider.addEventListener('input', (e) => {
        state.weight = Number(e.target.value);
        updateTextStyle();
        updateUI();
        calculateMaxSize();
    });

    els.opszSlider.addEventListener('input', (e) => {
        state.opsz = Number(e.target.value);
        updateTextStyle();
        updateUI();
        calculateMaxSize();
    });

    els.sizeSlider.addEventListener('input', (e) => {
        state.manualSizeControl = true;
        state.fontSize = Number(e.target.value);
        updateTextStyle();
        updateUI();
    });

    els.normalBtn.addEventListener('click', () => {
        state.isItalic = false;
        els.normalBtn.classList.add('tt-style-btn-active');
        els.italicBtn.classList.remove('tt-style-btn-active');
        updateTextStyle();
        updateUI();
        calculateMaxSize();
    });

    els.italicBtn.addEventListener('click', () => {
        state.isItalic = true;
        els.italicBtn.classList.add('tt-style-btn-active');
        els.normalBtn.classList.remove('tt-style-btn-active');
        updateTextStyle();
        updateUI();
        calculateMaxSize();
    });

    els.expandBtn.addEventListener('click', () => {
        state.isExpanded = !state.isExpanded;
        els.container.classList.toggle('tt-expanded');
        
        const icon = els.expandBtn.querySelector('[data-lucide]');
        if (icon) {
            icon.setAttribute('data-lucide', state.isExpanded ? 'minimize-2' : 'maximize-2');
            lucide.createIcons();
        }
        
        if (state.isExpanded) {
            els.container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        setTimeout(() => calculateMaxSize(), 550);
    });

    els.infoBtn.addEventListener('click', () => {
        state.showInfo = !state.showInfo;
        els.infoPanel.classList.toggle('active');
        
        if (state.showInfo && !state.isExpanded) {
            state.isExpanded = true;
            els.container.classList.add('tt-expanded');
            const expandIcon = els.expandBtn.querySelector('[data-lucide]');
            if (expandIcon) {
                expandIcon.setAttribute('data-lucide', 'minimize-2');
                lucide.createIcons();
            }
            setTimeout(() => calculateMaxSize(), 550);
        }
        
        const icon = els.infoBtn.querySelector('[data-lucide]');
        if (icon) {
            icon.setAttribute('data-lucide', state.showInfo ? 'chevron-up' : 'chevron-down');
            lucide.createIcons();
        }
    });

    els.textArea.addEventListener('input', () => {
        // Guardamos posición de scroll para evitar saltos
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        state.manualSizeControl = false;
        calculateMaxSize();
        
        // Restauramos scroll
        window.scrollTo(scrollX, scrollY);
    });

    window.addEventListener('resize', () => calculateMaxSize());

    // Inicialización
    // Forzamos el foco en el textarea al cargar
    els.textArea.focus();
    updateTextStyle();
    
    // Si carga vacío, aseguramos el tamaño inicial y calculamos
    if (!els.textArea.textContent) {
        state.fontSize = 60;
        els.textArea.style.fontSize = '60px';
    } else {
        calculateMaxSize();
    }
    
    updateUI();
    
    if (state.isExpanded) {
        setTimeout(() => calculateMaxSize(), 300);
    }
})();
