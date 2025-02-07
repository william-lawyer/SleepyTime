// Функции для переключения между этапами
function nextStep(currentStep) {
  const currentSection = document.getElementById(`step-${currentStep}`);
  const nextSection = document.getElementById(`step-${currentStep + 1}`);

  currentSection.classList.remove('active');
  nextSection.classList.add('active');
}

function prevStep(currentStep) {
  const currentSection = document.getElementById(`step-${currentStep}`);
  const prevSection = document.getElementById(`step-${currentStep - 1}`);

  currentSection.classList.remove('active');
  prevSection.classList.add('active');
}

// Активируем первый шаг при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('step-1').classList.add('active');
});

document.querySelectorAll(".gender-option").forEach(option => {
  option.addEventListener("click", function () {
    document.querySelectorAll(".gender-option").forEach(opt => opt.classList.remove("selected"));
    this.classList.add("selected");
  });
});

let userData = {
  name: "",
  age: "",
  gender: "male" // Значение по умолчанию
};

// Сохранение имени
document.getElementById("name").addEventListener("input", function () {
  userData.name = this.value;
  console.log(userData);
});

// Сохранение возраста
document.getElementById("age").addEventListener("input", function () {
  userData.age = this.value;
  console.log(userData);
});

// Сохранение пола
document.getElementById("gender").addEventListener("change", function () {
  userData.gender = this.value;
  console.log(userData);
});

// Сохранение времени отхода ко сну
document.getElementById("sleep-time").addEventListener("input", function () {
  userData.sleepTime = this.value;
  console.log(userData);
});

// Сохранение времени пробуждения
document.getElementById("wake-time").addEventListener("input", function () {
  userData.wakeTime = this.value;
  console.log(userData);
});
