import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SkillsComponent } from './home/skills/skills.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactFooterComponent } from './contact/contact-footer/contact-footer.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ToolbarComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SkillsComponent,
    GalleryComponent,
    ContactFooterComponent,
    HomeFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
