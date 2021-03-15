import { Pipe, PipeTransform } from '@angular/core'
import {Product} from '../shared/interfaces'

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(value: Product[], currentPage: number, pageSize: number, sortBy: string): Product[] {
    const start = pageSize * currentPage - pageSize
    const end = start + pageSize
    const result = value.slice(start, end)
    if (sortBy === 'name') {
      return result.sort((a, b) => a.name.localeCompare(b.name))
    } else {
      return result.sort((a, b) => +a.price - +b.price)
    }
  }
}
