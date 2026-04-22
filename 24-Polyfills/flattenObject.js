const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: {
                    h: 4
                }
            }
        }
    }
}

function flattenObject(obj, overrideKey = "") {
    let out = {};

    for (const key in obj) {
        const element = obj[key];
        let localKey = overrideKey;
        if (localKey) {
            localKey += `.${key}`;
        }
        if (typeof element === "object") {
            if (!localKey) {
                localKey = key;
            }
            out = {
                ...out,
                ...flattenObject(element, localKey),
            };
        } else {
            out[localKey || key] = element;
        }
    }

    return out;
}

console.log(flattenObject(obj), "final");