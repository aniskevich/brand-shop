import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {environment} from '../../environments/environment'
import {FBProductsResponse, Product} from '../shared/interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(limit?: number): Observable<Product[]> {
    return this.http.get<FBProductsResponse>(`${environment.DBUrl}/products.json${limit && '?orderBy="$key"&limitToLast=' + limit}`)
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
