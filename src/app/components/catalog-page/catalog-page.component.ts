import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {map, switchMap} from 'rxjs/operators'

import {ProductService} from '../../services/product.service'
import {Product} from '../../shared/interfaces'

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  products: Product[]
  sidebar = {} as {[key: string]: Set<string>}
  filters = {} as {[key: string]: Set<string>}
  subcategory = null as {[key: string]: string}

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        map(params => {
          if (Object.keys(params).length) {
            this.subcategory = {...params}
          }
          return this.route.snapshot.url.pop().path
        }),
        switchMap(category => this.productService.get({category})),
        map(products => {
          if (this.subcategory) {
            const subcategory = this.subcategory
            this.subcategory = null
            // @ts-ignore
            return products.filter(product => product[Object.keys(subcategory)[0]] === Object.values(subcategory)[0])
          } else {
            return products
          }
        })
      )
      .subscribe(products => {
        this.products = products
        this.sidebar = {
          subcategory: new Set<string>(),
          designer: new Set<string>()
        }
        this.filters = {
          color: new Set<string>(),
          size: new Set<string>(),
          price: new Set<string>()
        }
        products.forEach(product => {
          this.sidebar.subcategory.add(product.subcategory)
          this.sidebar.designer.add(product.designer)
          this.filters.color = new Set([...this.filters.color, ...product.color])
          this.filters.size = new Set([...this.filters.size, ...product.size])
          this.filters.price.add(product.price)
        })
      })
  }
}
