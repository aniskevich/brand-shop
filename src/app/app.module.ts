import { NgModule } from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { NavbarComponent } from './shared/components/navbar/navbar.component'
import { HeaderComponent } from './shared/components/header/header.component'
import { FooterComponent } from './shared/components/footer/footer.component'
import { LogoComponent } from './shared/components/logo/logo.component'
import { FooterLinksComponent } from './shared/components/footer-links/footer-links.component'
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component'
import { CommentCardComponent } from './shared/components/comment-card/comment-card.component'
import { HomePageComponent } from './components/home-page/home-page.component'
import { ProductCardComponent } from './shared/components/product-card/product-card.component'
import { PromoComponent } from './shared/components/promo/promo.component'
import { SidebarComponent } from './components/catalog-page/sidebar/sidebar.component'
import { ProductPageComponent } from './components/product-page/product-page.component'
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component'
import { FeatureComponent } from './shared/components/feature/feature.component'
import { CartPageComponent } from './components/cart-page/cart-page.component'
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component'
import { ModalComponent } from './shared/components/modal/modal.component'
import { LoginFormComponent } from './shared/components/login-form/login-form.component'
import { AccountPageComponent } from './components/account-page/account-page.component'
import { BreadcrumbsPipe } from './pipes/breadcrumbs.pipe'
import { SidebarPipe } from './pipes/sidebar.pipe'
import { FiltersComponent } from './components/catalog-page/filters/filters.component'
import { FiltersPipe } from './pipes/filters.pipe'
import { PaginationComponent } from './components/catalog-page/pagination/pagination.component'
import { PaginationPipe } from './pipes/pagination.pipe'
import { AdminPageComponent } from './components/admin-page/admin-page.component'
import { AuthInterceptor } from './services/auth.interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    FooterLinksComponent,
    CatalogPageComponent,
    CommentCardComponent,
    HomePageComponent,
    ProductCardComponent,
    PromoComponent,
    SidebarComponent,
    ProductPageComponent,
    BreadcrumbsComponent,
    FeatureComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ModalComponent,
    LoginFormComponent,
    AccountPageComponent,
    BreadcrumbsPipe,
    SidebarPipe,
    FiltersComponent,
    FiltersPipe,
    PaginationComponent,
    PaginationPipe,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
