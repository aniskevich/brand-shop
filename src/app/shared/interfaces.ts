export interface ProductCard {
  id: string
  name: string
  price: string
  src: string
}

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
  size: string[]
  color: string[]
  category: string[]
  link: string[]
}

export interface FBProductsResponse {
  [key: string]: Product
}
