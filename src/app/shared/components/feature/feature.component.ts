import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {Subscription} from 'rxjs'

import {Product} from '../../interfaces'
import {ProductService} from '../../../services/product.service'


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit, OnDestroy {

  @Input() title: string
  @Input() text: string

  products: Product[]
  productsSub: Subscription

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsSub = this.productService.getAll(4).subscribe(products => this.products = products)
  }

  ngOnDestroy(): void {
    if (this.productsSub) {
      this.productsSub.unsubscribe()
    }
  }

}
