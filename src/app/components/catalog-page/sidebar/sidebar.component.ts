import {Component, Input, OnInit} from '@angular/core'

import {Sidebar} from '../../../shared/interfaces'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() items: Sidebar

  constructor() {}

  ngOnInit(): void {}

  getParams(key: string, item: string): {[key: string]: string} {
    return {[key]: item}
  }
}
