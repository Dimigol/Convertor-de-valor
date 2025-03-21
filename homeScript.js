fetchData();

document.addEventListener("DOMContentLoaded", function () { //Para copiar os dados dos seletores
    const selectOrigem = document.getElementById("moedaOrigem");
    const selectDestino = document.getElementById("moedaDestino");

    selectDestino.innerHTML = selectOrigem.innerHTML;
});


async function fetchData() //feito para debug
{
    try
    {
        const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${}-${}`);

        if(!response.ok)
        {
            throw new Error("Could not fetch");
        }
        const data = await response.json();
        console.log(data);

    }
    catch(error)
    {
        console.error(error);
    }
}
