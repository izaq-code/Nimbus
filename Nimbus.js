document.documentElement.setAttribute('nimbus', '');

class Nimbus {
    constructor() {
        this.Nimbusmap = {};
    }

    applyStyles() {
        const elements = document.querySelectorAll('[nimbus]');

        elements.forEach(element => {
            const nimbusValue = element.getAttribute('nimbus');
            const usedClasses = nimbusValue.split(',').map(style => style.trim());

            usedClasses.forEach(style => {
                if (!this.Nimbusmap[style]) {
                    this.processStyle(style);
                }
                const mapping = this.Nimbusmap[style];
                if (mapping) {
                    mapping.forEach(m => {
                        element.style[m.property] = m.value;
                    });
                }
            });
        });
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
        }  else if (style.startsWith('t-width-cent-')) {
            const width = style.split('-')[3];
            this.Nimbusmap[style] = [{ property: 'width', value: `${parseInt(width)}%` }];
        }  else if (style.startsWith('t-width-px-')) {
            const width = style.split('-')[3];
            this.Nimbusmap[style] = [{ property: 'width', value: `${parseInt(width)}px` }];
        }else if (style.startsWith('aling_item_center')) {
            this.Nimbusmap[style] = [
                { property: 'justifyContent', value: 'center' },
                { property: 'alignItems', value: 'center' }
            ];
        } else if (style.startsWith('aling_item')) {
            this.Nimbusmap[style] = [{ property: 'display', value: 'flex' }];
        } else if (style.startsWith('center')) {
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
    lilac: "#c8a2c8"
};

document.addEventListener('DOMContentLoaded', () => {
    const nimbus = new Nimbus();
    nimbus.applyStyles();
});
