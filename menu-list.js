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