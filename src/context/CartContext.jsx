'use client';

import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, quantity, selectedColor) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.color.name === selectedColor.name
      )

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.color.name === selectedColor.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        color: selectedColor,
        quantity
      }]
    })
  }

  const removeFromCart = (productId, color) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === productId && item.color.name === color))
    )
  }

  const updateQuantity = (productId, color, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.color.name === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
