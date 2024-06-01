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

    document.addEventListener("DOMContentLoaded", function() {
        var coresStyle = document.createElement("style");
        var styles = "";

        for (var cor in cores) {
            styles += `
                .background-${cor} {
                    background-color: ${cores[cor]} !important;
                }
                .color-${cor} {
                    color: ${cores[cor]} !important;
                }
            `;
        }

        coresStyle.innerHTML = styles;
        document.head.appendChild(coresStyle);

    });

    document.addEventListener("DOMContentLoaded", function() {
        var styleElement = document.createElement("style");
        var styles = "";

        for (var i = 1; i <= 9999; i++) {
            styles += `

                .padd-px-${i} {
                    padding: ${i * 10}px !important;
                }
                .padd-percent-${i} {
                    padding: ${i * 10}% !important;
                }



                .marg-px-${i} {
                    margin: ${i * 10}px !important;
                }
                .marg-percent-${i} {
                    margin: ${i * 10}% !important;
                }
                .marg-top-px-${i} {
                    margin-top: ${i * 10}px !important;
                }
                .marg-top-percent-${i} {
                    margin-top: ${i * 10}% !important;
                }
                .marg-bottom-px-${i} {
                    margin-bottom: ${i * 10}px !important;
                }
                .marg-bottom-percent-${i} {
                    margin-bottom: ${i * 10}% !important;
                }
                .marg-left-px-${i} {
                    margin-left: ${i * 10}px !important;
                }
                .marg-left-percent-${i} {
                    margin-left: ${i * 10}% !important;
                }
                .marg-right-px-${i} {
                    margin-right: ${i * 10}px !important;
                }
                .marg-right-percent-${i} {
                    margin-right: ${i * 10}% !important;
                }



                .t-width-px-${i} {
                    width: ${i * 10}px !important;
                }
                .t-height-px-${i} {
                    height: ${i * 10}px !important;
                }
                .t-width-cent-${i} {
                    width: ${i * 10}% !important;
                }
                .t-height-cent-${i} {
                    height: ${i * 10}% !important;
                }



                .borderad-px-${i} {
                    border-radius: ${i * 10}px !important;
                }
                .borderad-cent-${i} {
                    border-radius: ${i * 10}% !important;
                }



                .ts-px-${i} {
                    font-size: ${i * 10}px !important;
                }
                .ts-cent-${i} {
                    font-size: ${i * 10}% !important;
                }
            `;
        }

        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);
    });

    document.addEventListener("DOMContentLoaded", function() {
        var aling_item = document.createElement("style");
        aling_item.innerHTML = `
            .aling_item {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `;
        document.head.appendChild(aling_item);
    });

    document.addEventListener("DOMContentLoaded", function() {
        var center = document.createElement("style");
        center.innerHTML = `
            .center {
                margin: auto;
                position: absolute;
                top: 0; bottom: 0; 
                left: 0; right: 0; 
            }
        `;
        document.head.appendChild(center);
    });