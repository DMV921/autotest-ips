{
    class Car {
        private engindeStatus: boolean
        private speed: number 

        constructor() {
            this.engindeStatus = false
            this.speed = 0
        }
        public trunOn() {
            this.engindeStatus = true
        }
        public trunOff() {
            this.engindeStatus = false
        }
        public getState() {
            console.log(`Работа двигателя ${this.engindeStatus}`)
            console.log('Текущая скорость', this.speed)
        }
        public setSpeed(speed: number): void {
            if (!this.engindeStatus) {
                console.log('Двигатель заглушен')
                return
            }

            if (speed >= 0 && speed <= 100) {
                this.speed = speed;
            } else {
                console.log('Недопустимая скорость')
            }
        }
    }
    const car: Car = new Car()
    car.getState()
    car.trunOn()
    car.setSpeed(100)
    car.getState()
}
