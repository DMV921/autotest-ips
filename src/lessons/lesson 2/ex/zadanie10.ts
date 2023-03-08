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
        setSpeed(speed: number) {
            //let engineCheck = (this.engindeStatus = false) ? console.log('Двигатель должен быть включен')
            //  if (this.engindeStatus = false) { console.log('Двигатель должен быть включен') }
            //  let possibleSpeed = ((this.speed >= 0) && (this.speed <= 110)) ? console.log(`${this.speed}`) : console.log('Недопустимое значение переменной speed')
          /*  if (this.engindeStatus) {
                if (speed >= 0 && speed <= 100)
                    this.speed = speed;
                else
                    console.log("Недопустимая скорость");
            }
            else
                console.log("Двигатель заглушен")
                */

                if (speed >= 0 && speed <= 100){
                    this.speed = speed;
                    if (this.engindeStatus)
                    this.engindeStatus
                    else 
                    console.log("Двигатель заглушен")
                }
                else
                    console.log("Недопустимая скорость");

        }
    }
    const car: Car = new Car()
    car.getState()
    car.setSpeed(1000)
    car.trunOn()
    car.getState()
}
