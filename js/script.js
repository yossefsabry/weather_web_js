//! start api
//  Doms elements


let city = 'Cairo'
const apiKey = "ebc504ae8fffd7cbc062f1ac72525a11";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`

// lsp suggest convert ot async func
function checkWeather() {
  return new Promise ((reslove, reject) => {
    try {
      const response =  fetch(apiUrl + `&appid=${apiKey}`);
      reslove(response);
    } catch (e) {
      reject(`error happend: ${e}`)
    }
  }, (e) => console.log(e))

    .then((response) => {
      return new Promise((reslove, reject) => {
        try {
          const data = response.json();
          reslove(data)
        }catch(e) {
          reject(e)
        }
      }, (e) => console.log(e))
          // Add the fade-in class to the target elements
        .then((data) => {
          const tempElement = document.getElementById("temp");
          tempElement.textContent = data.main.temp + "°";
          tempElement.classList.add("fade-in");

          const nameElement = document.querySelector(".name h1");
          nameElement.textContent = data.name;
          nameElement.classList.add("fade-in");

          const weatherElement = document.querySelector(".weather span");
          weatherElement.textContent = data.weather[0].description;
          weatherElement.classList.add("fade-in");

          const countryElement = document.getElementById("country");
          countryElement.textContent = data.sys.country;
          countryElement.classList.add("fade-in");

          const humidityElement = document.getElementById("humidity");
          humidityElement.textContent = data.main.humidity + "%";
          humidityElement.classList.add("fade-in");

          const windElement = document.getElementById("wind_speed");
          windElement.textContent = data.wind.speed + "Km/h";
          windElement.classList.add("fade-in");

          const timezoneElement = document.getElementById("timezone");
          timezoneElement.textContent = data.timezone;
          timezoneElement.classList.add("fade-in");

        })
    })
}
checkWeather()


// change the city onclick 
const items = document.querySelectorAll(".last_city ul li");

items.forEach(item => {
    item.addEventListener("click", async () => {
        city = item.innerHTML;
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        await checkWeather();
    });
});


// search for city 
const input = document.querySelector(".search #input_city");
const submit = document.querySelector("#submit");

submit.addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const value = input.value;
    city = value;
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    await checkWeather();

});



//! time

function displayDateTime() {
    const today = new Date()
    const day = today.getDate();
    const month = today.getMonth();
    const fullYear = today.getFullYear();
    const time = today.toLocaleTimeString()
    document.querySelector(".time").innerHTML = day + '-' + month + '-' + fullYear + ' , ' + time;
}

// Call the function initially to display the date and time
displayDateTime();

// Update the date and time every second
setInterval(displayDateTime, 1000);


// show menu
const menuBars = document.getElementById("menu_bar")
const menu = document.querySelector("header .container .info")
let menuOption = "hidden"

menuBars.onclick = () => {
    if (menuOption == "hidden") {
        menu.style.transform = 'translateX(0)'
        menuBars.style.position = "absolute";
        menuBars.style.zIndex = 3;
        menuBars.style.top = "0";
        menuBars.style.right ='calc(40% + 1rem)';
        menuOption = "show"
    } else {
        menu.style.transform = 'translateX(100%)'
        menuOption = "hidden"
        menuBars.style.cssText = "position: relative; top: 0; right: 0; z - index: 3; "
    }
}
