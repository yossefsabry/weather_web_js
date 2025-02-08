
// ----- global variables -----
let city = 'Cairo'
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`

// const apiKey = process.env.API_KEY; // `API_KEY` is your key in .env
const apiKey = import.meta.env.VITE_API_KEY;

/**
 * Fetches weather data from an API and updates the UI with the retrieved data.
 * @returns {Promise} A promise that resolves with the weather data.
 */
async function checkWeather() {
    try {
        const response_1 = await new Promise((reslove, reject) => {
          loaderSpinner(true);
          try {
            const response = fetch(apiUrl + `&appid=${apiKey}`);
            reslove(response); } catch (e) { loaderSpinner(false);
            reject(`error happend: ${e}`);
          }
        });

        try {
            const data_2 = await new Promise((reslove_1, reject_1) => {
                try {
                    const data = response_1.json();
                    reslove_1(data);
                } catch (e_1) {
                    loaderSpinner(false);
                    // console.log(e_1);
                    reject_1(e_1);
                }
            });
            const tempElement = document.getElementById("temp");
            tempElement.textContent = data_2?.main?.temp + "°C";
            tempElement.classList.add("fade-in");

            const nameElement = document.querySelector(".name h1");
            nameElement.textContent = data_2?.name;
            nameElement.classList.add("fade-in");

            const weatherElement = document.querySelector(".weather span");
            weatherElement.textContent = data_2?.weather[0]?.description;
            weatherElement.classList.add("fade-in");

            const countryElement = document.getElementById("country");
            countryElement.textContent = data_2.sys.country;
            countryElement.classList.add("fade-in");

            const humidityElement = document.getElementById("humidity");
            humidityElement.textContent = data_2.main.humidity + "%";
            humidityElement.classList.add("fade-in");

            const windElement = document.getElementById("wind_speed");
            windElement.textContent = data_2.wind.speed + "Km/h";
            windElement.classList.add("fade-in");

            const timezoneElement = document.getElementById("timezone");
            timezoneElement.textContent = data_2.timezone;
            timezoneElement.classList.add("fade-in");
            changeBackgroundImage(data_2.main.temp);
            loaderSpinner(false);
        } catch (err) {
            console.log(err);
            loaderSpinner(false);
        }
    } catch (err_1) {
        console.log(err_1);
        loaderSpinner(false);
    }
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


/**
 * search for info for input value
 */
const searchInfo = async() => {
    event.preventDefault(); // Prevent default form submission behavior
    const value = input.value;
    city = value;
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    await checkWeather();
}

// search for city inputs
const input = document.querySelector(".search #input_city");
const submit = document.querySelector("#submit");
submit.addEventListener("click", async function() {
    await searchInfo()
});
// when clicking on enter key in input
input.addEventListener("keydown", async function(event) {
    if (event.key === "Enter") {
        await searchInfo()
    }
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
menuBars.onclick = () => { if (menuOption == "hidden") {
        menu.style.transform = 'translateX(0)';
        menuBars.style.position = "absolute";
        menuBars.style.zIndex = 3;
        menuBars.style.top = "0";
        menuBars.style.right = 'calc(40% + 1.5rem)';
        menuOption = "show";
        menuBars.style.color = "white";
        menuBars.classList.toggle("bx-x");
        menuBars.classList.toggle("bx-menu");
    } else {
        menu.style.transform = 'translateX(100%)';
        menuOption = "hidden";
        menuBars.style.cssText = "position: relative; bottom: 20rem; right: 0; z - index: 3; ";
        menuBars.style.bottom = "20rem";
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
    const body = document.body
    const value1 = document.querySelector('.out-top')
    const value2 = document.querySelector('.in-top')
    const value3 = document.querySelector('.out-bottom')
    const value4 = document.querySelector('.in-bottom')
    if (status > 20) {
        value1.setAttribute('fill', '#bad2dc');
        value2.setAttribute('fill', '#acc163');
        value3.setAttribute('fill', '#aabef7');
        value4.setAttribute('fill', '#ffffff');
        body.style.backgroundColor = "#e8dddc";
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


document.addEventListener("click", function (event) {
    // Ignore clicks inside elements with the 'hero' class
    if (event.target.closest(".hero")) {
        return; // Do nothing if the clicked element is inside .hero
    }

    // Check if the clicked element is NOT inside '.info' or '#menu_bar'
    if (!event.target.closest(".info") && !event.target.closest("#menu_bar")) {
        if (menuOption !== "hidden") {
            menuOption = "hidden";
            menu.style.transform = 'translateX(100%)';
            menuBars.style.cssText = "position: relative; bottom: 20rem; right: 0; z-index: 3;";
            menuBars.style.bottom = "20rem";
            menuBars.classList.toggle("bx-x");
            menuBars.classList.toggle("bx-menu");
            // console.log("menuOption is now:", menuOption);
        }
    }
});

