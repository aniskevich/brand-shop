import { Component, OnInit } from '@angular/core'
import {ProductCard} from '../../shared/interfaces'

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  sidebar = [
    {
      title: 'category', items: [
        {name: 'Accessories'},
        {name: 'Bags'},
        {name: 'Denim'},
        {name: 'Hoodies & Sweatshirts'},
        {name: 'Jackets & Coats'},
        {name: 'Pants'},
        {name: 'Polo\'s'},
        {name: 'Shirts'},
        {name: 'Shoes'},
        {name: 'Shorts'},
        {name: 'Sweaters & Coats'},
        {name: 'T-Shirts'},
      ]
    },
    {
      title: 'brand', items: [
        {name: 'Accessories'},
        {name: 'Bags'},
        {name: 'Denim'},
        {name: 'Hoodies & Sweatshirts'},
        {name: 'Jackets & Coats'},
        {name: 'Pants'},
        {name: 'Polo\'s'},
        {name: 'Shirts'},
        {name: 'Shoes'},
        {name: 'Shorts'},
        {name: 'Sweaters & Coats'},
        {name: 'T-Shirts'},
      ]
    }
  ]

  products: Array<ProductCard> = [
    {id: '1', src: 'assets/images/product1.jpg', name: 'hoodie', price: '$ 300.00'},
    {id: '2', src: 'assets/images/Product2.jpg', name: 'coat', price: '$ 500.00'},
    {id: '3', src: 'assets/images/Product3.jpg', name: 'jacket', price: '$ 350.00'},
    {id: '4', src: 'assets/images/Product4.jpg', name: 't-shirt', price: '$ 150.00'},
    {id: '5', src: 'assets/images/product5.jpg', name: 't-shirt', price: '$ 200.00'},
    {id: '6', src: 'assets/images/product6.jpg', name: 'jacket', price: '$ 350.00'},
    {id: '7', src: 'assets/images/product7.jpg', name: 'trousers', price: '$ 300.00'},
    {id: '8', src: 'assets/images/product8.jpg', name: 'shorts', price: '$ 250.00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
