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

// function inserirConteudo() {
//     // Cria os elementos HTML
//     var divConteudo = document.createElement("div");
//     var titulo = document.createElement("h1");
//     var paragrafo = document.createElement("p");

//     // Define o conteúdo dos elementos
//     titulo.textContent = "Minha Biblioteca";
//     paragrafo.textContent = "Bem-vindo à minha biblioteca!";

//     // Adiciona os elementos à div de conteúdo
//     divConteudo.appendChild(titulo);
//     divConteudo.appendChild(paragrafo);

//     // Adiciona a div de conteúdo à página
//     document.getElementById("conteudo").appendChild(divConteudo);
// }

document.addEventListener("DOMContentLoaded", function() {
    var tamanhoStyle = document.createElement("style");
    var styles = "";

    for (var i = 1; i <= 9999; i++) {
        styles += `
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
        `;
    }

    tamanhoStyle.innerHTML = styles;
    document.head.appendChild(tamanhoStyle);
});

document.addEventListener("DOMContentLoaded", function() {
    var tamanhosizeStyle = document.createElement("style");
    var styles = "";

    for (var i = 1; i <= 9999; i++) {
        styles += `
            .ts-px-${i} {
                font-size: ${i * 10}px !important;
            }
          
            .ts-cent-${i} {
                font-size: ${i * 10}% !important;
            }
           
        `;
    }

    tamanhosizeStyle.innerHTML = styles;
    document.head.appendChild(tamanhosizeStyle);
});

document.addEventListener("DOMContentLoaded", function() {
    var borderadiusStyle = document.createElement("style");
    var styles = "";

    for (var i = 1; i <= 9999; i++) {
        styles += `
            .borderad-px-${i} {
                border-radius: ${i * 10}px !important;
            }
          
            .borderad-cent-${i} {
                border-radius: ${i * 10}% !important;
            }
           
        `;
    }

    borderadiusStyle.innerHTML = styles;
    document.head.appendChild(borderadiusStyle);
});


document.addEventListener("DOMContentLoaded", function() {
    var paddingStyle = document.createElement("style");
    var styles = "";

    for (var i = 1; i <= 9999; i++) {
        styles += `
            .padd-px-${i} {
                padding: ${i * 10}px !important;
            }
          
            .padd-cent-${i} {
                padding: ${i * 10}% !important;
            }
           
        `;
    }

    paddingStyle.innerHTML = styles;
    document.head.appendChild(paddingStyle);
});


document.addEventListener("DOMContentLoaded", function() {
    var minhaClasseStyle = document.createElement("style");
    minhaClasseStyle.innerHTML = `
        .minha-classe {

            padding: 20px;
            border-radius: 5px;
            margin: 20px;
        }
    `;
    document.head.appendChild(minhaClasseStyle);
});
