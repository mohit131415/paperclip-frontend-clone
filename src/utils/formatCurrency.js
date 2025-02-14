const CURRENCY_FORMATTER = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  
  export const formatCurrency = (amount) => {
    return CURRENCY_FORMATTER.format(amount)
  }
  
  export const formatPrice = (price, options = {}) => {
    const { showSymbol = true, showDecimals = true } = options
  
    if (typeof price !== "number") {
      return showSymbol ? "₹0" : "0"
    }
  
    const formattedPrice = showDecimals ? price.toFixed(2) : Math.round(price).toString()
    const [wholePart, decimalPart] = formattedPrice.split(".")
  
    // Add thousand separators
    const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
    // Combine parts
    let result = formattedWholePart
    if (showDecimals && decimalPart) {
      result += `.${decimalPart}`
    }
  
    return showSymbol ? `₹${result}` : result
  }
  
  export const calculateDiscount = (originalPrice, discountedPrice) => {
    if (!originalPrice || !discountedPrice) return 0
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
  }
  
  export const calculateTax = (amount, rate = 0.18) => {
    return amount * rate
  }
  
  export const calculateTotal = (items, options = {}) => {
    const { includeShipping = true, includeTax = true } = options
  
    const subtotal = items.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  
    const tax = includeTax ? calculateTax(subtotal) : 0
    const shipping = includeShipping ? (subtotal >= 1000 ? 0 : 100) : 0
  
    return {
      subtotal,
      tax,
      shipping,
      total: subtotal + tax + shipping,
    }
  }
  
  export const formatDiscountedPrice = (price, discount) => {
    if (!price || !discount) return formatPrice(price)
    const discountedPrice = price - (price * discount) / 100
    return formatPrice(discountedPrice)
  }
  
  export const parsePrice = (priceString) => {
    if (typeof priceString !== "string") return 0
    return parseFloat(priceString.replace(/[^\d.-]/g, "")) || 0
  }
  