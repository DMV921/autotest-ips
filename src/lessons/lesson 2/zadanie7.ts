{
    const promise = new Promise(resolve => {
        setTimeout(
            () => resolve(2),
            1000,
        )
    })
    async function print(): Promise<void> {
         console.log('resolve', await promise)
    }
    print()
}