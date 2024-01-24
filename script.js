//Countdown timer to launch date 

// Set the end date
const endDate = new Date("2024-04-01");

// Get the current date
const now = new Date();

// Calculate the difference between the two dates
const timeRemaining = endDate - now;

// Convert the time to days, hours, minutes, and seconds
const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

// Display the countdown
console.log(`There are ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until the end date.`);

// Update the countdown every second
// setInterval(() => {
//   // Get the current date
//   const now = new Date();

//   // Calculate the difference between the two dates
//   const timeRemaining = endDate - now;

//   // Convert the time to days, hours, minutes, and seconds
//   const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//   // Display the countdown
//   console.log(`There are ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until the end date.`);
// }, 1000);