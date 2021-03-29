import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment'
import { FBReviewsResponse, Review } from '../shared/interfaces'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  create(review: Review): Observable<string> {
    return this.http.post<string>(`${environment.DBUrl}/reviews.json`, review)  
  }

  get(): Observable<Review[]> {
    const params = `?orderBy="author_id"&equalTo="${this.authService.userId}"`
    return this.http.get<FBReviewsResponse>(`${environment.DBUrl}/reviews.json${params}`)
    .pipe(
      map(reviews => {
        return Array.from(Object.keys(reviews)
          .map(key => ({...reviews[key], id: key})))
      })
    )
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.DBUrl}/reviews/${id}.json`)
  }
}
