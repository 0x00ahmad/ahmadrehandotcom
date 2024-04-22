import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const LS_CART_KEY = 'cart';

export type CartItem = {
    id: string | number;
    name: string;
    price: number;
}

export function getCart(): CartItem[] {
    if (!browser) {
        return [];
    }
    const out = localStorage.getItem(LS_CART_KEY);
    return !!out ? JSON.parse(out) : [];
}

export const cart = writable(getCart());

cart.subscribe((val) => {
    if (!browser) {
        return;
    }
    localStorage.setItem(LS_CART_KEY, JSON.stringify(val));
});


export function addToCart(item: CartItem) {
    cart.update((cart) => {
        return [
            ...cart.filter((i) => i.id !== item.id),
            item,
        ]
    });
}

export function removeFromCart(id: string | number) {
    cart.update((items) => {
        return items.filter((i) => i.id !== id);
    });
}

export function clearCart() {
    cart.set([]);
}

