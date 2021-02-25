import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  options: Array<{ name: string, path: string }> = [
    {name: 'home', path: ''},
    {name: 'woman', path: '/catalog'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
