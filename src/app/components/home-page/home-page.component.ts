import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  offers: Array<{labelTop: string, labelBottom: string, src: string}> = [
    {labelTop: 'hot deal', labelBottom: 'for men', src: 'assets/images/offer1.jpg'},
    {labelTop: 'luxurious & trendy', labelBottom: 'accessories', src: 'assets/images/offer2.jpg'},
    {labelTop: '30% offer', labelBottom: 'women', src: 'assets/images/offer3.jpg'},
    {labelTop: 'new arrivals', labelBottom: 'for kids', src: 'assets/images/offer4.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
