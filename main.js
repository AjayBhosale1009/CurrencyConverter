console.log("Main.js working");


const populate = async (value, currency) => {
    let myStr = "";
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_D9FpFBg1WV0hLW0Lf01AqhCQxQUX1hsuY8DFAuB4&base_currency=" + currency;

    let response = await fetch(url);
    let rJson = await response.json();
    document.querySelector(".output").style.display = "block";

    for (let key of Object.keys(rJson["data"])) {
        myStr += `
        <tr>
            <td>${key}</td>
            <td>${rJson["data"][key]["code"]}</td>
            <td>${(rJson["data"][key]["value"] * value).toFixed(2)}</td>
            <br>
        </tr>
        `;
    }

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;


}
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Button is clicked!");

    const value = parseFloat(document.querySelector('input[name="quantity"]').value);
    const currency = document.querySelector("select[name='currency']").value;

    populate(value, currency);


})
