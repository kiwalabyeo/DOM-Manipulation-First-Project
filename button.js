const pill = document.getElementById("pill");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");

let isMonthly = true;

function updateToggle() {
  if (isMonthly) {
    pill.style.left = "0.25rem";
    monthly.classList.add("text-white");
    yearly.classList.remove("text-white");
  } else {
    pill.style.left = "50%";
    yearly.classList.add("text-white");
    monthly.classList.remove("text-white");
  }
}

monthly.onclick = () => {
  isMonthly = true;
  updateToggle();
};

yearly.onclick = () => {
  isMonthly = false;
  updateToggle();
};

updateToggle();
