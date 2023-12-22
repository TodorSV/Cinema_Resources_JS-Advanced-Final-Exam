let { expect } = require("chai");
let cinema = require("./cinema");

describe("Test cinema functionality", () => {

  describe("showMovies", () => {
    it("The array includes the available movies in the cinema", () => {
      expect(
        cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])
      ).to.equal("King Kong, The Tomorrow War, Joker");
    });
    it("If the length of the input array is zero", () => {
      expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
    });

    it("An array of available movies, separated by a comma and space", () => {
      expect(
        cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])
        ).to.equal("King Kong, The Tomorrow War, Joker");
    });
  });

  describe("ticketPrice", () => {
    it("Checks whether the submitted projectionType is present in the schedule with the types of projections", () => {
      expect(() => cinema.ticketPrice("Premiere")).to.not.throw();
      expect(() => cinema.ticketPrice("Normal")).to.not.throw();
      expect(() => cinema.ticketPrice("Discount")).to.not.throw();
      
    });

    it("If present in the schedule, return the price according to the type", () => {
      expect(cinema.ticketPrice("Premiere")).to.be.equal(12.0);
      expect(cinema.ticketPrice("Normal")).to.be.equal(7.5);
      expect(cinema.ticketPrice("Discount")).to.be.equal(5.5);
      
    });
    it("Otherwise, the function throws an error in the following format Invalid projection type.", () => {
      expect(() => cinema.ticketPrice("Invalid")).to.throw("Invalid projection type.");
    });
  });

  describe("swapSeatsInHall", () => {
    it('The function swaps the seat number in the cinema hall, when two numbers are submitted.', () => {
        expect(cinema.swapSeatsInHall(1, 2));
        expect(cinema.swapSeatsInHall(2, 1));
    });

    it('The exchange is not successful and the function returns', () => {
        expect(cinema.swapSeatsInHall(1, 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(0, 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 21)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(21, 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, -1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(-1, 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall('1', '1')).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, '1')).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall('1', 1)).to.equal("Unsuccessful change of seats in the hall.");
        
    });
    it('Successful change of seats in the hall.', () => {
        expect(cinema.swapSeatsInHall(1, 2)).to.equal("Successful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(2, 1)).to.equal("Successful change of seats in the hall.");
    });

  });
});
