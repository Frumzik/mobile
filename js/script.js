// Получаем модальное окно
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");

// Функция для открытия модального окна
function openModal() {
  modal.style.display = "flex";
}
openModalBtn.addEventListener("click", openModal);
// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
}

// Закрытие окна при нажатии на свободную область (бэкдроп)
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};





async function fetchPlayerCurrency(playerId) {
  try {
      const response = await fetch(`https://your-backend-url/api/currency/${playerId}`);

      if (!response.ok) {
          throw new Error('Ошибка сети');
      }

      const data = await response.json();
      displayCurrency(data);
  } catch (error) {
      console.error('Ошибка при получении данных:', error);
  }
}

function displayCurrency(data) {
  document.getElementById('currency-amount').textContent = data.currencyAmount;
  document.getElementById('dollar-equivalent').textContent = data.dollarEquivalent;
}

// Пример вызова функции для игрока с ID 123
fetchPlayerCurrency(123);


// document.getElementById('withdraw-button').addEventListener('click', function() {
//   const amountInput = document.getElementById('amount-input');
//   const amount = amountInput.value;

//   // Проверка на большое число
//   if (amount > 1000000) { // Задайте нужный лимит
//       alert('Введите разумное число!');
//       amountInput.value = ''; // Очищаем поле
//       return;
//   }

//   // Здесь можно добавить логику для вывода суммы
//   console.log(`Выводим сумму: ${amount}`);
// });

