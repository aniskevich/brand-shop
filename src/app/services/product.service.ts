import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {environment} from '../../environments/environment'
import {FBProductsRequest, FBProductsResponse, Product} from '../shared/interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }
// TODO: !!!!!
  private parseOptions(options: FBProductsRequest): string {
    if (options.limit) {
      return `?orderBy="$key"&limitToLast=${options.limit}`
    } else if (options.category) {
      if (options.category === 'featured') {
        return ''
      }
      return `?orderBy="category"&equalTo="${options.category}"`
    } else {
      return ''
    }
  }

  get(options: FBProductsRequest): Observable<Product[]> {
    return this.http.get<FBProductsResponse>(`${environment.DBUrl}/products.json${this.parseOptions(options)}`)
      .pipe(
        map(products => {
          return Array.from(Object.keys(products)
            .map(key => ({...products[key], id: key})))
        })
      )
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.DBUrl}/products/${id}.json`)
  }

  create(product: Product): Observable<string> {
    return this.http.post<string>(`${environment.DBUrl}/products.json`, product)
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${environment.DBUrl}/products/${product.id}.json`, product)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.DBUrl}/products/${id}.json`)
  }
}
