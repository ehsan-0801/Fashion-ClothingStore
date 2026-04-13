'use client'

import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'

interface FilterState {
  categories: string[]
  priceRange: [number, number]
  colors: string[]
  sizes: string[]
}

const initialFilters: FilterState = {
  categories: [],
  priceRange: [0, 10000],
  colors: [],
  sizes: [],
}

const categories = [
  { id: 'dresses', label: 'ড্রেস' },
  { id: 'sarees', label: 'শাড়ি' },
  { id: 'tops', label: 'টপস' },
  { id: 'bottoms', label: 'নিচের পোশাক' },
  { id: 'traditional', label: 'ঐতিহ্যবাহী' },
]

const colors = [
  { id: 'pink', label: 'গোলাপি', color: 'bg-pink-500' },
  { id: 'magenta', label: 'ম্যাজেন্টা', color: 'bg-purple-600' },
  { id: 'white', label: 'সাদা', color: 'bg-white border border-border' },
  { id: 'black', label: 'কালো', color: 'bg-black' },
  { id: 'cream', label: 'ক্রিম', color: 'bg-amber-100 border border-border' },
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export default function ShopFilters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    color: true,
    size: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCategoryChange = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(c => c !== categoryId)
        : [...prev.categories, categoryId]
    }))
  }

  const handleColorChange = (colorId: string) => {
    setFilters(prev => ({
      ...prev,
      colors: prev.colors.includes(colorId)
        ? prev.colors.filter(c => c !== colorId)
        : [...prev.colors, colorId]
    }))
  }

  const handleSizeChange = (size: string) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }))
  }

  const handlePriceChange = (value: number, index: number) => {
    const newRange: [number, number] = [...filters.priceRange] as [number, number]
    newRange[index] = value
    if (newRange[0] <= newRange[1]) {
      setFilters(prev => ({
        ...prev,
        priceRange: newRange
      }))
    }
  }

  const resetFilters = () => {
    setFilters(initialFilters)
  }

  const activeFilterCount = filters.categories.length + filters.colors.length + filters.sizes.length

  return (
    <div className="space-y-6">
      {/* Reset Filters Button */}
      {activeFilterCount > 0 && (
        <button
          onClick={resetFilters}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
        >
          <X size={16} />
          ফিল্টার রিসেট করুন ({activeFilterCount})
        </button>
      )}

      {/* Category Filter */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <button
          onClick={() => toggleSection('category')}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary transition-colors"
        >
          <h3 className="font-semibold text-foreground">বিভাগ</h3>
          <ChevronDown
            size={20}
            className={`transition-transform ${expandedSections.category ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.category && (
          <div className="border-t border-border p-4 space-y-3">
            {categories.map(cat => (
              <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.id)}
                  onChange={() => handleCategoryChange(cat.id)}
                  className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {cat.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary transition-colors"
        >
          <h3 className="font-semibold text-foreground">মূল্য পরিসীমা</h3>
          <ChevronDown
            size={20}
            className={`transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.price && (
          <div className="border-t border-border p-4 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">ন্যূনতম</span>
                <span className="font-semibold text-primary">৳{filters.priceRange[0]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
                className="w-full accent-primary"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">সর্বোচ্চ</span>
                <span className="font-semibold text-primary">৳{filters.priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
                className="w-full accent-primary"
              />
            </div>
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <button
          onClick={() => toggleSection('color')}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary transition-colors"
        >
          <h3 className="font-semibold text-foreground">রঙ</h3>
          <ChevronDown
            size={20}
            className={`transition-transform ${expandedSections.color ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.color && (
          <div className="border-t border-border p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {colors.map(c => (
                <button
                  key={c.id}
                  onClick={() => handleColorChange(c.id)}
                  className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all ${
                    filters.colors.includes(c.id)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full ${c.color}`}></div>
                  <span className="text-sm text-foreground">{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <button
          onClick={() => toggleSection('size')}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary transition-colors"
        >
          <h3 className="font-semibold text-foreground">সাইজ</h3>
          <ChevronDown
            size={20}
            className={`transition-transform ${expandedSections.size ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.size && (
          <div className="border-t border-border p-4 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`py-2 px-3 rounded-lg border-2 font-medium transition-all ${
                    filters.sizes.includes(size)
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:border-primary text-foreground'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
