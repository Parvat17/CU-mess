const menuData = {
  "2024-04-01": {
    breakfast: "Boys : Namkeen Sewai , Coleslaw Sandwich , Ketchup , Milk , Tea<br> Girls : Papdi Chat",
    lunch: "Aloo Capsicum , Kadhi Gatta , Rice , Roti , Salad , Pickle",
    snacks: "NC : Matthi , Tea  <br> Zakir : Rusk , Tea <br> Girls : Matthi , Tea",
    dinner: "Egg Masala , Panner Kadhai , Lobiya Dal , Rice , Roti , Pickle , Salad"
  },
  "2024-04-02": {
    breakfast: "Plain Paratha , Subzi , Tea , Pickle",
    lunch: "Rajma , Sev Tamatar , Rice , Roti , Chaas , Salad , Pickle",
    snacks: "NC : Sweet Roll , Tea  <br> Zakir :  Namak Pare , Tea <br> Girls : Biscuit , Tea",
    dinner: "Kheer , Aloo Amritsari , Dal Makhani , Rice , Roti , Salad , Pickle"
  },
  "2024-04-03": {
    breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea",
    lunch: "Black Chana , Nutry Matar , Roti , Boondi Raita , Salad , Pickle",
    snacks: "NC : Mix Pakora , Tea <br>Zakir : Veg Pattie , Teas <br> Girls : Cake , Tea",
    dinner: "Dal Panchmel , Mix veg , Rice , Roti , Salad , Pickle"
  },
  "2024-04-04": {
    breakfast: "Besan Ka Chilla , Ketchup , Chutney , Tea , Milk , Poha",
    lunch: "Sabut Masoor Dal , Kofta Curry , Jeera Rice , Roti , Ghiya Raita , Salad , Pickle",
    snacks: "NC : Namkeen , Tea  <br> Zakir : Sweet Roll , Tea <br> Girls : Namkeen , Tea",
    dinner: "Chocolate , Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
  },
  "2024-04-05": {
    breakfast: "Aloo Chana , Poori , Tea , Pickle <br> Girls : Chutney",
    lunch: "Black Dal Fry , Aloo Mangodi , Rice , Roti , Cucumber Raita , Salad , Pickle",
    snacks: "NC : Veg Pattie , Tea  <br> Zakir : Samosa , Tea <br> Girls : Rusk , Tea",
    dinner: "Matar Pnner , Chili Chicken , G-Moong Dal , Rice , Roti , Salad , Pickle"
  },
  "2024-04-06": {
    breakfast: "Upma , Masala Aloo Sandwich , Milk, Tea ",
    lunch: "Dal Panchmel , Mushroom Matar , Rice , Roti , Boondi Raita , Salad , Pickle",
    snacks: "NC : Cake , Tea  <br> Zakir : Namkeen , Tea <br> Girls : Veg Pattie , Tea",
    dinner: "Gulab Jamun , Nutry Keema , Rajma , Salad , Roti , Rice , Salad , Pickle"
  },
  "2024-04-07": {
    breakfast: "Chole Bhature , Tea , Pickle",
    lunch: "Khichdi , Curd , Aloo Jeera , Roti , Salad , Pickle",
    snacks: "NC & Zakir : Bread Pakoda , Tea  <br>Girls : Sweet Roll , Tea",
    dinner: "Dum Aloo , Toor Dal , Rice , Roti , Salad , Pickle"
  },
  "2024-04-08": {
    breakfast: "Pav Bhaji , Milk , Tea ",
    lunch: "Aloo Capsicum , Kadhi Gatta , Rice , Roti , Salad , Pickle",
    snacks: "NC & Zakir : Rusk , Tea <br> Girls : Samosa , Tea",
    dinner: "Palkati Pattani Korma Paneer , Egg Curry , Lobiya Dal , Rice , Roti , Salad , Pickle"
  },
  "2024-04-09": {
    breakfast: "Subzi , Puri, Tea , Pickle",
    lunch: "Rajma , Sev tamatar , Rice , Roti , Chaas , Salad , Pickle",
    snacks: "NC : Namkeen , Tea  <br> Zakir : Matthi , Tea <br> Girls : Bread Pakoda , Tea",
    dinner: "Sewaiya , Aloo Baingan , Chana Dal , Rice , Roti , Salad , Pickle "
  },
  "2024-04-10": {
    breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
    lunch: "Black Chana , Nutry Matar , Roti , Mix Raita , Salad , Pickle",
    snacks: "NC : Chips , Tea <br>zakir : Danish Bun , Tea <br> Girls : Danish Bun , Tea",
    dinner: "Veg Noodles , Veg Manchurian , Roti , Fried Rice , Salad"
  },
  "2024-04-11": {
    breakfast: "Dal Paratha , Curd , Butter , Tea , Pickle",
    lunch: "Dhaba Dal , Bharta , Jeera Rice , Roti , Boondi Raita , Salad , Pickle",
    snacks: "NC : Matthi , Tea <br>zakir : Biscuit , Tea <br> Girls : Biscuit , Tea",
    dinner: "Kheer , Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
  },
  "2024-04-12": {
    breakfast: "Poha , Corn Flakes , Tea , Milk , Ketchup",
    lunch: "Kadhi , Aloo Manngodi, Rice , Roti , Salad , Pickle",
    snacks: "NC : Danish Bun , Tea  <br> Zakir : Mix Pakoda , Tea <br> Girls : Mix Pakoda , Tea",
    dinner: "Panner Do Pyaaza , Chicken Curry , G-Moong Dal , Rice , Roti , Salad , Pickle"
  },
  "2024-04-13": {
    breakfast: "Stuffed Paratha , Curd , Butter , Tea , Pickle",
    lunch: "White Chana , Ghiya Masala , Rice , Roti , Cucumber Raita , Salad , Pickle",
    snacks: "NC : Veg Pattie , Tea  <br> Zakir : Cake , Tea <br> Girls : Namkeen , Tea",
    dinner: "Soan Papdi , Kofta Curry , Urad Moong Dal , Roti , Rice , Salad , Pickle"
  },
  "2024-04-14": {
    breakfast: "Chole Bhature , Tea , Pickle",
    lunch: "Veg Biryani , Salan , Roti , Mix Raita , Salad , Pickle",
    snacks: "NC : Biscuit , Tea  <br> Zakir : Bread Pakoda , Tea <br> Girls : Cake , Tea",
    dinner: "Kesari Halwa , Aloo Gobhi , Toor Dal , Rice , Roti , Salad , Pickle"
  },
  "2024-04-15": {
    breakfast: "Matar Kulcha , Milk , Tea , Pickle",
    lunch: "Aloo Fali , Rajma , Rice , Roti , Salad , Ghiya Raita , Pickle",
    snacks: "NC : Samosa , Tea  <br> Zakir : Namkeen , Tea <br> Girls : Biscuit , Tea",
    dinner: "Matar Paneer , Egg Masala , Lobiya Dal , Rice , Roti , Salad , Pickle"
  }
  /*
      "2024-03-16": {
        breakfast: "Stuffed Paratha , Curd , Butter , Tea , Pickle",
        lunch: "Dal Panchmel , Aloo Capsicum , Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Matthi , Tea  <br> Zakir : Cake , Tea <br> Girls : Namkeen , Tea",
        dinner: "Kesari Halwa , Tamaloo , Dal Makhani , Rice , Roti , Pickle , Salad"
      },
      "2024-03-17": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Veg Biryani , Salan , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Rusk , Tea  <br> Zakir :  Bread Pakora , Tea <br> Girls : Bread Pakora , Tea",
        dinner: "White Chana , Ghiya Masala , Rice , Roti , Salad , Pickle"
      },
      "2024-03-18": {
        breakfast: "Matar Kulcha , Milk , Tea , Pickle",
        lunch: "Kadhi Pakoda , Aloo Matar , Rice , Roti , Salad , Pickle",
        snacks: "NC : Mix Pakora , Tea  <br> Zakir :  Namkeen , Tea <br> Girls : Biscuits , Tea",
        dinner: "Egg Masala , Paneer Makhani , Lobiya Dal , Rice , Roti , Salad , Pickle"
      },
      "2024-03-19": {
        breakfast: "Boys : Besan Ka Chilla , Ketchup , Chutney , Tea , Milk , Poha <br> Girls : Aloo Chana Chaat",
        lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Namkeen , Tea  <br> Zakir : Samosa , Tea <br> Girls : Sweet Roll , Tea",
        dinner: "Chocolate , Toor Dal , Mix Veg , Salad , Roti , Jeera Rice"
      },
      "2024-03-20": {
        breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
        lunch: "Black Chana , Nutry Matar , Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Samosa , Tea  <br> Zakir : Rusk , Tea <br> Girls : Cake , Tea",
        dinner: "Aloo Capsicum , Dal Makhani , Rice , Roti , Salad , Pickle , Kheer"
      },
      "2024-03-21": {
        breakfast: "Aloo Chana , Poori , Tea , Pickle",
        lunch: "White Chana , Bharta , Rice , Boondi raita , Salad , Roti , Pickle",
        snacks: "NC : Sweet Roll , Tea  <br> Zakir : Mathi , Tea <br> Girls : Veg Pattie , Tea",
        dinner: "Kheer , Aloo Gobhi , Rajma , Jeera Rice , Roti , Salad , Pickle"
      },
      "2024-03-22": {
        breakfast: "Namkeen Sewai , Coleslaw Sandwich , Ketchup , Milk , Tea",
        lunch: "Dal Panchmel, Kofta Curry , Rice , Roti , Ghiya Raita , Salad , Pickle",
        snacks: "NC : Biscuit , Tea  <br> Zakir : Biscuit , Tea <br> Girls : Namkeen , Tea",
        dinner: "Matar Paneer , Kerela Chicken Curry , G-Moong Dal , Rice , Roti , Salad , Pickle"
      },
      "2024-03-23": {
        breakfast: "Boys : Upma , Corn Flakes , Tea , Milk <br>Girls : Papdi Chaat",
        lunch: "Sabut Masoor Dal , Mushroom Matar ,  Jeera Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Rusk , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Matthi , Tea",
        dinner: "Sewaiya , Jeera Aloo , Maha Chana Dal , Peas Pulao , Roti , Salad , Pickle "
      },
      "2024-03-24": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Khichdi , Curd , Aloo Jeera , Roti , Salad , Pickle",
        snacks: "NC : Bread Pakora , Tea  <br> Zakir : Bread Pakora , Tea <br> Girls : Rusk , Tea",
        dinner: "Aloo Gobhi , Toor Dal , Nutry Pulao , Roti , Salad , Pickle"
      },
      "2024-03-25": {
        breakfast: "Pav Bhaji , Milk , Tea",
        lunch: "Aloo Matar , Kadhi Gatta , Rice , Roti , Salad , Pickle",
        snacks: "NC : Namkeen , Tea <br>Zakir : Namak Pare , Tea<br> Girls : Namak Pare , Tea",
        dinner: "Kadahi Paneer , Egg Masala , Lobiya Dal , Rice , Roti , Salad , Pickle"
      },
      "2024-03-26": {
        breakfast: "Dal Paratha , Curd , Butter , Tea , Pickle",
        lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Chips , Tea <br>Zakir : Namkeen , Tea<br> Girls : Chips , Tea",
        dinner: "Gulab Jamun , Kadhai Veg , Chana Dal ,Jeera Rice , Roti , Pickle , Salad"
      },
      "2024-03-27": {
        breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
        lunch: "Black Chana , Nutry Matar , Rice , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Danish Bun , Tea  <br> Zakir : Danish Bun , Tea <br> Girls : Biscuit , Tea",
        dinner: "Veg Noodles , Veg Manchurian , Palak Dal , Roti , Rice , Ketchup"
      },
      "2024-03-28": {
        breakfast: "Boys : Poha , Corn Flakes , Tea , Milk , Ketchup <br>Girls : Chutney",
        lunch: "Sabut Masoor Dal , Mushroom Matar , Jeera Rice , Roti , Ghiya Raita , Salad , Pickle",
        snacks: "NC : Veg Pattie , Tea  <br> Zakir : Biscuit , Tea <br> Girls : Samosa , Tea",
        dinner: "Soan Papdi , Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
      },
      "2024-03-29": {
        breakfast: "Subzi , Puri, Tea , Pickle",
        lunch: "Black Dal Tadka , Aloo Baingan , Rice , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Mix Pakoda , Tea  <br> Zakir : Mix Pakoda , Tea <br> Girls : Cake , Tea",
        dinner: "Chilli Chicken , Paneer Nilgiri Korma , G-Moong Dal , Rice , Roti , Salad , Pickle"
      },
      "2024-03-30": {
        breakfast: "Namkeen Sewai , Masala Aloo Sandwich , Ketchup , Milk , Tea",
        lunch: "Rajma , Tamaloo , Boondi Raita , Rice , Roti , Salad , Pickle",
        snacks: "NC : Namak Pare , Tea  <br> Zakir : Sweet Roll , Tea <br> Girls : Danish Bun , Tea",
        dinner: "Sewaiya , Aloo Gajar Matar , Maha Chana Dal , Peas Pulao , Roti , Salad , Pickle"
      },
      "2024-03-31": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Veg Biryani , Salan , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Biscuit , Tea  <br> Zakir : Chips , Tea <br> Girls : Mix Pakoda , Tea",
        dinner: "Aloo Gobhi , Toor Dal , Nutry Pulao , Roti , Salad , Pickle"
      }*/
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