"use strict";
const api={
    key:"4910a01dd1e0e915bf4e322fbe5326cf",
    baseurl:"https://api.openweathermap.org/data/2.5/",
};

const header = document.querySelector("header")
// const div = document.createElement("div");
// header.prepend(div)
// div.classList.add("div1")



const SearchBox = document.querySelector(".search-box");
SearchBox.addEventListener("keypress",setQuery)
function setQuery(e){
    if(e.keyCode == 13){
        getResults(SearchBox.value)
        console.log(SearchBox.value);
    }
}

function getResults (query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector(".location .city")
    city.innerHTML= `${weather.name},${weather.sys.country}`;

    let now = new Date ();
    let date = document.querySelector(".location .date");
    date.innerHTML= dateBuuilder(now);

    let temp = document.querySelector(".temp")
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;


    let weaherEl = document.querySelector(".weather")
    weaherEl.innerHTML= weather.weather[0].main;

    let hilow = document.querySelector(".hi-low");
    hilow.innerHTML=`${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)} °c `;
}

function dateBuuilder(s){
    let mounth = 
   [ "January",
    "February", 
    "March" ,
    "April" ,
    "May ",
    "June ",
    "July" ,
    "August", 
    "September", 
    "October ",
   " November" ,
    "December",
];
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        ];

        let day = days[s.getDay()];
        let date = s.getDate();
        let month = mounth[s.getMonth()];
        let year = s.getFullYear();

        return`${day} ${date} ${month} ${year}`
    
}