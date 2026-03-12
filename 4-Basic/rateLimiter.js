const LIMIT = 5;
const INTERVAL = 5;
let localLimit = 0;
let intervalId = null;

function apiCall() {
    createRateLimiter(actualApiCall, LIMIT, INTERVAL);
}

function actualApiCall() {
    console.log("Running api call...");
}

function createRateLimiter(fn, limit, interval) {
    if(localLimit < limit) {
        fn();
        localLimit++;
    } else {
        console.log("Exceeded rate limit");
    }
    if(!intervalId) {
        intervalId = setTimeout(() => {
            console.log("Timeout...Resetting interval");
            localLimit = 0;
            apiCall();
        }, interval * 1000);
    }
}

apiCall();
apiCall();
apiCall();
apiCall();
apiCall();
apiCall();
apiCall();