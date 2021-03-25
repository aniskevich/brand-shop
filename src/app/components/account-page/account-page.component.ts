import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { AuthService } from 'src/app/services/auth.service'
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/shared/interfaces'

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit, OnDestroy {

  user: User = null
  userSub: Subscription

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }  

  ngOnInit(): void {
    this.userSub = this.userService.getById(this.authService.userId)
      .subscribe(user => this.user = user)
  }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe()
    }
  }
}
