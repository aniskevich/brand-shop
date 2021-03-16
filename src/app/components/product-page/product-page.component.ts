import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {switchMap} from 'rxjs/operators'
import {FormControl, FormGroup} from '@angular/forms'

import {ProductService} from '../../services/product.service'
import {Product} from '../../shared/interfaces'
import {CartService} from '../../services/cart.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: Product
  form: FormGroup
  id: string

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cart: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.id = params.id
        return this.productService.getById(this.id)
      })
    ).subscribe(product => {
      this.product = product
      this.form = new FormGroup({
        id: new FormControl(this.id),
        color: new FormControl(this.product.color[0]),
        size: new FormControl(this.product.size[0]),
        quantity: new FormControl(1)
      })
    })
  }

  submit(): void {
    this.cart.addItem(this.form.value)
  }
}
