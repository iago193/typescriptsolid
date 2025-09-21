import type { CartItem } from "./interfaces/cart-item.ts";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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

  clear(): void {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get items(): readonly CartItem[] {
    return this._items;
  }
}
