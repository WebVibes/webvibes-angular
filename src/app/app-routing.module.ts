import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { WebshopComponent } from './webshop/webshop.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Web Vibes - webdesign, webfejlesztés, webshop készítés',
      description:
        'Az online jelenlét kulcsfontosságú a versenyképesség megtartásában. Legyen szó logóról, weboldalról vagy webshopról segítünk a vállalkozásod digitális transzformációjában.',
      // ogTitle: 'Title of Second A Component for social media',
      // ogDescription: 'Description of Second A Component for social media',
      // ogImage: 'ImagePathForSocialMedia'
    },
  },
  {
    path: 'webdesign',
    component: WebdesignComponent,
    data: {
      title: 'Kiemelkedő, ügyfélszerző weboldal vállalkozásod számára',
      description:
        'Erősítsd meg az online jelenléted egy korszerű és innovatív weboldallal.',
    },
  },
  {
    path: 'logo',
    component: LogoComponent,
    data: {
      title: 'Egységes és elragadó arculat a vállalkozásod számára',
      description:
        'Egy megnyerő arculattal és figyelemfelkeltő logóval hozzájárulhatsz a vállalkozásod növekedéséhez.',
    },
  },
  {
    path: 'webshop',
    component: WebshopComponent,
    data: {
      title: 'Webáruházak teljeskörű kivitelezése',
      description:
        'Elkészítjük az egyedi webáruházad amellyel kitűnhetsz a versenytársaid közül.',
    },
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'Web Vibes blog',
      // TODO
      description:
        'Az online jelenlét kulcsfontosságú a versenyképesség megtartásában. Legyen szó logóról, weboldalról vagy webshopról segítünk a vállalkozásod digitális transzformációjában.',
    },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      title: 'Kapcsolat',
      description: 'Vedd fel velünk a kapcsolatot és dolgozzunk együtt.',
    },
  },
  {
    path: 'blog/:slug',
    component: BlogPostComponent,
    data: {
      title: 'Web Vibes blog',
      // TODO
      description:
        'Az online jelenlét kulcsfontosságú a versenyképesség megtartásában. Legyen szó logóról, weboldalról vagy webshopról segítünk a vállalkozásod digitális transzformációjában.',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
