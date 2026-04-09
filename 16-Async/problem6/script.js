const firstUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
const secondUrl = "https://api.spacexdata.com/v4/company";
const thirdUrl = "http://api.open-notify.org/astros.json";

const callApi = async () => {
    try {
        const responses = await Promise.any([fetch(firstUrl), fetch(secondUrl), fetch(thirdUrl)]);
        if(!responses.ok) {
            throw new Error("All failed");
        }
        const data = await responses.json();

        if(data?.date) {
            console.log("FIRST RESPONSE ", data);
        } else if(data?.headquarters) {
            console.log("SECOND RESPONSE ", data);
        } else if(data?.people) {
            console.log("THIRD RESPONSE ", data);
        }
    } catch (error) {
        console.log("Failed to fetch ", error.message);
    }
}

const apiBtn = document.getElementById("apiBtn");
apiBtn.addEventListener("click", () => {
    callApi();
})