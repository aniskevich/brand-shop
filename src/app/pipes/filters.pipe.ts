import { Pipe, PipeTransform } from '@angular/core'

import {Filters, Product} from '../shared/interfaces'

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {
  transform(value: Product[], ...args: Array<keyof Filters>): Filters {
    const result = {} as Filters
    args.forEach(key => {
      if (!result[key]) {
        result[key] = []
      }
      result[key] = [...new Set(value.reduce((acc, val) => acc.concat(val[key]), []))]
    })
    return result
  }
}
