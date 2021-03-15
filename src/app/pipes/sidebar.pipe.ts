import {Pipe, PipeTransform} from '@angular/core'

import {Product, Sidebar} from '../shared/interfaces'

@Pipe({
  name: 'sidebar'
})
export class SidebarPipe implements PipeTransform {
  transform(value: Product[], ...args: Array<keyof Sidebar>): Sidebar {
    const result = {} as Sidebar
    args.forEach(key => {
      if (!result[key]) {
        result[key] = {items: [], opened: false}
      }
      result[key].items = [...new Set(value.map(product => product[key]))]
    })
    return result
  }
}
