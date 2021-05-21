const daysTillHTML = document.querySelector("#daysTill");

let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");

const Christmas = new Date(
  `December 25, ${month >= 12 && date >= 26 ? year + 1 : year} 00:00:00`
);

const now = new Date();

const daysTillNum = Math.floor((Christmas - now) / 8.64e7);

function changeDay() {
  daysTillHTML.innerText = daysTillNum + " days";
}

changeDay();
setInterval(changeDay, 99999);
