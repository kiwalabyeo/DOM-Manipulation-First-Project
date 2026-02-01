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

document.addEventListener("DOMContentLoaded", () => {
  updatePrices("monthly");
});

const pricing = {
  monthly: {
    starter: 10,
    pro: 25,
    enterprise: 60,
  },
  yearly: {
    starter: 100,
    pro: 250,
    enterprise: 600,
  },
};

const starter = document.getElementById("starterPrice");
const pro = document.getElementById("proPrice");
const enterprise = document.getElementById("enterprisePrice");

function updatePrices(type) {
  starterPrice.textContent = `$${pricing[type].starter}`;
  proPrice.textContent = `$${pricing[type].pro}`;
  enterprisePrice.textContent = `$${pricing[type].enterprise}`;
}

monthly.onclick = () => {
  isMonthly = true;
  updateToggle();
  updatePrices("monthly");
};

yearly.onclick = () => {
  isMonthly = false;
  updateToggle();
  updatePrices("yearly");
};


// default
setPricing("monthly");

