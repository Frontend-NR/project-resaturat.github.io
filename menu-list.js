// Функция для добавления в корзину
let totalPrice = 0;
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    // Функция для добавления в корзину
    function addToCart(name, price) {
        const li = document.createElement('li');
        li.textContent = `${name} - ${price} cом`;
        cartItems.appendChild(li);
        
        totalPrice += price;
        totalDisplay.textContent = `Общая сумма: ${totalPrice} cом`;
        

        saveCart();

        var message = "Заказ: " + name + ", Цена: " + price + " cом";
        var telegramUrl = "https://api.telegram.org/bot6990907487:AAFeYna0YyISuM9PgM8_aDINCU5WOHm-9Ec/sendMessage?chat_id=2128502507&text=" + encodeURIComponent(message);

        var xhr = new XMLHttpRequest();
        xhr.open("GET", telegramUrl, true);
        xhr.send();

    
        
        
    }
    
    // Функция для загрузки корзины
    function loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cartItems.innerHTML = savedCart;
            calculateTotalPrice();
        }
        
    }
    
    // Функция для сохранения корзины в localStorage
    function saveCart() {
        localStorage.setItem('cart', cartItems.innerHTML);
        
    }
    
    // Функция для подсчета общей суммы
    function calculateTotalPrice() {
        const items = cartItems.querySelectorAll('li');
        totalPrice = 0;
        items.forEach(item => {
            const price = parseInt(item.textContent.split(' - ')[1]);
            totalPrice += price;
        });
        totalDisplay.textContent = `Общая сумма: ${totalPrice} cом`;
        
    }
    
    // Загрузка корзины при загрузке страницы
    


    function clearCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = ''; // Удаляем все элементы из списка заказа
    
        const totalDisplay = document.getElementById('total-price');
        totalDisplay.innerHTML = ''; // Обнуляем общую сумму
    }


$(document).ready(function(){
    $('.interior-img-box').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<div class="left-scroll"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/></svg></div>',
        nextArrow: '<div class="right-scroll"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/></svg></div>',
        draggable: true,
        swipe: true,
        touchMove: true
    });
});
