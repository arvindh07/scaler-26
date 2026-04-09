const url = "https://dog.ceo/api/breeds/image/random";
const newDiv = document.getElementById("randomUser");

const fetchUser = async () => {
    try {
        const responses = await Promise.all([
            fetch(url),
            fetch(url),
            fetch(url)
        ])
        const data = await Promise.all(responses.map((res) => res.json()));
        console.log("data", data);
        newDiv.innerHTML = ``;
        data.forEach(async (res) => {
            // populate
            const newUser = `<img src=${res.message} style="width:150px;height: 150px" />`;
            const newImg = document.createElement("div");
            newImg.innerHTML = newUser;
            
            newDiv.appendChild(newImg);
        })

    } catch (error) {
        window.alert("Error fetching data ", error.message);
    } finally {
        console.log("Fetch completed");
    }
}

const randomBtn = document.getElementById("randomBtn");
randomBtn.addEventListener("click", () => {
    fetchUser();
});
