class FlightBookingSystem {
  
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    
    let flight = this.flights.find((f) => f.flightNumber === flightNumber);

    // Check if the flight is already available

    if (flight) {
      throw new Error(
        `Flight ${flightNumber} to ${destination} is already available.`
      );
    }
    
    this.flights.push({
      flightNumber,
      destination,
      departureTime,
      price,
    });
    // Return the message
    return `Flight ${flightNumber} to ${destination} has been added to the system.`;
  }


  bookFlight(passengerName, flightNumber) {
    // Passenger Name and Flight Number
    let flight = this.flights.find((f) => f.flightNumber === flightNumber);
    // Check if the flight is available
    if (!flight) {
      return (`Flight ${flightNumber} is not available for booking.`);
    }
    
    this.bookings.push({
      passengerName,
      flightNumber,
    });
    // Increase the bookingsCount
    this.bookingsCount++;

    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
  }

  cancelBooking(passengerName, flightNumber) {
    let booking = this.bookings.find(
      (b) =>
        b.passengerName === passengerName && b.flightNumber === flightNumber
    );

    if (!booking) {
      throw new Error(
        `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
      );
    }

    this.bookings = this.bookings.filter(
        // Remove the booking from the bookings array
      (b) =>
        b.passengerName !== passengerName && b.flightNumber !== flightNumber
    );
    // Decrease the bookingsCount
    this.bookingsCount--;

    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
  }


    showBookings(criteria) {
        // Check if the bookings array is empty
        if (this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.');
        }

        let result = '';
        // Check the criteria
        if (criteria === 'all') {
            result += `All bookings(${this.bookingsCount}):\n`;
            this.bookings.forEach(b => {
                result += `${b.passengerName} booked for flight ${b.flightNumber}.\n`;
            });
        } else if (criteria === 'cheap') {
            let cheapBookings = this.bookings.filter(b => {
                let flight = this.flights.find(f => f.flightNumber === b.flightNumber);
                return flight.price <= 100;
            });
            // Check the length of the cheap bookings array
            if (cheapBookings.length === 0) {
                result += 'No cheap bookings found.';
            } else {
                result += 'Cheap bookings:\n';
                cheapBookings.forEach(b => {
                    result += `${b.passengerName} booked for flight ${b.flightNumber}.\n`;
                });
            }
        } else if (criteria === 'expensive') {
            let expensiveBookings = this.bookings.filter(b => {
                let flight = this.flights.find(f => f.flightNumber === b.flightNumber);
                return flight.price > 100;
            });
            // Check the length of the expensive bookings array
            if (expensiveBookings.length === 0) {
                result += 'No expensive bookings found.';
            } else {
                result += 'Expensive bookings:\n';
                expensiveBookings.forEach(b => {
                    result += `${b.passengerName} booked for flight ${b.flightNumber}.\n`;
                });
            }
        }

        return result.trim();
    }
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Flight CC303 to Chicago has been added to the system.
// Flight AA101 to Los Angeles is already available.

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Booking for passenger Alice on flight AA101 is confirmed.
// Booking for passenger Bob on flight BB202 is confirmed.
// Flight CC303 is not available for booking.

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Booking for passenger Alice on flight AA101 is confirmed.
// Booking for passenger Bob on flight BB202 is confirmed.
// Booking for passenger Alice on flight AA101 is cancelled.

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Booking for passenger Alice on flight AA101 is confirmed.
// Booking for passenger Bob on flight BB202 is confirmed.
// All bookings(2):
// Alice booked for flight AA101.
// Bob booked for flight BB202.

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Booking for passenger Alice on flight AA101 is confirmed.
// Booking for passenger Bob on flight BB202 is confirmed.
// Expensive bookings:
// Alice booked for flight AA101.
// Bob booked for flight BB202.
// No cheap bookings found.

