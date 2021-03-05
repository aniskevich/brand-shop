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

  constructor() { }

  ngOnInit(): void {
  }

}
