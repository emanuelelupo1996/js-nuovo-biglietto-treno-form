const inputChilometri = document.getElementById("chilometri");
const btnCalcola = document.getElementById("calcola");
const risultatoEl = document.getElementById("costo-biglietto");
const selectFasciaEta = document.getElementById("fascia-eta");
const formElement = document.getElementById("biglietto-form")


formElement.addEventListener("submit", calcolaBiglietto);

function calcolaBiglietto(event) {
    event.preventDefault();
    const chilometri = Number(inputChilometri.value);
    const tariffaBase = 0.21;

    if (isNaN(chilometri) || chilometri <= 0) {
        risultatoEl.innerText = "Inserisci chilometri validi";
        return;
    }

    let costoBiglietto = chilometri * tariffaBase;

    const tariffa = selectFasciaEta.value;
    if (tariffa == "junior") {
        costoBiglietto = costoBiglietto * 0.8;
    } else if (tariffa == "senior") {
        costoBiglietto = costoBiglietto * 0.6;
    }

    risultatoEl.innerText = `Costo del biglietto ${costoBiglietto.toFixed(2)} €`;


    console.log(`Costo: ${costoBiglietto} €`);
}