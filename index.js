// Code your solution in this file!

// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function to return the last two drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array holding the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a function to multiply a fare by a given number
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Function that doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function that triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects different drivers based on the passed function
  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  
  // Export the functions for testing
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  
