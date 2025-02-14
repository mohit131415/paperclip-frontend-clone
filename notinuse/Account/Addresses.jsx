'use client'

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchAddresses, deleteAddress } from "@/store/slices/userSlice"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import AddressForm from "notinuse/checkout/AddressForm"
import { Loader } from "@/components/common/Loader"
import { MapPin, Plus, Edit, Trash } from 'lucide-react'
import { Badge } from "@/components/ui/badge" // Import Badge component

export default function AddressesPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { toast } = useToast()
  const [isAddingAddress, setIsAddingAddress] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)
  const { addresses, isLoading } = useSelector((state) => state.user)
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate("/login?redirect=/account/addresses")
      return
    }
    dispatch(fetchAddresses())
  }, [dispatch, navigate, user])

  const handleDeleteAddress = async (addressId) => {
    try {
      await dispatch(deleteAddress(addressId)).unwrap()
      toast({
        title: "Address deleted",
        description: "The address has been removed successfully.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to delete address.",
      })
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Addresses</CardTitle>
              <CardDescription>
                Manage your shipping addresses
              </CardDescription>
            </div>
            <Dialog open={isAddingAddress} onOpenChange={setIsAddingAddress}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Address
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Address</DialogTitle>
                </DialogHeader>
                <AddressForm
                  onSubmit={async (data) => {
                    try {
                      // Handle address submission
                      setIsAddingAddress(false)
                    } catch (error) {
                      toast({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to add address.",
                      })
                    }
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {!addresses?.length ? (
            <div className="text-center py-12">
              <MapPin className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No addresses yet
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Add your first shipping address to get started.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {addresses.map((address) => (
                <div
                  key={address._id}
                  className="relative rounded-lg border p-4"
                >
                  {address.isDefault && (
                    <Badge className="absolute right-4 top-4">Default</Badge>
                  )}
                  <div className="space-y-2">
                    <p className="font-medium">{address.fullName}</p>
                    <p className="text-sm text-gray-500">
                      {address.street}
                      <br />
                      {address.city}, {address.state} {address.pincode}
                      <br />
                      Phone: {address.phone}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingAddress(address)}
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteAddress(address._id)}
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={!!editingAddress} onOpenChange={() => setEditingAddress(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Address</DialogTitle>
          </DialogHeader>
          {editingAddress && (
            <AddressForm
              defaultValues={editingAddress}
              onSubmit={async (data) => {
                try {
                  // Handle address update
                  setEditingAddress(null)
                } catch (error) {
                  toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Failed to update address.",
                  })
                }
              }}
              isEdit
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
