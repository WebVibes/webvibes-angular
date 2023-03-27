import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { WebshopComponent } from './webshop/webshop.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'webdesign', component: WebdesignComponent },
  { path: 'logo', component: LogoComponent },
  { path: 'webshop', component: WebshopComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactPageComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
