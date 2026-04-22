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
        }, 3000);
    })
}

Promise.any([fetchUser(), fetchUserPosts()])
    .then((data) => {
        console.log("Success: ", data);
    })
    .catch((err) => {
        console.log("Failure: ", err);
    })

Promise.myAny = function (prArr) {
    return new Promise((resolve, reject) => {
        const aggErr = [];
        let total = 0;
        prArr.forEach(async (element, idx) => {
            try {
                const res = await element;
                resolve(res);
            } catch (error) {
                total++;
                aggErr.push(error);
                if(total === prArr.length) {
                    reject(aggErr)
                }
            }
        });
    })
}

Promise.myAny([fetchUser(), fetchUserPosts()])
    .then((data) => {
        console.log("Success: ", data);
    })
    .catch((err) => {
        console.log("Failure: ", err);
    })