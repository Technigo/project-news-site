function updateDate() {

let today = new Date();

let dayName = today.getDay();
let dayNum = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

const dayWeek =[
    "Monday,",
    "Tuesday,",
    "Wednesday,",
    "Thursday,",
    "Friday,",
    "Saturday,",
    "Sunday,"
  ]

  const IDCollection = ["day","daynum","month","year"];
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++){
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }

}

updateDate();

