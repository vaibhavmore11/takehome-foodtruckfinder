#!/usr/bin/env node

const getFoodTrucks = require('./foodTruck');
console.log("NAME".padEnd(75) + "ADDRESS");
getFoodTrucks.getFoodTrucks(0);