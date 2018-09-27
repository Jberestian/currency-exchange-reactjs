const _id = function (id) {
    return document.getElementById(id);
};
// присвоение локальной даты
let date = new Date();
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};
_id("exchange-today").innerHTML = date.toLocaleDateString("en-US", options);
const buyUSD = _id("exchange-usd");
const buyEUR = _id("exchange-eur");
const buyRUR = _id("exchange-rur");
const buyBTC = _id("exchange-btc");

const saleUSD = _id("exchange-sale-usd");
const saleEUR = _id("exchange-sale-eur");
const saleRUR = _id("exchange-sale-rur");
const saleBTC = _id("exchange-sale-btc");

function view (obj) {
    let [{"buy": euBuy, "sale": euSale},
        {"buy": ruBuy, "sale": ruSale},
        {"buy": usBuy, "sale": usSale},
        {"buy": btBuy, "sale": btSale},] = obj;

    buyUSD.innerHTML = parseFloat(usBuy).toFixed(2);
    buyEUR.innerHTML = parseFloat(euBuy).toFixed(2);
    buyRUR.innerHTML = parseFloat(ruBuy).toFixed(2);
    buyBTC.innerHTML = parseFloat(btBuy).toFixed(2);

    saleUSD.innerHTML = parseFloat(usSale).toFixed(2);
    saleEUR.innerHTML = parseFloat(euSale).toFixed(2);
    saleRUR.innerHTML = parseFloat(ruSale).toFixed(2);
    saleBTC.innerHTML = parseFloat(btSale).toFixed(2);

};
const urlPrivat = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

fetch(urlPrivat, {metod: "get"})
    .then((response) => {
        let json = response.json();
        if (response.status >= 200 && response.status < 300) {
            return json;
        }
        else {
            return error;
        }
    }).then((json) => {
    // console.log('json = ', json);
    let obj = "";
    // obj  = JSON.parse(json);
    // console.log('is obj = ', typeof json);
    view(json);
})
    .catch(function(error) {
        // console.log('Fetch Error :-S', error);
    });
















//
