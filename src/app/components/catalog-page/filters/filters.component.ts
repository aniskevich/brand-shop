import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core'
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms'

import {Filters, FiltersOutput} from '../../../shared/interfaces'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filters: Filters
  form: FormGroup
  priceArray: number[]

  @Output() private applyFilters = new EventEmitter<FiltersOutput>()

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      color: this.fb.array([]),
      size: this.fb.array([]),
      minPrice: this.fb.control(0),
      maxPrice: this.fb.control(0),
      sort: this.fb.control('name'),
      pageSize: this.fb.control('3')
    })
  }

  ngOnInit(): void {
    this.priceArray = this.filters.price
      .map(price => +price)
      .sort((a, b) => a - b)
    this.form.get('minPrice').setValue(this.getPrice())
    this.form.get('maxPrice').setValue(this.getPrice('max'))
  }

  getPrice(type: 'min' | 'max' = 'min'): number {
    if (type === 'max') {
      return this.priceArray[this.priceArray.length - 1]
    } else {
      return this.priceArray[0]
    }
  }

  onCheckboxChange(event: EventTarget, name: string): void {
    const checkboxArray: FormArray = this.form.get(name) as FormArray
    const target = event as HTMLInputElement
    if (target.checked) {
      checkboxArray.push(new FormControl(target.value))
    } else {
      checkboxArray.controls.forEach((item, index) => {
        if (item.value === target.value) {
          checkboxArray.removeAt(index)
          return
        }
      })
    }
  }

  onRangeChange(event: EventTarget): void {
    const minPrice = this.form.get('minPrice')
    const maxPrice = this.form.get('maxPrice')
    const target = event as HTMLInputElement

    switch (target.id) {
      case 'minPrice':
        if (maxPrice.value < target.value) {
          maxPrice.setValue(target.value)
        }
        break
      case 'maxPrice':
        if (minPrice.value > target.value) {
          minPrice.setValue(target.value)
        }
        break
    }
  }

  submit(): void {
    this.applyFilters.emit(this.form.value)
  }

  clearFilters(): void {
    this.form.get('minPrice').setValue(this.getPrice())
    this.form.get('maxPrice').setValue(this.getPrice('max'))
    this.form.get('sort').setValue('name')
    this.form.get('pageSize').setValue('3')
    this.applyFilters.emit(this.form.value)
    // TODO implement checkboxes clean
  }
}
