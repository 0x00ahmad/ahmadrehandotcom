import { browser } from '$app/environment';

const LS_CART_KEY = 'cart';

export type CartItem = {
    id: string;
    name: string;
    price: number;
}

export class Cart {
    items: CartItem[] = [];

    constructor() {
        this.items = this.getCart();

    }

    private getCart(): CartItem[] {
        if (!browser) {
            return this.items;
        }
        const out = localStorage.getItem(LS_CART_KEY);
        return (!!out ? JSON.parse(out) : []) as CartItem[];
    };

    addItem(item: CartItem) {
        this.items.push(item);
        localStorage.setItem(LS_CART_KEY, JSON.stringify(this.items));
    }

    removeItem(id: string) {
        this.items = this.items.filter((item) => item.id !== id);
        localStorage.setItem(LS_CART_KEY, JSON.stringify(this.items));
    }

    clear() {
        this.items = [];
        localStorage.removeItem(LS_CART_KEY);
    }
}
