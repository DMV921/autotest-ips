{
    const promise = new Promise<string>((resolve, reject) =>
        setTimeout(() => resolve('resolve'), 1000)
    )

    async function print(promise: Promise<string>) {
        const result = await promise;
        console.log(result)
    }

    print(promise)

    const promise2 = new Promise<string>((resolve, reject) => {
        setTimeout(() => resolve('resolve'), 1000);
        setTimeout(() => reject('reject'), 100);
    })

    async function print2(promise: Promise<string>) {
        try {
            const result = await promise;
            console.log(result)
        } catch (e) {
            console.log(e);
        }
    }

    print2(promise2)

}