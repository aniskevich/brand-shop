import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'breadcrumbs'
})
export class BreadcrumbsPipe implements PipeTransform {

  transform(value: string[], index: number): string[] {
    return value
      .slice(0, index + 1)
      .map(val => {
        if (val === 'catalog') {
          return ['catalog', 'featured']
        }
        return val
      })
      .flat()
  }
}
