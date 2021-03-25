import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'

import {FBUserRequest} from '../../interfaces'
import {AuthService} from '../../../services/auth.service'
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  public form!: FormGroup
  @Output() exit = new EventEmitter<null>()
  authSub: Subscription

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe()
    }
  }

  submit(): void {
    if (this.form.invalid) {
      return
    }

    const user: FBUserRequest = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['account'])
      this.exit.emit()
    })
  }
}
