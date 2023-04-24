let inchesInput = document.getElementById("Js-inches");
let cenInput = document.getElementById("Js-cen");
let clearBtn = document.getElementById("clear");
let goodJob = document.getElementById("good-job");

clearBtn.addEventListener("click", () => {
  cenInput.value = "";
  inchesInput.value = "";
  goodJob.textContent = "";
});

inchesInput.addEventListener("input", () => {
  cenInput.value = inchesInput.value * 2.54;
  goodJob.textContent = "Good Job!";
});

cenInput.addEventListener("input", () => {
  inchesInput.value = cenInput.value / 2.54;
  goodJob.value = "Good Job!";
});
