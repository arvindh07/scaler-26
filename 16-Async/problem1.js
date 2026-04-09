// 1. callbacks
// function fakeDownload(url, cb) {
//     console.log(`Downloading from ${url}...`);
//     setTimeout(() => {
//         cb("Download complete");
//     }, 2000)
// }

// fakeDownload("google.com", (op) => {
//     console.log(op);
// })

// 2. promise
function fakeDownload(url) {
    console.log(`Downloading from ${url}...`);
    const pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Download complete")
        }, 2000)
    })
    return pro;
}
// fakeDownload("google.com").then(console.log);

// 3. async/await
const val = await fakeDownload("google.com");
console.log(val);