const menuData = {
    "2024-03-01": {
      breakfast: "Boys : Namkeen Sewai , Masala Aloo Sandwich , Ketchup , Milk , Tea<br> Girls : Aloo Chana Chat",
      lunch: "Dal Panchmel , Mushroom Matar , Rice , Roti , Boondi Raita , Salad , Pickle",
      snacks: "NC : Samosa , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Rusk , Tea",
      dinner: "Shahi Paneer , Kadai Chicken , Moong Dal , Rice , Roti , Pickle , Salad"
    },
    "2024-03-02": {
      breakfast: "Stuffed Paratha , Curd , Butter , Tea , Pickle",
      lunch: "Black Chana , Ghiya Masala , Rice , Roti , Cucumber Raita , Salad , Pickle",
      snacks: "NC : Veg Pattie , Tea  <br> Zakir :  Cake , Tea <br> Girls : Namak Pare , Tea",
      dinner: "Kesari Halwa , Mix Veg , Chana Dal , Rice , Roti , Salad , Pickle"
    },
    "2024-03-03": {
      breakfast: "Chole Bhature , Tea , Pickle",
      lunch: "Veg Biryani , Salan , Roti , Mix Raita , Salad , Pickle",
      snacks: "NC & Zakir : Bread Pakora , Tea <br> Girls : Cake , Tea",
      dinner: "Chocolate , Aloo Gobhi , Toor Dal , Rice , Roti , Salad , Pickle"
    },
    "2024-03-04": {
      breakfast: "Pav Bhaji , Milk , Tea ",
      lunch: "Aloo Matar , Kadhi Gatta , Rice , Roti , Salad , Pickle",
      snacks: "NC : Matthi , Tea  <br> Zakir : Rusk , Tea <br> Girls : Matthi , Tea",
      dinner: "Egg Masala , Paneer , Lobiya Dal , Rice , Roti , Salad , Pickle"
    },
    "2024-03-05": {
      breakfast: "Plain Paratha , Subzi , Tea , Pickle",
      lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
      snacks: "NC : Sweet Roll , Tea  <br> Zakir : Namak Pare , Tea <br> Girls : Biscuits , Tea",
      dinner: "Aloo Capsicum , Dal Makhani , Rice , Roti , Salad , Pickle , Kheer"
    },
    "2024-03-06": {
      breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
      lunch: "Black Chana , Nutry Matar , Rice , Roti , Boondi Raita , Salad , Pickle",
      snacks: "NC : Mix Pakora , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Mix Pakora , Tea",
      dinner: "Dal Palak , Mix Veg , Salad , Roti , Rice"
    },
    "2024-03-07": {
      breakfast: "Besan Ka Chilla , Ketchup , Chutney , Tea , Milk , Poha",
      lunch: "Dhaba Dal , Aloo Baingan , Jeera Rice , Roti , Ghiya Raita , Salad , Pickle",
      snacks: "NC : Namkeen , Tea  <br> Zakir : Sweet Roll , Tea <br> Girls : Samosa , Tea",
      dinner: "Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
    },
    "2024-03-08": {
      breakfast: "Boys : Aloo Chana , Puri , Tea , Pickle <br>Girls : Chutney ",
      lunch: "Sabut Masoor Dal , Kadhai Veg , Rice , Roti , Cucumber Raita , Salad , Pickle",
      snacks: "NC : Veg Pattie , Tea  <br> Zakir : Samosa , Tea <br> Girls : Rusk , Tea",
      dinner: "Paneer , Chili Chicekn , Dal , Rice , Roti , Salad , Pickle"
    },
    "2024-03-09": {
      breakfast: "Upma , Corn Flakes , Tea , Milk",
      lunch: "Dal Panchmel , Mushroom Methi , Rice , Roti , Boondi Raita , Salad , Pickle",
      snacks: "NC : Cake , Tea  <br> Zakir : Namkeen , Tea <br> Girls : Veg Pattie , Tea",
      dinner: "Gulab Jamun , Jeera Aloo , Chana Dal , Rice , Roti , Salad , Pickle "
    },
    "2024-03-10": {
      breakfast: "Chole Bhature , Tea , Pickle",
      lunch: "Khichdi , Curd , Aloo Jeera , Roti , Salad , Pickle",
      snacks: "NC & Zakir: Bread Pakoda , Tea <br> Girls : Sweet Roll , Tea",
      dinner: "Aloo Gajar Matar , Toor Dal , Rice , Roti , Salad , Pickle"
    },
    "2024-03-11": {
      breakfast: "Pav Bhaji , Milk , Tea ",
      lunch: "Kadhi Pakoda , Aloo Matar , Rice , Roti , Salad , Pickle",
      snacks: "NC & Zakir : Rusk , Tea <br> Girls : Mix Pakoda , Tea",
      dinner: "Matar Paneer , Andra Egg Curry , Lobiya Dal , Rice , Roti , Salad , Pickle"
    },
    "2024-03-12": {
      breakfast: "Subzi , Puri, Tea , Pickle",
      lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
      snacks: "NC : Namkeen , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Bread Pakoda , Tea",
      dinner: "Kheer , Aloo Baingan , Matar Toor Dal , Rice , Roti , Salad , Pickle"
    },
    "2024-03-13": {
      breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
      lunch: "Black Chana , Nutry Matar , Rice , Roti , Mix Raita , Salad , Pickle",
      snacks: "NC : Chips , Tea  <br> Zakir : Danish Bun , Tea <br> Girls : Danish Bun , Tea",
      dinner: "Veg Noodles , Veg Manchurian , Malka Masoor Dal , Roti , Rice , Ketchup"
    },
    "2024-03-14": {
      breakfast: "Dal Paratha , Curd , Butter , Tea , Pickle",
      lunch: "Dhaba Dal , Bharta , Jeera Rice , Roti , Boondi Raita , Salad , Pickle",
      snacks: "NC : Matthi , Tea  <br> Zakir : Biscuit , Tea <br> Girls : Biscuit , Tea",
      dinner: "Sewaiya , Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
    },
    "2024-03-15": {
      breakfast: "Poha , Corn Flakes , Tea , Milk , Ketchup <br>Girls : Papdi Chaat",
      lunch: "Kadhi , Aloo Gajar Matar , Rice , Roti , Salad , Pickle",
      snacks: "NC : Danish Bun , Tea  <br> Zakir : Samosa , Tea <br> Girls : Matthi , Tea",
      dinner: "Karachi Paneer , Chicken Curry , G-Moong Dal , Rice , Roti , Salad , Pickle"
    }
};

function showMenuForDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based
  const day = date.getDate();
  const key = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  var day1 = date.getDay();

  const selectedDateElement = document.getElementById('selected-date');
  if (menuData[key]) {

    if(day1>0 && day1<6 ){
      selectedDateElement.innerHTML = `
      <p><strong>Selected Date:</strong> ${date.toDateString()}</p>
      <h3>Breakfast:</h3><h4>(7:30 AM - 9:00 AM)</h4><p>${menuData[key].breakfast}</p>
      <h3>Lunch:</h3><h4>(12:00 PM - 1:45 PM)</h4><p>${menuData[key].lunch}</p>
      <h3>Snacks:</h3><h4>(4:30 PM - 5:15 PM)</h4><p>${menuData[key].snacks}</p>
      <h3>Dinner:</h3><h4>(7:30 PM - 9:00 PM)</h4><p>${menuData[key].dinner}</p>
    `; 
    }
    else{
      selectedDateElement.innerHTML = `
      <p><strong>Selected Date:</strong> ${date.toDateString()}</p>
      <h3>Breakfast: </h3><h4>(8:00 AM - 9:30 AM)</h4><p>${menuData[key].breakfast}</p>
      <h3>Lunch:</h3><h4>(12:30 PM - 2:00 PM)</h4><p>${menuData[key].lunch}</p>
      <h3>Snacks:</h3><h4>(4:30 PM - 5:15 PM)</h4><p>${menuData[key].snacks}</p>
      <h3>Dinner:</h3><h4>(7:30 PM - 9:00 PM)</h4><p>${menuData[key].dinner}</p>`; 
    }
    // Display menu data for the selected date

  } else {
    // No menu data for the selected date
    selectedDateElement.innerHTML = `
      <p>No menu data available for ${date.toDateString()}</p>
    `;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const calendarContainer = document.getElementById('calendar');

  function updateCalendar(year, month) {
// Clear previous calendar
calendarContainer.innerHTML = '';

// Set the date to the 1st of the month
const firstDay = new Date(year, month - 1, 1); // Corrected month calculation

// Get the number of days in the month
const daysInMonth = new Date(year, month, 0).getDate(); // Adjusted to get the last day of the previous month

// Create a table for the calendar
const calendarTable = document.createElement('table');
calendarTable.classList.add('table');

// Create the header row with day names
const headerRow = document.createElement('tr');
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for (let i = 0; i < 7; i++) {
const th = document.createElement('th');
th.textContent = dayNames[i];
headerRow.appendChild(th);
}

calendarTable.appendChild(headerRow);

// Create a new Date object for the 1st day to calculate the starting day of the week
const firstDayOfWeek = new Date(firstDay);
firstDayOfWeek.setDate(1 - firstDayOfWeek.getDay()); // Move to the previous Sunday

// Create rows for each week
for (let i = 0; i < 6; i++) {
const weekRow = document.createElement('tr');

// Create cells for each day in the week
for (let j = 0; j < 7; j++) {
  const dayCell = document.createElement('td');
  dayCell.classList.add('day');

  // Calculate the current day's date
  const currentDate = new Date(firstDayOfWeek);
  currentDate.setDate(firstDayOfWeek.getDate() + i * 7 + j);

  // Skip cells before the starting day of the month
  if (currentDate.getMonth() !== month - 1) {
    dayCell.textContent = '';
  } else {
    // Add the day number and event listener
    dayCell.textContent = currentDate.getDate();
    dayCell.addEventListener('click', function () {
      showMenuForDate(currentDate);
    });
  }

  weekRow.appendChild(dayCell);
}

calendarTable.appendChild(weekRow);
}

// Append the calendar table to the container
calendarContainer.appendChild(calendarTable);
}


  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based

  // Initial calendar render
  updateCalendar(currentYear, currentMonth);
});