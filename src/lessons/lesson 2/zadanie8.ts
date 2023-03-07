{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1000)
        setTimeout(() => {
            reject(5)
        }, 100)

    })
    promise.then(resolve => console.log('resolve'))
    promise.catch(reject => console.log('reject'))
}