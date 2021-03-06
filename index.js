
let driverId = 0
let passengerId = 0
let routeId = 0
let store = {
  drivers: [],
  passengers: [],
  trips: []
}

class Driver {
  constructor(name) {
    this.name = name
    this.id = driverId++
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter( trip => {
      return trip.driverId === this.id
    })
  }
  passengers() {
    return this.trips().map( trip => {
      return trip.passenger()
    })
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = passengerId++
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter( trip => {
      return trip.passengerId === this.id
    })
  }
  drivers() {
    return this.trips().map( trip => {
      return trip.driver()
    })
  }
}

class Trip {
  constructor (driver, passenger){
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = routeId++
    store.trips.push(this)
  }
  driver() {
    return store.drivers.find( driver => {
      return this.driverId === driver.id
    })
  }
  passenger() {
    return store.passengers.find( passenger => {
      return this.passengerId === passenger.id
    })
  }
}
