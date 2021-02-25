import { Component, OnInit } from '@angular/core'
import {ProductCard} from '../../shared/interfaces'

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

  products: Array<ProductCard> = [
    {id: '1', src: 'assets/images/product1.jpg', name: 'hoodie', price: '$ 300.00'},
    {id: '2', src: 'assets/images/Product2.jpg', name: 'coat', price: '$ 500.00'},
    {id: '3', src: 'assets/images/Product3.jpg', name: 'jacket', price: '$ 350.00'},
    {id: '4', src: 'assets/images/Product4.jpg', name: 't-shirt', price: '$ 150.00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
