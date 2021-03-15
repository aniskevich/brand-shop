import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {map, mergeMap} from 'rxjs/operators'

import {ProductService} from '../../services/product.service'
import {FiltersOutput, Product, SubCategory} from '../../shared/interfaces'

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  products: Product[]
  filteredProducts: Product[]
  currentPage = 1
  pageSize = 3
  totalCount: number
  sortBy = 'name'

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        map(params => ({
            category: this.route.snapshot.url.pop().path,
            subcategory: params
          })
        ),
        mergeMap(({category, subcategory}) => this.productService.get({category})
          .pipe(
            map(products => ({products, subcategory}))
          )
        )
      )
      .subscribe(({products, subcategory}) => {
        this.products = products
        this.filteredProducts = products.filter(product => {
          return product[Object.keys(subcategory)[0] as keyof SubCategory] === Object.values(subcategory)[0]
        })
        this.totalCount = this.filteredProducts.length
      })
  }

  onFiltersChange(event: FiltersOutput): void {
    this.filteredProducts = this.products.filter(product => (
      +product.price >= event.minPrice &&
      +product.price <= event.maxPrice &&
      this.extractArray(event.color, product.color) &&
      this.extractArray(event.size, product.size)
    ))
    this.pageSize = +event.pageSize
    this.currentPage = 1
    this.totalCount = this.filteredProducts.length
    this.sortBy = event.sort
  }

  private extractArray(source: string[], target: string[]): boolean {
    if (!source.length) {
      return true
    } else {
      return source.some(el => target.includes(el))
    }
  }

  onPageChange(event: number): void {
    this.currentPage = event
  }
}
