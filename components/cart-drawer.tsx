'use client'

import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from '@/components/ui/drawer'

interface CartItem {
  id: number
  name: string
  bangla: string
  price: number
  image: string
  quantity: number
  size?: string
}

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  // Mock cart items - in real app, this would come from state management
  const cartItems: CartItem[] = []

  const updateQuantity = (id: number, delta: number) => {
    // Implementation would update cart state
    console.log('Update quantity', id, delta)
  }

  const removeItem = (id: number) => {
    // Implementation would remove from cart
    console.log('Remove item', id)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 100 : 0
  const total = subtotal + shipping

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="h-full w-[400px] max-w-[90vw]">
        {/* Header */}
        <DrawerHeader className="border-b border-border flex-row items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-primary" size={24} />
            <div>
              <DrawerTitle className="text-xl">আপনার কার্ট</DrawerTitle>
              <DrawerDescription className="text-sm">
                {cartItems.length} টি পণ্য
              </DrawerDescription>
            </div>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </DrawerHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={40} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                আপনার কার্ট খালি
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                শপিং শুরু করতে পণ্য যোগ করুন
              </p>
              <Button
                onClick={() => onOpenChange(false)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                শপিং চালিয়ে যান
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-secondary shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm truncate">
                      {item.bangla}
                    </h4>
                    {item.size && (
                      <p className="text-xs text-muted-foreground mt-1">
                        সাইজ: {item.size}
                      </p>
                    )}
                    <p className="text-primary font-bold mt-2">
                      ৳{item.price.toLocaleString('bn-BD')}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-full border border-border hover:bg-secondary flex items-center justify-center transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-medium text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-full border border-border hover:bg-secondary flex items-center justify-center transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors self-start"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Totals */}
        {cartItems.length > 0 && (
          <DrawerFooter className="border-t border-border p-6 space-y-4">
            {/* Price Breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">সাবটোটাল</span>
                <span className="font-medium">৳{subtotal.toLocaleString('bn-BD')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">ডেলিভারি চার্জ</span>
                <span className="font-medium">৳{shipping.toLocaleString('bn-BD')}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                <span>মোট</span>
                <span className="text-primary">৳{total.toLocaleString('bn-BD')}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-base font-semibold"
            >
              চেকআউট করুন
            </Button>

            {/* Free Shipping Notice */}
            {subtotal < 2000 && subtotal > 0 && (
              <p className="text-xs text-center text-muted-foreground">
                আরও ৳{(2000 - subtotal).toLocaleString('bn-BD')} কিনুন এবং ফ্রি ডেলিভারি পান!
              </p>
            )}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
