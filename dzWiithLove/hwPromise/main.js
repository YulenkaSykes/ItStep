new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('first'));
    }, 1000);
}).then(() => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('second'));
        }, 1000);
    }).then(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log('third'))
            }, 1000)
        })
    })
})