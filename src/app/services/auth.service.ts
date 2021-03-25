import {Injectable, OnDestroy} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable, Subject, Subscription, throwError} from 'rxjs'
import {catchError, tap} from 'rxjs/operators'

import {FBAuthResponse, FBUserRequest} from '../shared/interfaces'
import {environment} from '../../environments/environment'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  error$: Subject<string> = new Subject<string>()
  userId: string = null
  role: string = null
  userSub: Subscription

  get token(): string | null {
    const exp = localStorage.getItem('token-exp')
    if (exp) {
      const expDate = new Date(exp)
      if (new Date() > expDate) {
        this.logout()
        return null
      }
    }
    return localStorage.getItem('token')
  }

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe()
    }
  }

  login(user: FBUserRequest, url = environment.DBLoginUrl): Observable<FBAuthResponse | null> {
    user.returnSecureToken = true
    return this.http.post<FBAuthResponse>(url, user)
      .pipe(
        tap(this.setToken.bind(this)),
        tap(this.getUserRole.bind(this)),
        catchError(this.handleError.bind(this))
      )
  }

  logout(): void {
    this.setToken(null)
  }

  private setToken(response: FBAuthResponse | null): void {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('token', response.idToken)
      localStorage.setItem('token-exp', expDate.toString())
      this.userId = response.localId
    } else {
      localStorage.clear()
      this.userId = null
      this.role = null
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const {message} = error.error.error
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Invalid email')
        break
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid password')
        break
    }
    return throwError(error)
  }

  isAuth(): boolean {
    return !!this.token
  }

  private getUserRole(response: FBAuthResponse): void {
    this.userSub = this.userService.getById(response.localId)
      .subscribe(user => this.role = user.role)
  }
}
