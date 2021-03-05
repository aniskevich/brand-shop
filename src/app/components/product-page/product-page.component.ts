import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {switchMap} from 'rxjs/operators'

import {ProductService} from '../../services/product.service'
import {Product} from '../../shared/interfaces'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.productService.getById(params.id)
      })
    ).subscribe(product => this.product = product)
  }
}
