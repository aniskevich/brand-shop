import {Component, OnInit} from '@angular/core'

import {CartService} from '../../services/cart.service'
import {CartProduct} from '../../shared/interfaces'

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart: CartProduct[]

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
  }

  addProduct(product: CartProduct): void {
    this.cartService.increaseQuantity(product)
  }

  removeProduct(product: CartProduct): void {
    this.cartService.decreaseQuantity(product)
  }

  clearCart(): void {
    this.cartService.clearCart()
  }

  get totalPrice(): number {
    return this.cart.reduce((acc, item) => {
      acc += +item.price * item.quantity
      return acc
    }, 0)
  }
}
