import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children } : ShoppingCartProviderProps) {
    const [cartItems, SetCartItems] = useState<CartItem[]>([])

    function increaseCartQuantity(id: number) {
        SetCartItems(currItems => {
            if (currItems.find(item => item.id ===id) == null) {
                return [...currItems, { id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    
    function decreaseCartQuantity(id: number) {
        SetCartItems(currItems => {
            if (currItems.find(item => item.id ===id) == null) {
                return [...currItems, { id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function getItemQuantity(id: number) {
        return (
            cartItems.find(item => item.id === id)?.quantity || 0
        )
    }


    return (
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}