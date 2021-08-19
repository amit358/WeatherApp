function getWeather(){
    var iCityName = document.getElementById("iCity");
    var displayCity = document.getElementById("dispCity");
    displayCity.innerHTML = iCityName.value;

    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+iCityName.value+"&appid=12551a48a300dfd836c24f8b1a48b770")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for(i = 0; i<5; i++){

            document.getElementById("day" + (i+1)).innerHTML = "<strong>"+weekday[CheckDay(i)]+"</strong>";
            document.getElementById("minValue"+(i+1)).innerHTML = "Min: <strong>" + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "° </strong>";
            document.getElementById("maxValue"+(i+1)).innerHTML = "Max: <strong>" + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°</strong>";
            document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
            data.list[i].weather[0].icon
            +".png";
        }
    })
    .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"));
}

function DefaultScreen(){
    document.getElementById("iCity").defaultValue = "Pune";
    getWeather();
}

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}
