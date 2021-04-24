// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

'use strict';

let product_1 = {
    'id': '1',
    'name': 'гитара',
    'price': 2000,
};

let product_2 = {
    'id': '2',
    'name': 'бубен',
    'price': 400,
};

let basket = {
    goods: [
        {
            product: product_1,
            quantity: 2,
        },
        {
            product: product_2,
            quantity: 3,
        }
    ],

    totalPrice() {
        return this.goods.reduce((total, currentItem) => total + currentItem.product.price * currentItem.quantity, 0);
    },
};

console.log(basket.totalPrice());
