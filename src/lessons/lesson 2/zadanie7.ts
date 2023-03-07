{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1000)
    })
    async function print(): Promise<void> {
        return console.log('resolve', await promise)
    }
    print()
}