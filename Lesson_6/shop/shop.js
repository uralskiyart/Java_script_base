'use strict'

/**
 * каталог товаров
 * @param catalogState - состояние каталога может быть [category, products, empty]
 */
const catalog = {
    catalogBlock: null,
    catalogBtn: null,
    catalogState: 'empty',
    cart: null,
    categoriesList: [],
    productsList: [
        {
            category: 'Ноутбуки',
            id_product: 123,
            product_name: 'Ноутбук ACER',
            price: 45600,
            storehouse: 6,
        },
        {
            category: 'Аксессуары',
            id_product: 133,
            product_name: 'Мышка RAZER',
            price: 1000,
            storehouse: 155,
        },
        {
            category: 'Аксессуары',
            id_product: 143,
            product_name: 'Клавиатура CANYON',
            price: 2000,
            storehouse: 66,
        },
        {
            category: 'Аксессуары',
            id_product: 144,
            product_name: 'Клавиатура Logitec',
            price: 800,
            storehouse: 2,
        },
        {
            category: 'Видеокарты',
            id_product: 305,
            product_name: 'Видеокарта Nvidia',
            price: 64000,
            storehouse: 2,
        },
    ],

    /**
    * Инициальзация каталога.
    * @param catalogBlockClass - класс блока каталога
    * @param cart - корзина
    */
    init(catalogBlockClass) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
    },

    /**
    * Рендер каталога
    */
    render() {
        if (this.getCatalogListLength() > 0) {
            this.categoriesList = this.getCategoryList(this.categoriesList);
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    /**
  * Метод получения количества товаров в каталоге
  * @returns {number}
  */
    getCatalogListLength() {
        return this.productsList.length;
    },

    /**
    * Метод получения массива названий категорий товаров
    * @returns {Array}
    */
    getCategoryList(categoriesList) {
        this.productsList.forEach(item => {
            if (!categoriesList.includes(item.category)) {
                categoriesList.push(item.category);
            }
        });
        return categoriesList;
    },

    /**
     * 
     * @param {*} div 
     */
    catalogBlockCleaner(div) {
        while (div.firstChild) {
            div.removeChild(div.firstChild);

        }
    },

    /**
     * Добавляем селекторы ро текущему состоянию каталога
     */
    addSelectors(catalogState) {
        switch (catalogState) {
            case 'category':
                this.catalogBtn = document.querySelectorAll(`.category-btn`);
                this.addEventHandlerCategory(this.catalogBtn);
                break;
            case 'products':
                this.catalogBtn = document.querySelector(`.back-btn`);
                console.log(this.catalogBtn);
                this.addEventHandlerBack(this.catalogBtn);
                this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
                break;
            default:
                console.log('default');
        }
    },


    /**
     * Добавляем обработку событий когда состояние католога меняется на category
     */
    addEventHandlerCategory(selector) {
        selector.forEach(btn => {
            btn.addEventListener('click', event => this.chooseCategory(event));
        });
    },

    /**
     * Добавляем обработку событий для кнопки назад
     */
    addEventHandlerBack(selector) {
        selector.addEventListener('click', () => this.renderCatalogList());
    },

    /**
     * Метод ототрытия каталога товаров по категории
     */
    chooseCategory(event) {
        if (!event.target.classList.contains('category-btn')) return;
        const category = event.target.dataset.category;
        this.renderProductsCategoryList(category);
    },

    /**
     * Метод добавления в корзину
     */
    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const idProduct = +event.target.dataset.id_product;
        const productToAdd = this.productsList.find((product) => product.id_product === idProduct);
        if (productToAdd.storehouse >= 1) {
            productToAdd.storehouse--;
            this.renderProductsCategoryList(productToAdd.category);
            this.cart.addToBasket(productToAdd);
        } else {
            alert('Товар кончился')
        }
    },

    /**
    * Вернуть товар на витрину 
    */
    ReturnToShowcase(product) {
        if (product) {
            const findInList = this.productsList.find(({ id_product }) => product.id_product === id_product);
            if (findInList) {
                findInList.storehouse++;
            } else {
                this.goods.push({ ...product, storehouse: 1 });
                // this.goods.push(Object.assign({quantity: 1}, product));
            }
        }
    },


    /**
    * Рендер пустого каталога
    */
    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст';
        this.catalogState = 'empty';
    },


    /**
     * Рендер списка категорий товаров
     */
    renderCatalogList() {
        this.catalogBlockCleaner(this.catalogBlock);
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.innerHTML = 'Категории товаров';
        this.categoriesList.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item))
        });
        this.catalogState = 'category';
        this.addSelectors(this.catalogState);
    },

    renderCatalogItem(item) {
        return `<button
    class="category-btn"
    data-category="${item}" >
    ${item} </button > `;
    },

    /**
    * Рендер списка товаров
    */
    renderProductsCategoryList(category) {
        this.catalogBlockCleaner(this.catalogBlock);
        this.catalogBlock.insertAdjacentHTML('afterbegin', this.renderBackBtn());
        this.productsList.forEach(item => {
            if (item.category === category) {
                this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCategoryItem(item));
            }
        });
        this.catalogState = 'products';
        this.addSelectors(this.catalogState);
    },


    renderBackBtn() {
        return `<button class="back-btn"> Назад </button >`;
    },

    renderCategoryItem(item) {
        return `<div class="product">
        <h4>${item.product_name}</h4>
        <p>${item.price} руб.</p> 
        <p>${item.storehouse} штук осталось</p>
        <button
        class="product__add-to-cart"
        data-id_product="${item.id_product}">
        В корзину</button>
        </div>`;
    },

};



/**
 *  Объект корзины
 */
const cart = {
    cartBlock: null,
    clrCartButton: null,
    minusPieceBtn: null,
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 2,
        },
    ],

    /**
     * Метод инициальзации корзины
     * @param cartBlockClass - класс блока корзины
     * @param clrCartButton - класс кнопки очистки корзины
     */
    init(cartBlockClass) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.render();
        this.cartBlock.insertAdjacentHTML('beforeend', this.renderClearBtn());
        this.clrCartButton = document.querySelector(`.clr-cart`);
        this.addClrCartHandler();
    },

    /**
     * Метод установки обработчиков событий
     */
    addClrCartHandler() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    /**
     * Обработчик удаления одной штуки товара
     */
    addMinusPieceHandler() {
        console.log('ff');
        this.minusPieceBtn.addEventListener('click', event => this.minusPiece(event));
    },

    /**
     * Метод очистки корзины
     */
    dropCart() {
        this.goods = [];
        this.render();
    },

    /**
     * Рендер корзины
     */
    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    /**
     * Вычесть -1 шт товара
     */
    minusPiece(event) {
        console.log(+event.target.dataset.id_product);
        const idProduct = +event.target.dataset.id_product;
        const productToMinus = this.goods.find((product) => product.id_product === idProduct);
        if (productToMinus.quantity >= 1) {
            productToAdd.quantity--;
            this.render();
            this.catalog.ReturnToShowcase(productToAdd);
        } else {
            this.render();
        }
    },


    /**
     * Добавить товар
     */
    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find(({ id_product }) => product.id_product === id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({ ...product, quantity: 1 });
                // this.goods.push(Object.assign({quantity: 1}, product));
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    /**
     * Получение количества товаров в корзине
     * @returns {number}
     */
    getCartGoodsLength() {
        return this.goods.length;
    },

    /**
     * Рендер пустой корзины
     */
    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    /**
     * Рендер списка товаров в корзине
     */
    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
            this.minusPieceBtn = document.querySelector(`.minus-piece`);
            this.addMinusPieceHandler();
        });
    },

    /**
     * Возращает кнопку очистки корзины
     */
    renderClearBtn() {
        return `<button class="clr-cart"> Очистить полностью </button >`;
    },

    /**
     * Рендер отдельного товара в корзине
     * @param item - товар
     * @returns {string} - сгененрированая строка разметки
     */
    renderCartItem(item) {
        return `<div class='good'>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
                <button
                class="minus-piece"
                data-id_product="${item.id_product}">
                Удалить из корзины </button>
            </div>`;
    },
};

/**
 * Подключение каталога и корзины
 */
catalog.init('catalog', cart);
cart.init('cart-list');
