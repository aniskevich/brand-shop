import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomePageComponent} from './components/home-page/home-page.component'
import {CatalogPageComponent} from './components/catalog-page/catalog-page.component'
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component'
import {ProductPageComponent} from './components/product-page/product-page.component'
import {CartPageComponent} from './components/cart-page/cart-page.component'
import {CheckoutPageComponent} from './components/checkout-page/checkout-page.component'
import {AccountPageComponent} from './components/account-page/account-page.component'
import {AuthGuardService} from './services/auth-guard.service'

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'catalog/woman', component: CatalogPageComponent},
      {path: 'catalog/man', component: CatalogPageComponent},
      {path: 'catalog/kids', component: CatalogPageComponent},
      {path: 'catalog/featured', component: CatalogPageComponent},
      {path: 'catalog/:id', component: ProductPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'checkout', component: CheckoutPageComponent},
      {path: 'account', component: AccountPageComponent, canActivate: [AuthGuardService]}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
