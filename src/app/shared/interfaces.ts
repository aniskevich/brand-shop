import {EventEmitter} from '@angular/core'

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
