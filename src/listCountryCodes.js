// Import the countries-list package
const { countries } = require('countries-list');

// Output: { ... 'CO': 'Congo', ... }
console.log(`Country name is ${countries.ID.name}`)
console.log(`Country capital is ${countries.ID.capital}`)
console.log(`Country currency is ${countries.ID.phone}`)

