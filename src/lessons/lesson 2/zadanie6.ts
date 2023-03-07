{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1000)
    })
    promise.then(resolve => console.log('resolve'))
}