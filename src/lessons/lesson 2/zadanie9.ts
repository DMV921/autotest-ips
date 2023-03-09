{
    const promise = new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(2),
            1000,
        )
        setTimeout(
            () => reject(5),
            10000,
        )
    })

    async function print(): Promise<void> {
        try {
            console.log('resolve', await promise)
        } catch (reject) {
            console.log('Reject', reject)
        }
    }
    print()
}






