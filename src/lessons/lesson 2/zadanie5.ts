{
    class Car {

        engindeStatus: boolean = false
        trunOn() {
            this.engindeStatus = true
        }
        trunOff() {
            this.engindeStatus = false
        }
        getState() {
            console.log(`${this.engindeStatus}`)
        }
    }
    const car: Car = new Car()
    car.getState()
    car.trunOn()
    car.getState()
}