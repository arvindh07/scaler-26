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
        }, 1000);
    })
}

Promise.allSettled([fetchUser(), fetchUserPosts()])
    .then((data) => {
        console.log("Success: ", data);
    })
    .catch((err) => {
        console.log("Failure: ", err);
    })

Promise.myAllSettled = function (prArr) {
    return new Promise((resolve, reject) => {
        let out = [];
        let total = 0;
        prArr.forEach(async (pr, index) => {
            try {
                const res = await pr;
                out[index] = {
                    status: "fulfilled",
                    value: res
                }
            } catch (error) {
                out[index] = {
                    status: "rejected",
                    reason: error
                }
            } finally {
                total++;
                if (total === prArr.length) {
                    resolve(out);
                }
            }
        });
    })
}

Promise.myAllSettled([fetchUser(), fetchUserPosts()])
    .then((data) => {
        console.log("2 Success: ", data);
    })
    .catch((err) => {
        console.log("2 Failure: ", err);
    })