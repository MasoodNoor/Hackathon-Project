
"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/app/components/productCard"
import { getProducts } from "@/sanity/lib/getProducts"
import { Button } from "../components/ui/button"

interface Product {
  id: string
  name: string
  description?: string
  category: string
  capacity: string
  price: number
  imageSrc: string
  slug: string
  stock: number
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [sortBy, setSortBy] = useState<string>("default")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedCapacity, setSelectedCapacity] = useState<string>("")
  const [categories, setCategories] = useState<string[]>([])
  const [capacities, setCapacities] = useState<string[]>([])

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts()
      setProducts(data)
      setFilteredProducts(data)

      // Extract unique categories and capacities
      const uniqueCategories = Array.from(new Set(data.map((product: { category: any }) => product.category))) as string[]
      const uniqueCapacities = Array.from(new Set(data.map((product: { capacity: any }) => product.capacity))) as string[]

      setCategories(uniqueCategories)
      setCapacities(uniqueCapacities)
    }
    fetchData()
  }, [])

  // Filtering & Sorting
  useEffect(() => {
    let updatedProducts = [...products]

    if (selectedCategory) {
      updatedProducts = updatedProducts.filter((product) => product.category === selectedCategory)
    }

    if (selectedCapacity) {
      updatedProducts = updatedProducts.filter((product) => product.capacity === selectedCapacity)
    }

    if (sortBy === "low-high") {
      updatedProducts.sort((a, b) => a.price - b.price)
    } else if (sortBy === "high-low") {
      updatedProducts.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(updatedProducts)
  }, [sortBy, selectedCategory, selectedCapacity, products])

  const clearFilters = () => {
    setSortBy("default")
    setSelectedCategory("")
    setSelectedCapacity("")
    setFilteredProducts(products)
  }

  return (
    <div>
      <div className="bg-productparallax w-full bg-cover h-[25vh]"></div>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="font-plusJakarta text-3xl sm:text-5xl p-8 flex justify-center items-center">All Products</h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-between mb-6 gap-4">
          <select className="bg-black rounded-full px-7 text-sm hover:bg-slate-950 transition-colors text-white" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="default">Sort By</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>

          <select className="bg-black rounded-full px-7 text-sm hover:bg-slate-950 transition-colors text-white" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value="">Filter by Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select className="bg-black rounded-full px-7 text-sm hover:bg-slate-950 transition-colors text-white " onChange={(e) => setSelectedCapacity(e.target.value)} value={selectedCapacity}>
            <option value="">Filter by Capacity</option>
            {capacities.map((capacity) => (
              <option key={capacity} value={capacity}>
                {capacity}
              </option>
            ))}
          </select>

          <Button onClick={clearFilters} className="bg-black rounded-full px-14 text-sm hover:bg-slate-950 transition-colors text-white">
            Clear Filters
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            // <ProductCard
            //   key={product.id}
            //   name={product.name}
            //   description={product.description}
            //   category={product.category}
            //   capacity={product.capacity}
            //   price={product.price}
            //   imageSrc={product.imageSrc}
            //   slug={product.slug}
            //   stock={product.stock}
            // />
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage

