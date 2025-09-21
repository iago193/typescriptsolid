type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = "Open" | "Closed";

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "Open";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  total(): number {
    return Number(
      this._items.reduce((total, next) => total + next.price, 0).toFixed(2)
    );
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinho está vazio.");
      return;
    }

    this._orderStatus = "Closed";
    this.sendMessage("seu pedido foi recebido com sucesso!.");
    this.saveOrder();
    this.clear();
  }

  sendMessage(messege: string): void {
    console.log(`Mensagem enviada: ${messege}`);
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso...");
  }

  clear(): void {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get items(): readonly CartItem[] {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingItemLegacy = new ShoppingCartLegacy();
shoppingItemLegacy.addItem({ name: "Tv", price: 1405.55 });
shoppingItemLegacy.addItem({ name: "Celular", price: 1100.05 });
shoppingItemLegacy.addItem({ name: "Notebook", price: 2000.05 });

console.log(shoppingItemLegacy.items);
console.log(shoppingItemLegacy.orderStatus);
console.log(shoppingItemLegacy.total());

shoppingItemLegacy.checkout();

console.log(shoppingItemLegacy.orderStatus);
