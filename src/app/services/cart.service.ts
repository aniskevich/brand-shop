import {Injectable} from '@angular/core'

import {AddProductToCartForm, CartProduct} from '../shared/interfaces'
import {ProductService} from './product.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [] as CartProduct[]

  constructor(
    private productService: ProductService
  ) {
  }

  addItem(item: AddProductToCartForm): void {
    this.productService.getById(item.id).subscribe(product => {
      const target = this.cart.filter(i => {
        return i.id === item.id && i.color === item.color && i.size === item.size
      })
      if (target.length) {
        target[0].quantity += +item.quantity
      } else {
        this.cart.push({
          ...product,
          id: item.id,
          color: item.color,
          size: item.size,
          quantity: +item.quantity
        })
      }
    })
  }

  getCart(): CartProduct[] {
    return this.cart
  }

  increaseQuantity(item: CartProduct): void {
    const target = this.cart.filter(i => {
      return i.id === item.id && i.color === item.color && i.size === item.size
    })
    target[0].quantity += 1
  }

  decreaseQuantity(item: CartProduct): void {
    const target = this.cart.filter(i => {
      return i.id === item.id && i.color === item.color && i.size === item.size
    })
    target[0].quantity -= 1
    if (target[0].quantity === 0) {
      this.cart.splice(this.cart.indexOf(target[0]), 1)
    }
  }

  clearCart(): void {
    this.cart.splice(0)
  }
}
