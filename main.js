console.log("NAME: Esan Daniel Erioluwa", "Role: Junior Javascript Developer for Wedding Guest Management"
)


const guests = [
  {
    id: 1,
    name: "John",
    age: 28,
    gender: "Male",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Rice",
  },
  {
    id: 2,
    name: "Sarah",
    age: 24,
    gender: "Female",
    invitationStatus: "Pending",
    attendanceStatus: "Absent",
    mealPreference: "Chicken",
  },
  {
    id: 3,
    name: "Subomi",
    age: 17,
    gender: "Female",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Chicken",
  },
  {
    id: 4,
    name: "Mary",
    age: 31,
    gender: "Female",
    invitationStatus: "Pending",
    attendanceStatus: "Absent",
    mealPreference: "Beef",
  },
  {
    id: 5,
    name: "Peter",
    age: 40,
    gender: "Male",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Jollof Rice",
  },
  {
    id: 6,
    name: "Grace",
    age: 16,
    gender: "Female",
    invitationStatus: "Declined",
    attendanceStatus: "Absent",
    mealPreference: "Soft Drink",
  },
  {
    id: 7,
    name: "Samuel",
    age: 35,
    gender: "Male",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Chicken",
  },
  {
    id: 8,
    name: "Aisha",
    age: 22,
    gender: "Female",
    invitationStatus: "Accepted",
    attendanceStatus: "Absent",
    mealPreference: "Fried Rice",
  },
  {
    id: 9,
    name: "Michael",
    age: 14,
    gender: "Male",
    invitationStatus: "Pending",
    attendanceStatus: "Absent",
    mealPreference: "Beef",
  },
  {
    id: 10,
    name: "Esther",
    age: 27,
    gender: "Female",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Jollof Rice",
  },
];

// Using for..of loop to display total guests
console.log("Total Guest Array:");
for (const guest of guests) {
  console.log(guest);
}
//Counting Total Number of Guests
const totalGuests = guests.length;
console.log("Total Guests =", totalGuests);

//Guests with accepted invites
const acceptedGuests = guests.filter(
  (guest) => guest.invitationStatus === "Accepted",
);
console.log("Accepted invitations:", acceptedGuests.length);

//Guests that actually attended
const attendees = guests.filter(
  (guest) => guest.attendanceStatus === "Present",
);
console.log("Guests Attended:", attendees.length);

//Guests who have not responded to invitation
const pendingGuests = guests.filter(
  (guest) => guest.invitationStatus === "Pending",
);
console.log("Unresponsive Guests", pendingGuests);

//sorting into male and female categories
const maleGuests = guests.filter((guest) => guest.gender === "Male");
const femaleGuests = guests.filter((guest) => guest.gender === "Female");

console.log("Male Guests:", maleGuests);
console.log("Female Guests:", femaleGuests);

//Guests below age 18
const underAgeGuests = guests.filter((guest) => guest.age < 18);
console.log("Under Age Guests:", underAgeGuests);

//PART 2: FOOD MANAGEMENT
const menu = [
  { name: "Jollof Rice", price: 3500, quantity: 100 },
  { name: "Fried Rice", price: 4000, quantity: 80 },
  { name: "Chicken", price: 2500, quantity: 120 },
  { name: "Beef", price: 1500, quantity: 100 },
  { name: "Soft Drink", price: 500, quantity: 200 },
];

//Display all available food items
for (const item of menu) {
  console.log("Available Food Items:", item.name);
}

//Value of each item based on price and quantity
for (const item of menu) {
  const itemValue = item.price * item.quantity;
  console.log(item.name, "Total Item Value", itemValue);
}

//Total Food Budget
let totalFoodBudget = 0;

for (const item of menu) {
  totalFoodBudget += item.price * item.quantity;
}

console.log("Total food budget:", totalFoodBudget);

//Items costing more than 2,000
const costlyItems = menu.filter((costly) => costly.price > 2000);
console.log("Items above 2k:", costlyItems);

//food items with quantity below 100
const scarceItems = menu.filter((scarce) => scarce.quantity < 100);
console.log("items below 100 quantity", scarceItems);

//Total Quantity of food items available
let totalQuantity = 0;
for (const item of menu) {
  totalQuantity += item.quantity;
}
console.log("Total Quantity of Food Items", totalQuantity);

//PART 3: EVENT FINANCIAL MANAGEMENT
const expenses = [
  { category: "Venue", amount: 500000 },
  { category: "Catering", amount: 750000 },
  { category: "Photography", amount: 250000 },
  { category: "Decoration", amount: 300000 },
  { category: "Music", amount: 150000 },
  { category: "Transportation", amount: 200000 },
];

//TOTAL EXPENSES
let totalExpenses = 0;
for (const item of expenses) {
  totalExpenses += item.amount;
}
console.log("Total Expenses=", totalExpenses);

//REMAINING BUDGET
const eventBudget = 2500000;
const remainingBudget = eventBudget - totalExpenses;

console.log("Remaining Budget is", remainingBudget);

//Most Expensive Expense

//EXPENSES ABOVE 200,000

const expensesAbove200000 = expenses.filter(
  (expense) => expense.amount > 200000,
);

console.log("Expenses above ₦200,000:", expensesAbove200000);

//% of budget already spent

const percentageSpent = (totalExpenses / eventBudget) * 100;

console.log("Total Percentage Spent (in %)", percentageSpent);

/*6. Use conditional statements to determine whether the couple is:
  - Within budget.
  - Almost exhausting the budget (90% or more spent).
  - Over budget.*/

const budgetExhaustion = (90 / 100) * eventBudget;

if (totalExpenses > eventBudget) {
  console.log("Over budget");
} else if (totalExpenses >= budgetExhaustion) {
  console.log("Almost exhausting budget");
} else if (totalExpenses < budgetExhaustion) {
  console.log("Within Budget");
}



/*PART 4: Event admission control
The wedding venue has a maximum capacity of 150 people.

Your tasks:
1. Determine whether the venue can accommodate all invited guests.
2. If attendance exceeds 150, display a warning.
3. If the number of attendees is below 150, display the number of remaining seats.
4. Display an appropriate message depending on the number of attendees.

*/


const venueCapacity= 150;
const numberOfAttendees= attendees.length;
const remainingSeats= venueCapacity-numberOfAttendees;



if (numberOfAttendees> venueCapacity){
    console.log("Warning: Maximum Capacity Exceeded!");
}else if (numberOfAttendees===venueCapacity){
  console.log("The Venue is Full!");
}
 else if (numberOfAttendees< venueCapacity){
  console.log("Venue can accommodate all invited guests");
    console.log("Number of Remaining Seats",remainingSeats);
} 

/*Part 5: Generate an event summary
At the end of the program, display a summary similar to this:
========== WEDDING EVENT SUMMARY ==========

Total Registered Guests: 10
Accepted Invitations: 8
Total Attendees: 7

Total Food Items: 5
Total Food Budget: ₦1,350,000

Total Event Budget: ₦2,500,000
Total Expenses: ₦2,150,000
Remaining Budget: ₦350,000

Budget Status: Within Budget

Venue Capacity: 150
Available Seats: 143*/

//WEDDING EVENT SUMMARY
console.log("========== WEDDING EVENT SUMMARY ==========");

console.log("Total Registered Guests=", guests.length);
console.log("Accepted Invitations=", acceptedGuests.length);
console.log("Total Attendees=",numberOfAttendees);
console.log("Total Food Items=", menu.length);

console.log("Total Food Budget=", totalFoodBudget);
console.log("Total Event Budget=", eventBudget);
console.log("Total Expenses=", totalExpenses);
console.log("Remaining Budget=", remainingBudget);

