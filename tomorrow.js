function showTodayMenu() {
    var currentDate = new Date();
    var day = currentDate.getDate()+1;
    var day1= currentDate.getDay()+1;

    // Replace the following with your actual menu data
    var menuData = {
      "1": {
        breakfast: "Boys : Namkeen Sewai , Coleslaw Sandwich , Ketchup , Milk , Tea<br> Girls : Papdi Chat",
        lunch: "Aloo Capsicum , Kadhi Gatta , Rice , Roti , Salad , Pickle",
        snacks: "NC : Matthi , Tea  <br> Zakir : Rusk , Tea <br> Girls : Matthi , Tea",
        dinner: "Egg Masala , Panner Kadhai , Lobiya Dal , Rice , Roti , Pickle , Salad"
      },
      "2": {
        breakfast: "Plain Paratha , Subzi , Tea , Pickle",
        lunch: "Rajma , Sev Tamatar , Rice , Roti , Chaas , Salad , Pickle",
        snacks: "NC : Sweet Roll , Tea  <br> Zakir :  Namak Pare , Tea <br> Girls : Biscuit , Tea",
        dinner: "Kheer , Aloo Amritsari , Dal Makhani , Rice , Roti , Salad , Pickle"
      },
      "3": {
        breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea",
        lunch: "Black Chana , Nutry Matar , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Mix Pakora , Tea <br>Zakir : Veg Pattie , Teas <br> Girls : Cake , Tea",
        dinner: "Dal Panchmel , Mix veg , Rice , Roti , Salad , Pickle"
      },
      "4": {
        breakfast: "Besan Ka Chilla , Ketchup , Chutney , Tea , Milk , Poha",
        lunch: "Aloo Matar , Kadhi Gatta , Rice , Roti , Salad , Pickle",
        snacks: "NC : Matthi , Tea  <br> Zakir : Rusk , Tea <br> Girls : Matthi , Tea",
        dinner: "Egg Masala , Paneer Nilgiri Korma , Lobiya Dal , Rice , Roti , Salad , Pickle"
      },
      "5": {
        breakfast: "Aloo Chana , Poori , Tea , Pickle <br> Girls : Chutney",
        lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Sweet Roll , Tea  <br> Zakir : Namak Pare , Tea <br> Girls : Biscuits , Tea",
        dinner: "Aloo Capsicum , Dal Makhani , Rice , Roti , Salad , Pickle , Kheer"
      },
      "6": {
        breakfast: "Upma , Masala Aloo Sandwich , Milk, Tea ",
        lunch: "Black Chana , Nutry Matar , Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Mix Pakora , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Mix Pakora , Tea",
        dinner: "Dal Palak , Mix Veg , Salad , Roti , Rice"
      },
      "7": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Dhaba Dal , Aloo Baingan , Jeera Rice , Roti , Ghiya Raita , Salad , Pickle",
        snacks: "NC : Namkeen , Tea  <br> Zakir : Sweet Roll , Tea <br> Girls : Samosa , Tea",
        dinner: "Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
      },
      "8": {
        breakfast: "Pav Bhaji , Milk , Tea ",
        lunch: "Sabut Masoor Dal , Kadhai Veg , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Veg Pattie , Tea  <br> Zakir : Samosa , Tea <br> Girls : Rusk , Tea",
        dinner: "Paneer , Chili Chicekn , Dal , Rice , Roti , Salad , Pickle"
      },
      "9": {
        breakfast: "Subzi , Puri, Tea , Pickle",
        lunch: "Dal Panchmel , Mushroom Methi , Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Cake , Tea  <br> Zakir : Namkeen , Tea <br> Girls : Veg Pattie , Tea",
        dinner: "Gulab Jamun , Jeera Aloo , Chana Dal , Rice , Roti , Salad , Pickle "
      },
      "10": {
        breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
        lunch: "Khichdi , Curd , Aloo Jeera , Roti , Salad , Pickle",
        snacks: "NC & Zakir: Bread Pakoda , Tea <br> Girls : Sweet Roll , Tea",
        dinner: "Aloo Gajar Matar , Toor Dal , Rice , Roti , Salad , Pickle"
      },
      "11": {
        breakfast: "Dal Paratha , Curd , Butter , Tea , Pickle",
        lunch: "Kadhi Pakoda , Aloo Matar , Rice , Roti , Salad , Pickle",
        snacks: "NC & Zakir : Rusk , Tea <br> Girls : Mix Pakoda , Tea",
        dinner: "Matar Paneer , Andra Egg Curry , Lobiya Dal , Rice , Roti , Salad , Pickle"
      },
      "12": {
        breakfast: "Poha , Corn Flakes , Tea , Milk , Ketchup",
        lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Namkeen , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Bread Pakoda , Tea",
        dinner: "Kheer , Aloo Baingan , Matar Toor Dal , Rice , Roti , Salad , Pickle"
      },
      "13": {
        breakfast: "Stuffed Paratha , Curd , Butter , Tea , Pickle",
        lunch: "Black Chana , Nutry Matar , Rice , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Chips , Tea  <br> Zakir : Danish Bun , Tea <br> Girls : Danish Bun , Tea",
        dinner: "Veg Noodles , Veg Manchurian , Malka Masoor Dal , Roti , Rice , Ketchup"
      },
      "14": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Dhaba Dal , Bharta , Jeera Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Matthi , Tea  <br> Zakir : Biscuit , Tea <br> Girls : Biscuit , Tea",
        dinner: "Sewaiya , Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
      },
      "15": {
        breakfast: "Matar Kulcha , Milk , Tea , Pickle",
        lunch: "Kadhi , Aloo Gajar Matar , Rice , Roti , Salad , Pickle",
        snacks: "NC : Danish Bun , Tea  <br> Zakir : Samosa , Tea <br> Girls : Matthi , Tea",
        dinner: "Karachi Paneer , Chicken Curry , G-Moong Dal , Rice , Roti , Salad , Pickle"
      }
      /*"16": {
        breakfast: "Stuffed Paratha , Curd , Butter , Tea , Pickle",
        lunch: "Dal Panchmel , Aloo Capsicum , Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Matthi , Tea  <br> Zakir : Cake , Tea <br> Girls : Namkeen , Tea",
        dinner: "Kesari Halwa , Tamaloo , Dal Makhani , Rice , Roti , Pickle , Salad"
      },
      "17": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Veg Biryani , Salan , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Rusk , Tea  <br> Zakir :  Bread Pakora , Tea <br> Girls : Bread Pakora , Tea",
        dinner: "White Chana , Ghiya Masala , Rice , Roti , Salad , Pickle"
      },
      "18": {
        breakfast: "Matar Kulcha , Milk , Tea , Pickle",
        lunch: "Kadhi Pakoda , Aloo Matar , Rice , Roti , Salad , Pickle",
        snacks: "NC : Mix Pakora , Tea  <br> Zakir :  Namkeen , Tea <br> Girls : Biscuits , Tea",
        dinner: "Egg Masala , Paneer Makhani , Lobiya Dal , Rice , Roti , Salad , Pickle"
      },
      "19": {
        breakfast: "Boys : Besan Ka Chilla , Ketchup , Chutney , Tea , Milk , Poha <br> Girls : Aloo Chana Chaat",
        lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Namkeen , Tea  <br> Zakir : Samosa , Tea <br> Girls : Sweet Roll , Tea",
        dinner: "Chocolate , Toor Dal , Mix Veg , Salad , Roti , Jeera Rice"
      },
      "20": {
        breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
        lunch: "Black Chana , Nutry Matar , Rice , Roti , Boondi Raita , Salad , Pickle",
        snacks: "NC : Samosa , Tea  <br> Zakir : Rusk , Tea <br> Girls : Cake , Tea",
        dinner: "Aloo Capsicum , Dal Makhani , Rice , Roti , Salad , Pickle , Kheer"
      },
      "21": {
        breakfast: "Aloo Chana , Poori , Tea , Pickle",
        lunch: "White Chana , Bharta , Rice , Boondi raita , Salad , Roti , Pickle",
        snacks: "NC : Sweet Roll , Tea  <br> Zakir : Mathi , Tea <br> Girls : Veg Pattie , Tea",
        dinner: "Kheer , Aloo Gobhi , Rajma , Jeera Rice , Roti , Salad , Pickle"
      },
      "22": {
        breakfast: "Namkeen Sewai , Coleslaw Sandwich , Ketchup , Milk , Tea",
        lunch: "Dal Panchmel, Kofta Curry , Rice , Roti , Ghiya Raita , Salad , Pickle",
        snacks: "NC : Biscuit , Tea  <br> Zakir : Biscuit , Tea <br> Girls : Namkeen , Tea",
        dinner: "Matar Paneer , Kerela Chicken Curry , G-Moong Dal , Rice , Roti , Salad , Pickle"
      },
      "23": {
        breakfast: "Boys : Upma , Corn Flakes , Tea , Milk <br>Girls : Papdi Chaat",
        lunch: "Sabut Masoor Dal , Mushroom Matar ,  Jeera Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Rusk , Tea  <br> Zakir : Veg Pattie , Tea <br> Girls : Matthi , Tea",
        dinner: "Sewaiya , Jeera Aloo , Maha Chana Dal , Peas Pulao , Roti , Salad , Pickle "
      },
      "24": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Khichdi , Curd , Aloo Jeera , Roti , Salad , Pickle",
        snacks: "NC : Bread Pakora , Tea  <br> Zakir : Bread Pakora , Tea <br> Girls : Rusk , Tea",
        dinner: "Aloo Gobhi , Toor Dal , Nutry Pulao , Roti , Salad , Pickle"
      },
      "25": {
        breakfast: "Pav Bhaji , Milk , Tea",
        lunch: "Aloo Matar , Kadhi Gatta , Rice , Roti , Salad , Pickle",
        snacks: "NC : Namkeen , Tea <br>Zakir : Namak Pare , Tea<br> Girls : Namak Pare , Tea",
        dinner: "Kadahi Paneer , Egg Masala , Lobiya Dal , Rice , Roti , Salad , Pickle"
      },
      "26": {
        breakfast: "Dal Paratha , Curd , Butter , Tea , Pickle",
        lunch: "Rajma , Sev tamatar , Rice , Roti , Cucumber Raita , Salad , Pickle",
        snacks: "NC : Chips , Tea <br>Zakir : Namkeen , Tea<br> Girls : Chips , Tea",
        dinner: "Gulab Jamun , Kadhai Veg , Chana Dal ,Jeera Rice , Roti , Pickle , Salad"
      },
      "27": {
        breakfast: "Omelette , Bread , Butter , Jam , Dalia , Banana , Tea ",
        lunch: "Black Chana , Nutry Matar , Rice , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Danish Bun , Tea  <br> Zakir : Danish Bun , Tea <br> Girls : Biscuit , Tea",
        dinner: "Veg Noodles , Veg Manchurian , Palak Dal , Roti , Rice , Ketchup"
      },
      "28": {
        breakfast: "Boys : Poha , Corn Flakes , Tea , Milk , Ketchup <br>Girls : Chutney",
        lunch: "Sabut Masoor Dal , Mushroom Matar , Jeera Rice , Roti , Ghiya Raita , Salad , Pickle",
        snacks: "NC : Veg Pattie , Tea  <br> Zakir : Biscuit , Tea <br> Girls : Samosa , Tea",
        dinner: "Soan Papdi , Hara Kaddu , White Chana , Rice , Roti , Salad , Pickle"
      },
      "29": {
        breakfast: "Subzi , Puri, Tea , Pickle",
        lunch: "Black Dal Tadka , Aloo Baingan , Rice , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Mix Pakoda , Tea  <br> Zakir : Mix Pakoda , Tea <br> Girls : Cake , Tea",
        dinner: "Chilli Chicken , Paneer Nilgiri Korma , G-Moong Dal , Rice , Roti , Salad , Pickle"
      },
      "30": {
        breakfast: "Namkeen Sewai , Masala Aloo Sandwich , Ketchup , Milk , Tea",
        lunch: "Rajma , Tamaloo , Boondi Raita , Rice , Roti , Salad , Pickle",
        snacks: "NC : Namak Pare , Tea  <br> Zakir : Sweet Roll , Tea <br> Girls : Danish Bun , Tea",
        dinner: "Sewaiya , Aloo Gajar Matar , Maha Chana Dal , Peas Pulao , Roti , Salad , Pickle"
      },
      "31": {
        breakfast: "Chole Bhature , Tea , Pickle",
        lunch: "Veg Biryani , Salan , Roti , Mix Raita , Salad , Pickle",
        snacks: "NC : Biscuit , Tea  <br> Zakir : Chips , Tea <br> Girls : Mix Pakoda , Tea",
        dinner: "Aloo Gobhi , Toor Dal , Nutry Pulao , Roti , Salad , Pickle"
      }*/
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