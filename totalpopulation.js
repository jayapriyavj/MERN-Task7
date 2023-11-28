var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);

    var respopulation = result.map((value) => value.population);
    console.log("respopulation:" + respopulation);
    var totalpopulation = respopulation.reduce((acc, value) => acc + value, 0);
    console.log("Totalpopulation of countries:" + totalpopulation);
}