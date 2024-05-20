function scrollToKataterings() {
    window.scrollTo(0,document.body.scrollHeight);

    var element = document.getElementsByClassName('katering-box');
    element.scrollIntoView({ behavior: 'smooth' });
}


function scrollToBottom() {
    window.scrollTo(0,document.body.scrollHeight);

    var element = document.getElementsByClassName('policy-confidense_container');
    element.scrollIntoView({ behavior: 'smooth' });
}


//reservation
document.addEventListener("DOMContentLoaded", function() {
    var reservationForm = document.getElementById("reservation-form");
    
    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var table = document.getElementById("table").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;
        var number = document.getElementById("number").value;

        // Вместо этого кода можно отправить данные на сервер для обработки
        alert("Вы успешно забронировали столик:\nМесто: " + table + "\nДата: " + date + "\nВремя: " + time + "\nЧеловек: " + number);
        
        // Очистить форму после бронирования
        reservationForm.reset();
    });
});

function showObject(objectId) {
    // Скрыть все объекты
    var objects = document.querySelectorAll('[id^="object"]');
    objects.forEach(function(object) {
        object.style.display = 'none';
    });

    // Показать только выбранный объект
    var selectedObject = document.getElementById(objectId);
    if (selectedObject) {
        selectedObject.style.display = 'block';
    }
}

document.getElementById('claim-offer').addEventListener('click', function() {
    alert('Специальное предложение акцию получено! Оставайтесь, Наслаждайтесь со скидкой.');
    showPricesWithSale(); // Вызываем функцию для показа цен после нажатия на кнопку
});

function showPricesWithSale() {
    var prices = document.querySelectorAll('.price-spacial-sale');
    prices.forEach(function(price) {
        price.style.display = 'inline'; // Показываем цену
    });
}



// Счетчик меню
document.addEventListener("DOMContentLoaded", function() {
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', addToOrder);
    });
});

let orderItems = [];
let totalAmount = 0;

function addToOrder(event) {
    const menuItem = event.target.closest('.menu-cards');
    const name = menuItem.dataset.name;
    const price = parseFloat(menuItem.dataset.price);

    orderItems.push({ name, price });
    totalAmount += price;

    updateOrderSummary();
}


function updateOrderSummary() {
    const orderSummaryElement = document.getElementById('order-summary');
    orderSummaryElement.innerHTML = '';
    orderItems.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - ${item.price} cом`;
        orderSummaryElement.appendChild(itemElement);
    });
    const totalElement = document.createElement('p');
    totalElement.textContent = `Общая сумма заказа: ${totalAmount} cом`;
    orderSummaryElement.appendChild(totalElement);
}


function scrollToContact() {
    // Получаем целевую секцию
    var targetSection = document.getElementById("contact-page");
    
    // Вычисляем расстояние до верхней границы целевой секции
    var offsetTop = targetSection.offsetTop;
    
    // Прокручиваем страницу до этой позиции
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Плавная прокрутка
    });
}


function scrollToReservation() {
    // Получаем целевую секцию
    var targetSection = document.getElementById("reservation-box");
    
    // Вычисляем расстояние до верхней границы целевой секции
    var offsetTop = targetSection.offsetTop;
    
    // Прокручиваем страницу до этой позиции
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Плавная прокрутка
    });
}



function goToContactFromPage2() {
    window.location.href = 'index.html#info-page_header';
}


function scrollToContact1() {
    window.location.href = 'index.html#contact-page';
}



function goToContactFromPagee2() {
    window.location.href = 'index.html#info-page_header';
}


function goToSale() {
    window.location.href = 'index.html#sale-container';
}


