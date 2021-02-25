import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomePageComponent} from './components/home-page/home-page.component'
import {CatalogPageComponent} from './components/catalog-page/catalog-page.component'
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component'

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'catalog', component: CatalogPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
