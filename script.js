function showPage(pageNum) {
  document.querySelectorAll(".form-page").forEach(div => div.classList.add("hidden"));
  document.getElementById("page" + pageNum).classList.remove("hidden");
}

function next(pageNum) {
  saveFormData();
  showPage(pageNum);
}

function prev(pageNum) {
  saveFormData();
  showPage(pageNum);
}

function finish() {
  saveFormData();
  window.location.href = "final.html"; // Go to yellow sheet
}

function saveFormData() {
  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach(input => {
    localStorage.setItem(input.id, input.value);
  });
}

function loadFormData() {
  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach(input => {
    if (localStorage.getItem(input.id)) {
      input.value = localStorage.getItem(input.id);
    }
  });
}

window.onload = loadFormData;
