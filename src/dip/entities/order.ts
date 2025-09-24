import type { OrderStatus } from "./interfaces/order-status.ts";
import { ShoppingCart } from "./shopping-cart.ts";
import { Message } from "../services/message.ts";
import type { Persistency } from "../services/persistency.ts";

export class Order {
  private _orderStatus: OrderStatus = "Open";

  private readonly cart: ShoppingCart;
  private readonly message: Message;
  private readonly persistency: Persistency;

  constructor(cart: ShoppingCart, message: Message, persistency: Persistency) {
    this.cart = cart;
    this.message = message;
    this.persistency = persistency;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho está vazio.");
      return;
    }

    this._orderStatus = "Closed";
    this.message.sendMessage("seu pedido foi recebido com sucesso!.");
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
