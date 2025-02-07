const BOT_TOKEN = "7288186926:AAGVvGroGgjW5XgmS_Ult_GR6ZIc18gOQZw";  // 🔥 Замени на свой токен
const CHAT_ID = "729406890";      // 🔥 Замени на свой chat_id

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



// Объект для хранения данных пользователя
let userData = {
  name: "",
  age: "",
  gender: "male", // Значение по умолчанию
  sleepTime: "",
  wakeTime: "",
  sleepHours: "",
  sleepProblems: ""
};

// Сохранение имени
document.getElementById("name").addEventListener("input", function () {
  userData.name = this.value;
});

// Сохранение возраста
document.getElementById("age").addEventListener("input", function () {
  userData.age = this.value;
});

// Сохранение пола
document.getElementById("gender").addEventListener("change", function () {
  userData.gender = this.value;
});

// Сохранение времени отхода ко сну
document.getElementById("sleep-time").addEventListener("input", function () {
  userData.sleepTime = this.value;
});

// Сохранение времени пробуждения
document.getElementById("wake-time").addEventListener("input", function () {
  userData.wakeTime = this.value;
});

// Сохранение среднего количества сна
document.getElementById("sleep-hours").addEventListener("input", function () {
  userData.sleepHours = this.value;
});

// Сохранение проблем со сном
document.getElementById("sleep-problems").addEventListener("input", function () {
  userData.sleepProblems = this.value;
});

// Функция отправки данных в Telegram
function sendToTelegram() {
  const message = `📝 *Новая регистрация*\n\n` +
                  `👤 *Имя:* ${userData.name}\n` +
                  `🎂 *Возраст:* ${userData.age}\n` +
                  `⚧ *Пол:* ${userData.gender}\n` +
                  `🌙 *Время сна:* ${userData.sleepTime}\n` +
                  `☀️ *Время пробуждения:* ${userData.wakeTime}\n` +
                  `⏳ *Среднее количество сна:* ${userData.sleepHours} часов\n` +
                  `😴 *Проблемы со сном:* ${userData.sleepProblems || "Нет"}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const params = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "Markdown"
  };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  }).then(response => {
    if (response.ok) {
      alert("✅ Данные успешно отправлены!");
    } else {
      alert("❌ Ошибка при отправке данных!");
    }
  });
}

// Добавляем обработчик события для кнопки отправки
document.getElementById("send-btn").addEventListener("click", sendToTelegram);
