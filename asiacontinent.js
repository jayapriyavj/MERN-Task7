var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);


    var respopulation = result.filter((value) => value.region == "Asia");
    console.log(respopulation);
    var country = respopulation.map((value) => value.name.common);
    console.log("All countries in Asia continent/region:\n" + country);



}