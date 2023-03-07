{
    class Car {

        engindeStatus: boolean = false
        speed: number = 0
        trunOn() {
            this.engindeStatus = true
        }
        trunOff() {
            this.engindeStatus = false
        }
        getState() {
            console.log(`${this.engindeStatus}`)
        }
        setSpeed() {
            this.speed = 1000
            //let engineCheck = (this.engindeStatus = false) ? console.log('Двигатель должен быть включен')
            if (this.engindeStatus = false) { console.log('Двигатель должен быть включен') }
            let possibleSpeed = ((this.speed >= 0) && (this.speed <= 110)) ? console.log(`${this.speed}`) : console.log('Недопустимое значение переменной speed')

        }
    }
    const car: Car = new Car()
    car.getState()
    car.setSpeed()
    car.trunOn()
    car.getState()
}
