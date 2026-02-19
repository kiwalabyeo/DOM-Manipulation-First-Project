// Title
const overallPill = document.getElementById("overallPill");
const overallText = document.getElementById("overallText");
const overallTextBox = document.getElementById("overallTextBox");
// Engine tile
const engineTile = document.getElementById("engineTile");
const engineIcon = document.getElementById("engineIcon");
const engineStatus = document.getElementById("engineStatus");
const engineValue = document.getElementById("engineValue");
//Battery tile
const batteryTile = document.getElementById("batteryTile");
const batteryIcon = document.getElementById("batteryIcon");
const batteryStatus = document.getElementById("batteryStatus");
const batteryValue = document.getElementById("batteryValue");
//Brakes
const brakesTile = document.getElementById("brakesTile");
const brakesIcon = document.getElementById("brakesIcon");
const brakesStatus = document.getElementById("brakesStatus");
const brakesValue = document.getElementById("brakesValue");
//Electronics
const electronicsTile = document.getElementById("electronicsTile");
const electronicsIcon = document.getElementById("electronicsIcon");
const electronicsStatus = document.getElementById("electronicsStatus");
const electronicsValue = document.getElementById("electronicsValue");
//Detected Issues
const issuesList = document.getElementById("issuesList");

//function for the battery voltage
function getBatteryState(voltage) {
  if (voltage < 11.5) return "critical";
  if (voltage < 12.0) return "warning";
  return "normal";
}

//function for the engine
function getEngineStatus(temp) {
    if (temp > 100) return "critical";
    if (temp > 90) return "warning";
    return "normal";
}


//Function for brakes
function getBrakesStatus(wear) {
    if (wear > 50) return "critical";
    if (wear > 25) return "warning";
    return "normal";
}

//Function for electronics
function getElectronicsStatus(issues) {
    if (issues.length > 3) return "critical";
    if (issues.length > 1) return "warning";
    return "normal";
}

//Styles of the different warnings
const styles = {
  normal: { text: "text-green-400", iconText: "text-green-400", iconBg: "bg-green-400/5", dot: "bg-green-400", border: "border-green-400"},
  warning: { text: "text-amber-500", iconText: "text-amber-500", iconBg: "bg-amber-500/5", dot: "bg-amber-500", border: "border-amber-500"},
  critical: { text: "text-red-500", iconText: "text-red-500", iconBg: "bg-red-500/5", dot: "bg-red-500", border: "border-red-500"}
};

//Classes that I might need to get rid of
const textClasses = ["text-green-400", "text-amber-500", "text-red-500"];
const iconBgClasses = ["bg-green-400/5", "bg-amber-500/10", "bg-red-500/10"];
const borderClasses = ["border-blue-900"]

function applyTile(tileIcon, tileStatus, tileValue, tileBorder, state, valueText) {
  tileStatus.textContent =
    state.charAt(0).toUpperCase() + state.slice(1);

  tileValue.textContent = valueText;

  tileStatus.classList.remove(...textClasses);
  tileIcon.classList.remove("text-green-400", "text-amber-500", "text-red-500");
  tileIcon.classList.remove(...iconBgClasses);
  tileBorder.classList.remove(...borderClasses);

  tileStatus.classList.add(styles[state].text);
  tileIcon.classList.add(styles[state].iconText);
  tileIcon.classList.add(styles[state].iconBg);
  tileBorder.classList.add(styles[state].border);
}


const engineTemp = 95;
const engineState = getEngineStatus(engineTemp);

applyTile(
  engineIcon,
  engineStatus,
  engineValue,
  engineTile,
  engineState,
  `${engineTemp}°C`
);

const batteryVoltage = 12;
const batteryState = getBatteryState(batteryVoltage);

applyTile(
  batteryIcon,
  batteryStatus,
  batteryValue,
  batteryTile,
  batteryState,
  `${batteryVoltage}V`
);

const brakesWear = 68;
const brakesState = getBrakesStatus(brakesWear);
applyTile(
  brakesIcon,
    brakesStatus,
    brakesValue,
    brakesTile,
    brakesState,
    `${brakesWear}%`
);

const electronicsIssues = ["Headlight", "Dashboard"];
const electronicsState = getElectronicsStatus(electronicsIssues);
applyTile(
  electronicsIcon,
  electronicsStatus,
  electronicsValue,
  electronicsTile,
  electronicsState,
  `${electronicsIssues.length}`
);

function getWorstState(states) {
  const rank = { normal: 0, warning: 1, critical: 2 };

  return states.reduce((worst, current) =>
    rank[current] > rank[worst] ? current : worst
  , "normal");
}


const pillTextClasses = ["text-green-400", "text-amber-500", "text-red-500"];
const pillBgClasses = ["bg-green-400/10", "bg-amber-500/10", "bg-red-500/10"];
const pillBorderClasses = [
  "border-green-400/30",
  "border-amber-500/30",
  "border-red-500/30"
];


function applyOverallPill(state) {

  overallTextBox.classList.remove(
    ...pillTextClasses,
    ...pillBgClasses,
    ...pillBorderClasses
  );

  if (state === "normal") {
    overallTextBox.classList.add("hidden");
    return;
  }

  overallTextBox.classList.remove("hidden");

  if (state === "warning") {
    overallTextBox.classList.add(
      "text-amber-500",
      "bg-amber-500/10",
      "border-amber-500/30"
    );
  }

  if (state === "critical") {
    overallTextBox.classList.add(
      "text-red-500",
      "bg-red-500/10",
      "border-red-500/30"
    );
  }
}


const worstState = getWorstState([
  engineState,
    batteryState,
    brakesState,
    electronicsState
]);

applyOverallPill(worstState);
