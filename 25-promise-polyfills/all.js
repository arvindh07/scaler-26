const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Arvindh" })
            // reject("Error getting user details");
        }, 3000);
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

Promise.all([fetchUser(), fetchUserPosts()])
    .then((data) => {
        console.log("Success: ", data);
    })
    .catch((err) => {
        console.log("Failure: ", err);
    })

Promise.myAll = function (promiseArr) {
    return new Promise((resolve, reject) => {
        let total = 0;
        let result = [];
        promiseArr.forEach(async (element, index) => {
            try {
                const pr = element;
                const res = await pr;
                result[index] = res;
                total++;

                if (total === promiseArr.length) {
                    resolve(result);
                }
            } catch (error) {
                reject(error);
            }
        });

    })
}

Promise.myAll([fetchUser(), fetchUserPosts()])
    .then((data) => {
        console.log("2 Success: ", data);
    })
    .catch((err) => {
        console.log("2 Failure: ", err);
    })