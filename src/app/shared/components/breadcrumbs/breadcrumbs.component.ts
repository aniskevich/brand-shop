import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: string[] = ['']

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.snapshot.url.forEach(route => {
      if (route.path.startsWith('-')) {
        return
      }
      this.breadcrumbs.push(route.path)
    })
  }
}
