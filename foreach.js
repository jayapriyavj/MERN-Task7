var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);
    // countries name 
    // result.forEach(function (result) {
    //     result = result.name.common;
    //     console.log(result);

    // });

    // // flag
    // result.forEach(function (result) {
    //     result = result.flag;
    //     console.log(result);

    // });
    
    // // capital
    result.forEach(function (result) {
        result = result.capital;
        console.log(result);

    });
    

}
