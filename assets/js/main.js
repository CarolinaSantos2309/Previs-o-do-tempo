// minha chave da api
const key = "e0283766cee7e7e70be7e75409ae8042"

//função para pegar o valor do input-cidade
function coletarValor() {
    //buscando  o valor  do input no html 
    let cidade = document.querySelector(".input-cidade").value
    console.log(cidade)
    dadosAPI(cidade)
}
// funcao para pegar dados da api

async function dadosAPI(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    console.log(dados);
    dadosTela(dados);
}
function dadosTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em : " + dados.name
    document.querySelector(".Temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone-de-previsao").src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umi").innerHTML = "Umidade: " + dados.main.humidity + "%"

}