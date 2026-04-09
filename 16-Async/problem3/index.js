const url = "https://randomuser.me/api/";
const newDiv = document.getElementById("randomUser");

const fetchUser = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();

        const user = json?.results?.[0];
        const { title, first, last } = user.name;
        const { country } = user?.location;

        // populate
        const newUser = `
        <p>${title}. ${first} ${last}</p>
        <p>${user.email}</p>
        <p>${country}</p>
        `;
        newDiv.innerHTML = newUser;
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
