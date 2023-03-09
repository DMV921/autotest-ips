{
    class Car {
        private engindeStatus: boolean

        constructor() {
            this.engindeStatus = false
        }

        public trunOn(): void {
            this.engindeStatus = true
        }

        public trunOff(): void {
            this.engindeStatus = false
        }

        public getState(): void {
            console.log(`Engine Status ${this.engindeStatus}`)
        }
    }
    
    const car: Car = new Car()
    const car2: Car = new Car()

    car.getState()
    car.trunOn()
    car.getState()
    
    car2.trunOn()
    car2.getState()
}