import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {ModalService} from '../../../services/modal.service'
import {AuthService} from '../../../services/auth.service'
import {CartService} from '../../../services/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public modalService: ModalService,
    public auth: AuthService,
    private router: Router,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/'])
    this.auth.logout()
  }

  get cartLength(): number {
    return this.cartService.cart.length
  }
}
