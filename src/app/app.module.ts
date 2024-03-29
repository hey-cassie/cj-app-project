import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SkillsComponent } from './home/skills/skills.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { MagicApiComponent } from './home/magic-api/magic-api.component';
import { AboutFooterComponent } from './about/about-footer/about-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ToolbarComponent,
    HeaderComponent,
    NavbarComponent,
    SkillsComponent,
    GalleryComponent,
    HomeFooterComponent,
    MagicApiComponent,
    AboutFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
