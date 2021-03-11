import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  opened = false
  @Input() title!: string
  @Input() items!: Set<string>

  constructor() { }

  ngOnInit(): void {
  }

  getParams(item: string): {[key: string]: string} {
    return {[this.title]: item}
  }
}
