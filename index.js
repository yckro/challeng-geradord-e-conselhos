const botaoDeCriarConcelho = document.querySelector(".icon");
const numeroDoConcelho = document.querySelector(".advice");
const textoDoConcelho = document.querySelector(".textos");

async function chamarConcelho() {
    try {
        const resposta = await fetch("https://api.adviceslip.com/advice");

        if (!resposta.ok) {
            throw new Error("Erro de comunicação com a API");
        }


        const adviceContent = await resposta.json();
        const adviceId = `Advice #${adviceContent.slip.id}`;
        const adviceText = `"${adviceContent.slip.advice}"`;

        numeroDoConcelho.innerText = adviceId;
        textoDoConcelho.innerText = adviceText;

    } catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error);
    }

}

botaoDeCriarConcelho.addEventListener("click", chamarConcelho);

chamarConcelho();