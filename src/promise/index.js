const somethingWllHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Claro que yes!!");
        } else {
            reject("Whoooops!!");
        }
    });
};

// somethingWllHappen()
// .then(response => console.log(response))
// .catch(err => console.error(err));

const somethingWllHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve("True");
            }, 3000)
        } else {
            const error = new Error("Whoops!!");
            reject(error);
        }
    });
}
// somethingWllHappen2()
// .then(response => console.log(response))
// .catch(err => console.error(err));


//Con esto traigo todas las promesas juntas

Promise.all([somethingWllHappen(), somethingWllHappen2()])
.then(response => {
    console.log("Array of results", response);
})
.catch(err => {
    console.error(err);
})


