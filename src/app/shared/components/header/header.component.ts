import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {ModalService} from '../../../services/modal.service'
import {AuthService} from '../../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public modalService: ModalService,
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/'])
    this.auth.logout()
  }
}
