const url = "https://jsonplaceholder.typicode.com/in";

const countDiv = document.getElementById("count");
const statusDiv = document.getElementById("status");

const fetchData = async (retries) => {
    for (let index = 0; index < retries; index++) {
        try {
            countDiv.innerText = `Fetching ${index + 1} time...`;
            const res = await fetch(url);
            const json = await res.json();
            if (res.status !== 200) {
                throw new Error("Response not okay");
            }
            console.log(json);
            break;
        } catch (error) {
            console.log("Error ", error);
            if(index === retries - 1) {
                statusDiv.innerText = `Fail to fetch`;
            }
        } finally {
            console.log("Fetch completed");
        }
    }
}

const btn = document.getElementById("apiBtn");
btn.addEventListener("click", () => {
    fetchData(3);
})