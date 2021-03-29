import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'

import { AuthService } from 'src/app/services/auth.service'
import { ReviewService } from 'src/app/services/review.service'
import { UserService } from 'src/app/services/user.service'
import { Review, User } from 'src/app/shared/interfaces'

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit, OnDestroy {
  user: User = null
  userSub: Subscription
  reviewForm: FormGroup
  reviews: Review[]
  addReviewSub: Subscription
  reviewsSub: Subscription
  removeReviewSub: Subscription

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.userSub = this.userService
      .getById(this.authService.userId)
      .subscribe((user) => (this.user = user))

    this.reviewForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(10)])
    })

    this.reviewsSub = this.reviewService.get()
      .subscribe(reviews => this.reviews = reviews)
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe()
    this.addReviewSub?.unsubscribe()
    this.reviewsSub?.unsubscribe()
    this.removeReviewSub?.unsubscribe()
  }

  addReview(): void {
    if (this.reviewForm.invalid) {
      return
    }
    const review = {
      author_id: this.authService.userId,
      text: this.reviewForm.value.text,
      date: new Date().toString()
    }
    this.addReviewSub = this.reviewService.create(review)
      .subscribe(response => console.log(response))
  }

  removeReview(id: string): void {
    this.removeReviewSub = this.reviewService.delete(id)
      .subscribe(() => {
        this.reviews = this.reviews.filter(review => review.id !== id)
    })    
  }
}
