const url = "https://catfact.ninja/fact";

const getCatFact = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.fact);
    } catch (error) {
        console.log(error);
    }
}

getCatFact();