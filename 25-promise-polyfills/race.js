const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({ id: 1, name: "Arvindh" })
            reject("Error getting user details");
        }, 2000);
    })
}

const fetchUserPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post1", "post2", "post3"])
            // reject("Error getting user posts");
        }, 2000);
    })
}

Promise.race([fetchUser(), fetchUserPosts()])
    .then((data) => {
        console.log("Success: ", data);
    })
    .catch((err) => {
        console.log("Failure: ", err);
    })

Promise.myRace = function (promiseArr) {
    return new Promise((resolve, reject) => {
        promiseArr.forEach(async (pr, idx) => {
            try {
                const res = await pr;
                resolve(res);
            } catch (error) {
                reject(error);
            }
        })
    })
}

Promise.myRace([fetchUser(), fetchUserPosts()])
    .then((data) => {
        console.log("Success: ", data);
    })
    .catch((err) => {
        console.log("Failure: ", err);
    })