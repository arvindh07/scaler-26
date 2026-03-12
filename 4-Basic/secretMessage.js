const retSecretFn = (secretMsg) => {
    return function () {
        return secretMsg;
    }
}
console.log(retSecretFn("SECRET")());