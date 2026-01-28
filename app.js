const toggle = document.querySelector("#toggle")
const root = document.documentElement

// Restore saved preference
if (localStorage.getItem("dark") === "true") {
  root.classList.add("dark")
  toggle.checked = true
}

// Toggle dark mode
toggle.addEventListener("change", () => {
  root.classList.toggle("dark")
  localStorage.setItem("dark", toggle.checked)
})
