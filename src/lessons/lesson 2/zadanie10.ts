{
    class Car {
        engindeStatus: boolean = false
        speed: number = 0
        trunOn() {
            this.engindeStatus = true
            console.log(`Двигатель включился ${this.engindeStatus}`)
        }
        trunOff() {
            this.engindeStatus = false
            console.log(`Двигатель выключился ${this.engindeStatus}`)
        }
        getState() {
            console.log(`Работа двигателя ${this.engindeStatus}`)
        }
        setSpeed(speed: number) {
            if (this.engindeStatus) {
                if (speed >= 0 && speed <= 100) {
                    this.speed = speed;
                    console.log('Текущая скорость', this.speed)
                }
                else
                    console.log('Недопустимая скорость')
            }
            else
                console.log('Двигатель заглушен')
        }
    }
    const car: Car = new Car()
    car.getState()
    car.trunOn()
    car.setSpeed(100)
    car.getState()
}
