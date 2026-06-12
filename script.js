// ================================
// CONTADOR DO RELACIONAMENTO
// ================================

function atualizarContador() {

    const dataInicio = new Date("2024-08-18T00:00:00");
    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60))
        / (1000 * 60)
    );

    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
}

atualizarContador();

setInterval(
    atualizarContador,
    60000
);

// ================================
// SCROLL SUAVE
// ================================

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}

// ================================
// EFEITO DE DIGITAÇÃO
// ================================

const mensagem = `

Minha pequena,

Desde o dia que fui te visitar naquele hospital minha vida nunca foi mais a mesma.

Agradeço a Deus todos os dias por ter colocado você em minha vida.

Você trouxe felicidade, carinho, companheirismo e amor para os meus dias.

Com você vivi momentos incríveis e conheci lugares incríveis, mas nenhum deles se compara a você.

Te amo para sempre.

Você é a melhor coisa que me aconteceu.

❤️ Samuel

`;

let indice = 0;

function escreverMensagem() {

    const elemento =
        document.getElementById("typing-text");

    if (!elemento) return;

    if (indice < mensagem.length) {

        elemento.innerHTML +=
            mensagem.charAt(indice);

        indice++;

        setTimeout(
            escreverMensagem,
            40
        );
    }

}

window.addEventListener(
    "load",
    escreverMensagem
);

// ================================
// CHUVA DE CORAÇÕES
// ================================

function criarCoracao() {

    const container =
        document.getElementById(
            "hearts-container"
        );

    if (!container) return;

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(
    criarCoracao,
    400
);

// ================================
// ANIMAÇÃO AO ROLAR
// ================================

const observador =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );

document
    .querySelectorAll(".section")
    .forEach((secao) => {

        secao.classList.add("hidden");

        observador.observe(secao);

    });

// ================================
// EFEITO DE CLIQUE NAS FOTOS
// ================================

const fotos =
    document.querySelectorAll(
        ".gallery img"
    );

fotos.forEach((foto) => {

    foto.addEventListener(
        "click",
        () => {

            foto.classList.toggle(
                "foto-destaque"
            );

        }
    );

});

// ================================
// MENSAGEM NO CONSOLE
// ================================

console.log(
    "❤️ Samuel ama muito a Letícia ❤️"
);