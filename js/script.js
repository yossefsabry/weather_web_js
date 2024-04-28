// ----- global variables -----
let city = 'Cairo'
const apiKey = "ebc504ae8fffd7cbc062f1ac72525a11";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`
// ----- global variables -----

/**
 * Fetches weather data from an API and updates the UI with the retrieved data.
 * @returns {Promise} A promise that resolves with the weather data.
 */
function checkWeather() { // lsp suggest convert ot async func
  return new Promise((reslove, reject) => {
    loaderSpinner(true);
    try {
      const response = fetch(apiUrl + `&appid=${apiKey}`);
      reslove(response);
    } catch (e) {
      loaderSpinner(false);
      reject(`error happend: ${e}`);
    }
  })
    .then((response) => {
      return new Promise((reslove, reject) => {
        try {
          const data = response.json();
          reslove(data);
        } catch (e) {
          loaderSpinner(false);
          console.log(e);
          reject(e);
        }
      })
        // Add the fade-in class to the target elements
        .then((data) => {
          const tempElement = document.getElementById("temp");
          tempElement.textContent = data?.main?.temp + "°C";
          tempElement.classList.add("fade-in");

          const nameElement = document.querySelector(".name h1");
          nameElement.textContent = data?.name;
          nameElement.classList.add("fade-in");

          const weatherElement = document.querySelector(".weather span");
          weatherElement.textContent = data?.weather[0]?.description;
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
          changeBackgroundImage(data.main.temp);
          loaderSpinner(false);
        }).catch((err) => {
          console.log(err);
          loaderSpinner(false);
        });
    }).catch((err) => {
      console.log(err);
      loaderSpinner(false);
    });
};
checkWeather();


// change the city onclick 
const items = document.querySelectorAll(".last_city ul li");
items.forEach(item => {
  item.addEventListener("click", async () => {
    city = item.innerHTML;
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    await checkWeather();
  });
});


// search for city inputs
const input = document.querySelector(".search #input_city");
const submit = document.querySelector("#submit");
submit.addEventListener("click", async function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  const value = input.value;
  city = value;
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  await checkWeather();

});


/**
 * Displays the current date and time on the webpage.
 */
function displayDateTime() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const fullYear = today.getFullYear();
  const time = today.toLocaleTimeString();
  document.querySelector(".time").innerHTML = day + '-' + month + '-' + fullYear + ' , ' + time;
} displayDateTime();
setInterval(displayDateTime, 1000);


// show menu
const menuBars = document.getElementById("menu_bar");
const menu = document.querySelector("header .container .info");
let menuOption = "hidden";
menuBars.onclick = () => {
  if (menuOption == "hidden") {
    menu.style.transform = 'translateX(0)';
    menuBars.style.position = "absolute";
    menuBars.style.zIndex = 3;
    menuBars.style.top = "0";
    menuBars.style.right = 'calc(48% + 1rem)';
    menuOption = "show";
    menuBars.style.color = "white";
    menuBars.classList.toggle("bx-x");
    menuBars.classList.toggle("bx-menu");
  } else {
    menu.style.transform = 'translateX(100%)';
    menuOption = "hidden";
    menuBars.style.cssText = "position: relative; top: 0; right: 0; z - index: 3; ";
    menuBars.classList.toggle("bx-x");
    menuBars.classList.toggle("bx-menu");
  };
};


/**
 * Sets the visibility and position of the loader spinner and shadow background.
 * @param {boolean} status - The status of the loader spinner. True to show the spinner, false to hide it.
 */
function loaderSpinner(status) {
  const laoder = document.querySelector(".spinner");
  const shad = document.querySelector(".shad-bg");
  if (status == true) {
    laoder.style.cssText = `
      top: 50%;
      opacity: 1;
    `;
    shad.style.cssText = `
        z-index: 4;
        opacity: 1;
    `;
  } else {
    laoder.style.cssText = `
      top: 90%;
      opacity: 0;
    `;
    shad.style.cssText = `
        z-index: -1;
        opacity: 0;
      `;
  };
};


/**
 * Changes the background image and color based on the given status.
 * @param {number} status - The temperature status.
 */
function changeBackgroundImage(status) {
  let body = document.body
  let value1 = document.querySelector('.out-top')
  let value2 = document.querySelector('.in-top')
  let value3 = document.querySelector('.out-bottom')
  let value4 = document.querySelector('.in-bottom')
  if (status > 20) {
    value1.setAttribute('fill', '#bad2dc');
    value2.setAttribute('fill', '#acc163');
    value3.setAttribute('fill', '#aabef7');
    value4.setAttribute('fill', '#cecece');
    body.style.backgroundColor = "#e4e4e4";
    body.style.color = "black";
    return;
  };
  value1.setAttribute('fill', '#9b5de5');
  value2.setAttribute('fill', '#000214');
  value3.setAttribute('fill', '#440d38');
  value4.setAttribute('fill', '#1a0b18');
  body.style.backgroundColor = "#0e0014";
  body.style.color = "white";
}; changeBackgroundImage();
