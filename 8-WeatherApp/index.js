let temp_c = null;
let temp_f = null;
const tempDiv = document.querySelector(".temp");
const loaderSpan = document.querySelector(".loader");
loaderSpan.style.display = "None";

const populateCondition = (condition, conditionText, conditionIcon) => {
    conditionText.innerText = condition.text;
    conditionIcon.src = condition.icon;
}

const populateLocationAndTime = (location, time) => {
    const locationDiv = document.querySelector(".location");
    const timeDiv = document.querySelector(".time");

    locationDiv.innerText = location;
    timeDiv.innerText = time;
}

const populateTemp = () => {
    tempDiv.innerText = temp_c + "C";
}

const populatePastHistory = (temp, localDate, condition, idx) => {
    const pastDiv = document.getElementsByClassName("past_weather");
    const currDiv = pastDiv[idx];
    const paras = currDiv.getElementsByTagName("p");
    paras[0].innerText = localDate;
    paras[1].innerText = temp + "C";
    paras[2].innerText = condition.text;

    const imgEl = currDiv.getElementsByTagName("img")[0];
    imgEl.src = condition.icon;
}

const handleToggleTemp = () => {
    const temp = tempDiv.innerText;

    if (temp.includes("C")) {
        tempDiv.innerText = temp_f + "F";
    } else {
        tempDiv.innerText = temp_c + "C";
    }
}

const fetchData = async (searchTerm) => {
    try {
        loaderSpan.style.display = "block";
        const url = `http://api.weatherapi.com/v1/current.json?key=81a2c31d86cb4128946161443261303&q=${searchTerm}`;
        const response = await fetch(url);
        const json = await response.json();

        if (json?.error?.message) {
            alert(`${json?.error?.message}`);
            return;
        }

        const condition = json.current.condition;
        const location = json.location.name;
        const localTime = json.location.localtime;

        temp_c = json.current.temp_c;
        temp_f = json.current.temp_f;

        const conditionText = document.querySelector(".condition");
        const conditionIcon = document.querySelector(".emoji img");
        populateCondition(condition, conditionText, conditionIcon);
        populateLocationAndTime(location, localTime);
        populateTemp();
        handleGetHistory(searchTerm);
    } catch (error) {
        console.log(error);
        alert(`Could not fetch the location field - ${searchTerm}`);
    } finally {
        loaderSpan.style.display = "None";
    }
}

const handleSearchLocation = (e) => {
    e.preventDefault();

    const searchTerm = searchIp.value;
    if (!searchTerm) {
        alert("Please enter search location");
        return;
    }

    fetchData(searchTerm);
}

function getDateBeforeDays(days) {
    const date = new Date();           // current date
    date.setDate(date.getDate() - days); // subtract days

    const returnDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    return returnDate;
}

const fetchDataHistory = async (searchTerm, date, idx) => {
    try {
        loaderSpan.style.display = "block";
        const url = `http://api.weatherapi.com/v1/history.json?key=81a2c31d86cb4128946161443261303&q=${searchTerm}&dt=${date}`;
        const response = await fetch(url);
        const json = await response.json();
    
        if (json?.error?.message) {
            alert(`${json?.error?.message}`);
            return;
        }
    
        const temp = json.forecast.forecastday[0].day.maxtemp_c;
        const localDate = json.forecast.forecastday[0].date;
        const condition = json.forecast.forecastday[0].day.condition;
        populatePastHistory(temp, localDate, condition, idx);
    } catch (error) {
        console.log("Error ", error);
    } finally {
        loaderSpan.style.display = "None";
    }
}

const handleGetHistory = async (searchTerm) => {
    const dayOne = getDateBeforeDays(1);
    const dayTwo = getDateBeforeDays(2);
    const dayThree = getDateBeforeDays(3);

    fetchDataHistory(searchTerm, dayOne, 0);
    fetchDataHistory(searchTerm, dayTwo, 1);
    fetchDataHistory(searchTerm, dayThree, 2);
}

const handleGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((loc) => {
        const lat = loc.coords.latitude;
        const lng = loc.coords.longitude;

        fetchData(`${lat},${lng}`);
    })
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSearchLocation);
const searchIp = document.getElementsByClassName("search_input")[0];
const cfBtn = document.querySelector(".tempBtn");
cfBtn.addEventListener("click", handleToggleTemp);
const currLocationBtn = document.querySelector(".my_location_btn");
currLocationBtn.addEventListener("click", handleGetCurrentLocation);

fetchData("Chennai");
handleGetHistory("Chennai");