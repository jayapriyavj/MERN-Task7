var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);
    // var rescurrencies = result.map((value) => value.currencies);
    // console.log(rescurrencies);
    // var currencies1 = rescurrencies.filter((value) => value != undefined);
    // console.log(currencies1);
    // var currencies2 = currencies1.filter((value) => value.USD);
    // console.log(currencies2);
    var rescurrencies = result.filter((value) => value.currencies);
    console.log(rescurrencies);
    var currencies1 = rescurrencies.map((value) => value.currencies);
    console.log(currencies1);
    var currencies2 = currencies1.filter((value) => value.USD);
    console.log(currencies2);

}
