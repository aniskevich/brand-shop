export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FBAuthResponse {
  idToken: string
  expiresIn: string
}

export interface Product {
  id?: string
  name: string
  price: string
  material: string
  designer: string
  description: string
  category: string
  subcategory: string
  size: string[]
  color: string[]
  link: string[]
}

export interface FBProductsResponse {
  [key: string]: Product
}

export interface FBProductsRequest {
  limit?: number
  category?: string
}

export interface SubCategory {
  category?: string
  designer?: string
}

export interface Sidebar {
  subcategory: { items: string[], opened: boolean }
  designer: { items: string[], opened: boolean }
}

export interface Filters {
  color: string[]
  size: string[]
  price: string[]
}

export interface FiltersOutput {
  color: string[]
  size: string[]
  minPrice: number
  maxPrice: number
  sort: string
  pageSize: string
}
