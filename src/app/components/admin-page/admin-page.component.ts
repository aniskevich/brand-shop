import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'

import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, OnDestroy {

  public form: FormGroup
  productSub: Subscription

  constructor(private productService: ProductService) { }  

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      material: new FormControl('', [Validators.required]),
      designer: new FormControl('brand', [Validators.required]),
      category: new FormControl('man', [Validators.required]),
      subcategory: new FormControl('', [Validators.required]),
      color: new FormControl('black, white', [Validators.required]),
      size: new FormControl('xs, s', [Validators.required]),
      link: new FormControl('', [Validators.required]),
    })
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe()
  }

  submit(): void {
    if (this.form.invalid) {
      return
    }
    const product = {
      ...this.form.value, 
      size: this.form.value.size.split(','),
      color: this.form.value.color.split(','),
      link: this.form.value.link.split(',')
    }
    this.productSub = this.productService
      .create(product)
      .subscribe(response => {
        console.log(response)
        this.form.reset()
      })
  }
}
