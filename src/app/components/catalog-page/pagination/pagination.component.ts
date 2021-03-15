import {Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() pageSize: number
  @Input() totalCount: number
  @Input() currentPage: number
  pages: number[]

  @Output() changePageHandler = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pageSize) {
      this.pages = new Array(Math.ceil(this.totalCount / changes.pageSize.currentValue))
    } else if (changes.totalCount) {
      this.pages = new Array(Math.ceil(changes.totalCount.currentValue / this.pageSize))
    }
  }

  changePage(event: EventTarget): void {
    this.changePageHandler.emit(+(event as HTMLElement).innerText)
  }

  handleNavigation(option: 'prev' | 'next'): void {
    switch (option) {
      case 'prev':
        if (this.currentPage === 1) {
          return
        } else {
          this.changePageHandler.emit(this.currentPage - 1)
        }
        break
      case 'next':
        if (this.currentPage === this.pages.length) {
          return
        } else {
          this.changePageHandler.emit(this.currentPage + 1)
        }
        break
    }
  }
}
