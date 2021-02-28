import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  opened = false
  @Input() title!: string
  @Input() items!: Array<{name: string}>

  constructor() { }

  ngOnInit(): void {
  }

}
