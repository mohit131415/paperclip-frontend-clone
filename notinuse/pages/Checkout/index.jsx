"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchCart } from "@/store/slices/cartSlice"
import { createOrder } from "@/store/slices/orderSlice"
import AddressForm from "notinuse/checkout/AddressForm"
import PaymentForm from "notinuse/checkout/PaymentForm"
import OrderSummary from "notinuse/checkout/OrderSummary"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Loader } from "@/components/common/Loader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Steps, StepsContent, StepsItem, StepsPanel } from "@/components/ui/steps"

export default function CheckoutPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState(0)
  const [shippingAddress, setShippingAddress] = useState(null)
  const { items, isLoading } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate("/login?redirect=/checkout")
      return
    }
    dispatch(fetchCart())
  }, [dispatch, navigate, user])

  useEffect(() => {
    if (!isLoading && !items?.length) {
      navigate("/cart")
    }
  }, [items, isLoading, navigate])

  const handleAddressSubmit = (data) => {
    setShippingAddress(data)
    setCurrentStep(1)
  }

  const handlePaymentSubmit = async (paymentData) => {
    try {
      const orderData = {
        shippingAddress,
        paymentMethod: paymentData.paymentMethod,
        items: items.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
          customization: item.customization,
        })),
      }

      await dispatch(createOrder(orderData)).unwrap()
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase.",
      })
      navigate("/orders")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to place order. Please try again.",
      })
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Checkout</CardTitle>
              <CardDescription>Complete your purchase by following these steps</CardDescription>
            </CardHeader>
            <CardContent>
              <Steps value={currentStep} onChange={setCurrentStep}>
                <StepsContent>
                  <StepsItem value={0} title="Shipping">
                    <StepsPanel>
                      <AddressForm onSubmit={handleAddressSubmit} />
                    </StepsPanel>
                  </StepsItem>
                  <StepsItem value={1} title="Payment">
                    <StepsPanel>
                      <PaymentForm onSubmit={handlePaymentSubmit} />
                      <div className="mt-4">
                        <Button variant="outline" onClick={() => setCurrentStep(0)}>
                          Back to shipping
                        </Button>
                      </div>
                    </StepsPanel>
                  </StepsItem>
                </StepsContent>
              </Steps>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 lg:col-span-4 lg:mt-0">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

