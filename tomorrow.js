function showTodayMenu() {
    var currentDate = new Date();
    var day = currentDate.getDate()+1;
    var day1= currentDate.getDay()+1;

    // Replace the following with your actual menu data
    var menuData = {
      "1": {
        breakfast: "Boys : Namkeen Sewai , Masala Aloo Sandwich , Ketchup , Milk , Tea<br> Girls : Aloo Chana Chat",
        lunch: "Dal Panchmel , Mushroom Matar , Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Samosa , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Rusk , Tea",
        dinner: "Shahi Paneer , Kadai Chicken , Moong Dal , Rice , Roti , Pickle , Salad"
      },
      "2": {
        breakfast: "Stuffed Paratha , Curd , Butter , Tea , Pickle",
        lunch: "Black Chana , Ghiya Masala , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Veg Pattie , Tea  <br> Zakir :  Cake , Tea <br> Girls : Namak Pare , Tea",
        dinner: "Kesari Halwa , Mix Veg , Chana Dal , Rice , Roti , Salad , Pickle"
      },
      "3": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Veg Biryani , Salan , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC & Zakir : Bread Pakora , Tea <br> Girls : Cake , Tea",
        dinner: "Chocolate , Aloo Gobhi , Toor Dal , Rice , Roti , Salad , Pickle"
      },
      "4": {
        breakfast: "Pav Bhaji , Milk , Tea ",
        lunch: "Aloo Matar , Kadhi Gatta , Rice , Roti , Salad , Pickle",
        snacks: "NC : Matthi , Tea  <br> Zakir : Rusk , Tea <br> Girls : Matthi , Tea",
        dinner: "Egg Masala , Paneer , Lobiya Dal , Rice , Roti , Salad , Pickle"
      },
      "5": {
        breakfast: "Plain Paratha , Subzi , Tea , Pickle",
        lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Sweet Roll , Tea  <br> Zakir : Namak Pare , Tea <br> Girls : Biscuits , Tea",
        dinner: "Aloo Capsicum , Dal Makhani , Rice , Roti , Salad , Pickle , Kheer"
      },
      "6": {
        breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
        lunch: "Black Chana , Nutry Matar , Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Mix Pakora , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Mix Pakora , Tea",
        dinner: "Dal Palak , Mix Veg , Salad , Roti , Rice"
      },
      "7": {
        breakfast: "Besan Ka Chilla , Ketchup , Chutney , Tea , Milk , Poha",
        lunch: "Dhaba Dal , Aloo Baingan , Jeera Rice , Roti , Ghiya Raita , Salad , Pickle",
        snacks: "NC : Namkeen , Tea  <br> Zakir : Sweet Roll , Tea <br> Girls : Samosa , Tea",
        dinner: "Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
      },
      "8": {
        breakfast: "Boys : Aloo Chana , Puri , Tea , Pickle <br>Girls : Chutney ",
        lunch: "Sabut Masoor Dal , Kadhai Veg , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Veg Pattie , Tea  <br> Zakir : Samosa , Tea <br> Girls : Rusk , Tea",
        dinner: "Paneer , Chili Chicekn , Dal , Rice , Roti , Salad , Pickle"
      },
      "9": {
        breakfast: "Upma , Corn Flakes , Tea , Milk",
        lunch: "Dal Panchmel , Mushroom Methi , Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Cake , Tea  <br> Zakir : Namkeen , Tea <br> Girls : Veg Pattie , Tea",
        dinner: "Gulab Jamun , Jeera Aloo , Chana Dal , Rice , Roti , Salad , Pickle "
      },
      "10": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Khichdi , Curd , Aloo Jeera , Roti , Salad , Pickle",
        snacks: "NC & Zakir: Bread Pakoda , Tea <br> Girls : Sweet Roll , Tea",
        dinner: "Aloo Gajar Matar , Toor Dal , Rice , Roti , Salad , Pickle"
      },
      "11": {
        breakfast: "Pav Bhaji , Milk , Tea ",
        lunch: "Kadhi Pakoda , Aloo Matar , Rice , Roti , Salad , Pickle",
        snacks: "NC & Zakir : Rusk , Tea <br> Girls : Mix Pakoda , Tea",
        dinner: "Matar Paneer , Andra Egg Curry , Lobiya Dal , Rice , Roti , Salad , Pickle"
      },
      "12": {
        breakfast: "Subzi , Puri, Tea , Pickle",
        lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Namkeen , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Bread Pakoda , Tea",
        dinner: "Kheer , Aloo Baingan , Matar Toor Dal , Rice , Roti , Salad , Pickle"
      },
      "13": {
        breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
        lunch: "Black Chana , Nutry Matar , Rice , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Chips , Tea  <br> Zakir : Danish Bun , Tea <br> Girls : Danish Bun , Tea",
        dinner: "Veg Noodles , Veg Manchurian , Malka Masoor Dal , Roti , Rice , Ketchup"
      },
      "14": {
        breakfast: "Dal Paratha , Curd , Butter , Tea , Pickle",
        lunch: "Dhaba Dal , Bharta , Jeera Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Matthi , Tea  <br> Zakir : Biscuit , Tea <br> Girls : Biscuit , Tea",
        dinner: "Sewaiya , Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
      },
      "15": {
        breakfast: "Poha , Corn Flakes , Tea , Milk , Ketchup <br>Girls : Papdi Chaat",
        lunch: "Kadhi , Aloo Gajar Matar , Rice , Roti , Salad , Pickle",
        snacks: "NC : Danish Bun , Tea  <br> Zakir : Samosa , Tea <br> Girls : Matthi , Tea",
        dinner: "Karachi Paneer , Chicken Curry , G-Moong Dal , Rice , Roti , Salad , Pickle"
      }
    };
    if(day1>0 && day1<6 )
    {
      document.getElementById("breakfast").innerHTML = "<h3>Breakfast:</h3><h4>(7:30 AM - 9:00 AM)</h4><p>" + menuData[day].breakfast + "</p>";
    document.getElementById("lunch").innerHTML = "<h3>Lunch:</h3><h4>(12:00 PM - 1:45 PM)</h4><p>" + menuData[day].lunch + "</p>";
    document.getElementById("snacks").innerHTML = "<h3>Snacks:</h3><h4>(4:30 PM - 5:15 PM)</h4><p>" + menuData[day].snacks + "</p>";
    document.getElementById("dinner").innerHTML = "<h3>Dinner:</h3><h4>(7:30 PM - 9:00 PM)</h4><p>" + menuData[day].dinner + "</p>";
    }
    else
    {
      document.getElementById("breakfast").innerHTML = "<h3>Breakfast:</h3><h4>(8:00 AM - 9:30 AM)</h4><p>" + menuData[day].breakfast + "</p>";
    document.getElementById("lunch").innerHTML = "<h3>Lunch:</h3><h4>(12:30 PM - 2:00 PM)</h4><p>" + menuData[day].lunch + "</p>";
    document.getElementById("snacks").innerHTML = "<h3>Snacks:</h3><h4>(4:30 PM - 5:15 PM)</h4><p>" + menuData[day].snacks + "</p>";
    document.getElementById("dinner").innerHTML = "<h3>Dinner:</h3><h4>(7:30 PM - 9:00 PM)</h4><p>" + menuData[day].dinner + "</p>";
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".button").click();
  });