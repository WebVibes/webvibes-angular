import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { LogoComponent } from './logo/logo.component';
import { WebshopComponent } from './webshop/webshop.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { GyikComponent } from './gyik/gyik.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    WebdesignComponent,
    LogoComponent,
    WebshopComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    ContactPageComponent,
    BlogPostComponent,
    GyikComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialExampleModule,
    FlexLayoutModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
