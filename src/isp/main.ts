import { Message } from "./services/message.ts";
import { Order } from "./entities/order.ts";
import { Persistency } from "./services/persistency.ts";
import { Product } from "./entities/product.ts";
import { ShoppingCart } from "./entities/shopping-cart.ts";

const shoppingItem = new ShoppingCart();
const message = new Message();
const persistency = new Persistency();

const order = new Order(shoppingItem, message, persistency);

shoppingItem.addItem(new Product("Tv", 1405.55));
shoppingItem.addItem(new Product("Celular", 1100.05));
shoppingItem.addItem(new Product("Notebook", 2000.05 ));

console.log(shoppingItem.items);
console.log(order.orderStatus);
console.log(shoppingItem.total());

shoppingItem.discount = 0.5;

console.log(shoppingItem.totalWithDiscount());

order.checkout();

console.log(order.orderStatus);