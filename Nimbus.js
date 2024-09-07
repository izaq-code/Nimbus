document.addEventListener('DOMContentLoaded', () => {
    const nimbus = new Nimbus();
    nimbus.applyStyles();
});

class Nimbus {
    constructor() {
        this.Nimbusmap = {};
        this.initStyles();
    }

    initStyles() {
        const css = `
        /* Adicione aqui seus estilos CSS */
        :root {
            --cor-principal: #225d99;
            --cor-principal-hover: #154a80;
            --cor-fundo-body-light: #f5f5f6;
            --cor-padrao-light: white;
            --color-padrao-light: #333;
            --cor-fundo-body-dark: #333;
            --cor-padrao-dark: #444;
            --color-padrao-dark: #fff;
            --corprincipal: #225d99;
            --corprincipalhover: #154a80;
            --corfundo: #f5f6f6;
            --corfundosecundaria: white;
            --cortextoprincipal: black;
            --cortextoprincipalhover: #d8d8d8;
            --cortextosecundario: rgb(158, 158, 158);
            --cortextosecundariohover: #7e7e7e;
        }

        .input {
            position: relative;
            margin-bottom: 20px;
        }

        .input input {
            width: 300px;
            height: 50px;
            border-radius: 6px;
            font-size: 18px;
            padding: 0 15px;
            border: 1px solid var(--cortextosecundario);
            outline: none;
            transition: border-color 0.3s ease-in-out;
            background-color: var(--corfundo);
        }

        .input label {
            background-color: var(--corfundo);
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            color: var(--cortextosecundario);
            font-size: 19px;
            pointer-events: none;
            transition: .3s;
        }

        .input input:focus~label {
            top: 0;
            left: 15px;
            font-size: 16px;
            padding: 0 1px;
            background: var(--corfundo);
            color: var(--corprincipal);
        }

        .input input:valid~label {
            top: 0;
            left: 15px;
            font-size: 16px;
            padding: 0 1px;
            color: var(--cortextosecundario);
        }

        .input input:focus,
        .input input:not(:placeholder-shown) {
            border-color: var(--cortextosecundario);
        }

        body.dark-mode .input input {
            border: 1px solid var(--cortextosecundario);
            background-color: var(--cor-fundo-body-dark);
            color: var(--color-padrao-dark) !important;
        }

        body.dark-mode .input label {
            background-color: var(--cor-fundo-body-dark);
            color: var(--cortextosecundario);
        }

        body.dark-mode .input input:focus~label {
            background: var(--cor-fundo-body-dark);
            color: var(--color-padrao-dark);
        }

        body.dark-mode .input input:focus,
        body.dark-mode .input input:not(:placeholder-shown) {
            border: 1px solid var(--cortextosecundario);
        }

        body.dark-mode .input input:focus {
            border-color: var(--color-padrao-dark);
        }
        `;

        let styleElement = document.getElementById('nimbus-style');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'nimbus-style';
            document.head.appendChild(styleElement);
        }
        styleElement.textContent = css;
    }

    applyStyles() {
        const elements = document.querySelectorAll('[nimbus]');

        elements.forEach(element => {
            const nimbusValue = element.getAttribute('nimbus');
            const [inputFormat, ...classList] = nimbusValue.split(',').map(part => part.trim());

            if (inputFormat.startsWith('in{') && inputFormat.endsWith('}')) {
                const labelText = inputFormat.slice(3, -1);
                this.generateInputElement(labelText, element);
            }

            classList.forEach(style => {
                if (style) {
                    if (!this.Nimbusmap[style]) {
                        this.processStyle(style);
                    }
                    const mapping = this.Nimbusmap[style];
                    if (mapping) {
                        mapping.forEach(m => {
                            element.querySelector('.input').style[m.property] = m.value;
                        });
                    } else {
                        element.classList.add(style);
                    }
                }
            });
        });
    }

    generateInputElement(labelText, parentElement) {
        const inputContainer = document.createElement('div');
        inputContainer.className = 'input';

        const inputElement = document.createElement('input');
        inputElement.type = 'text'; 
        inputElement.required = true;

        const labelElement = document.createElement('label');
        const uniqueId = 'input-' + Math.random(); 
        inputElement.id = uniqueId;
        labelElement.setAttribute('for', uniqueId);
        labelElement.textContent = labelText;

        inputContainer.appendChild(inputElement);
        inputContainer.appendChild(labelElement);

        parentElement.innerHTML = '';
        parentElement.appendChild(inputContainer);
    }

    processStyle(style) {
        if (style.startsWith('background-')) {
            const color = style.split('-')[1];
            this.Nimbusmap[style] = [{ property: 'backgroundColor', value: cores[color] }];
        } else if (style.startsWith('color-')) {
            const color = style.split('-')[1];
            this.Nimbusmap[style] = [{ property: 'color', value: cores[color] }];
        } else if (style.startsWith('t-height-px-')) {
            const height = style.split('-')[3];
            this.Nimbusmap[style] = [{ property: 'height', value: `${parseInt(height)}px` }];
        } else if (style.startsWith('t-height-cent-')) {
            const height = style.split('-')[3];
            this.Nimbusmap[style] = [{ property: 'height', value: `${parseInt(height)}%` }];
        } else if (style.startsWith('t-width-cent-')) {
            const width = style.split('-')[3];
            this.Nimbusmap[style] = [{ property: 'width', value: `${parseInt(width)}%` }];
        } else if (style.startsWith('t-width-px-')) {
            const width = style.split('-')[3];
            this.Nimbusmap[style] = [{ property: 'width', value: `${parseInt(width)}px` }];
        } else if (style.startsWith('ts-px-')) {
            const size = style.split('-')[2];
            this.Nimbusmap[style] = [{ property: 'fontSize', value: `${parseInt(size)}px` }];
        } else if (style.startsWith('ts-cent-')) {
            const size = style.split('-')[2];
            this.Nimbusmap[style] = [{ property: 'fontSize', value: `${parseInt(size)}%` }];
        } else if (style === 'align_item_center') {
            this.Nimbusmap[style] = [
                { property: 'justifyContent', value: 'center' },
                { property: 'alignItems', value: 'center' }
            ];
        } else if (style === 'align_item') {
            this.Nimbusmap[style] = [{ property: 'display', value: 'flex' }];
        } else if (style === 'center') {
            this.Nimbusmap[style] = [
                { property: 'margin', value: 'auto' },
                { property: 'position', value: 'absolute' },
                { property: 'top', value: '0' },
                { property: 'bottom', value: '0' },
                { property: 'left', value: '0' },
                { property: 'right', value: '0' }
            ];
        } else if (style.startsWith('borderad-px-')) {
            const radius = style.split('-')[2];
            this.Nimbusmap[style] = [{ property: 'borderRadius', value: `${parseInt(radius)}px` }];
        } else if (style.startsWith('borderad-cent-')) {
            const radius = style.split('-')[2];
            this.Nimbusmap[style] = [{ property: 'borderRadius', value: `${parseInt(radius)}%` }];
        } else if (style.startsWith('gap-px-')) {
            const gap = style.split('-')[2];
            this.Nimbusmap[style] = [{ property: 'gap', value: `${parseInt(gap)}px` }];
        } else if (style.startsWith('gap-cent-')) {
            const gap = style.split('-')[2];
            this.Nimbusmap[style] = [{ property: 'gap', value: `${parseInt(gap)}%` }];
        } else if (style.startsWith('marg-px-')) {
            const margin = style.split('-')[2];
            this.Nimbusmap[style] = [{ property: 'margin', value: `${parseInt(margin)}px` }];
        } else if (style.startsWith('marg-cent-')) {
            const margin = style.split('-')[2];
            this.Nimbusmap[style] = [{ property: 'margin', value: `${parseInt(margin)}%` }];
        } else if (style.startsWith('grid-columns-')) {
            const parts = style.split('-');
            const minWidth = parts[2];
            const fraction = parts[3];
            this.Nimbusmap[style] = [{ property: 'gridTemplateColumns', value: `repeat(auto-fit, minmax(${minWidth}px, ${fraction}fr))` }];
        }
    }
}

const cores = {
    red: "#ff0000",
    blue: "#0000ff",
    green: "#00ff00",
    yellow: "#ffff00",
    purple: "#800080",
    orange: "#ffa500",
    pink: "#ffc0cb",
    cyan: "#00ffff",
    brown: "#a52a2a",
    gray: "#808080",
    black: "#000000",
    white: "#ffffff",
    turquoise: "#40e0d0",
    coral: "#ff7f50",
    gold: "#ffd700",
    silver: "#c0c0c0",
    indigo: "#4b0082",
    violet: "#8a2be2",
    magenta: "#ff00ff",
    bronze: "#cd7f32",
    sapphire: "#0f52ba",
    emerald: "#50c878",
    ruby: "#e0115f",
    lilac: "#c8a2c8", 
    aqua: "#00ffff",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    blanchedalmond: "#ffebcd",
    blueviolet: "#8a2be2",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    rebeccapurple: "#663399",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    wheat: "#f5deb3",
    whitesmoke: "#f5f5f5",
    yellowgreen: "#9acd32"
};


document.addEventListener('DOMContentLoaded', () => {
    const nimbus = new Nimbus();
    nimbus.applyStyles();
});
