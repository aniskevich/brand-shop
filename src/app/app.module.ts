import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

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
import { SidebarComponent } from './shared/components/sidebar/sidebar.component'

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
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
