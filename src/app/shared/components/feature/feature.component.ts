import { Component, OnInit } from '@angular/core'
import {ProductCard} from '../../interfaces'

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

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
