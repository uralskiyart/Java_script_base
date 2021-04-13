// 4*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 4.1. Создать массив товаров (сущность Product);
// 4.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

// 'use strict';

// const catalogItem = {
//     render(product) {
//         return `<div class="product">
//                     <div><b>Категория</b>: ${product.category}</div>
//                     <div><b>ID продукта</b>: ${product.id_product}</div>
//                     <div><b>Наименование</b>: ${product.product_name}</div>
//                     <div><b>Цена за шт.</b>: ${product.price}</div>
//                     <div><b>Количество на складе</b>: ${product.quantity}</div>
//                 </div>`;
//     },
// }

// const catalog = {
//     catalogItem,
//     catalogListBlock: null,
//     productCatalog: [
//         {
//             category: 'Ноутбуки',
//             id_product: 123,
//             product_name: 'Ноутбук',
//             price: 45600,
//             quantity: 6,
//         },
//         {
//             category: 'Аксессуары',
//             id_product: 456,
//             product_name: 'Мышка',
//             price: 1000,
//             quantity: 155,
//         },
//         {
//             category: 'Аксессуары',
//             id_product: 305,
//             product_name: 'Клавиатура',
//             price: 2000,
//             quantity: 66,
//         },
//     ],

//     init() {
//         this.catalogListBlock = document.querySelector('.catalog-list');

//         this.render();
//     },

//     render() {

//         this.productCatalog.forEach(product => {
//             this.cartListBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(product));
//         });

//     },

// };
