import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { WebshopComponent } from './webshop/webshop.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ImpresszumComponent } from './impresszum/impresszum.component';
import { AdatkezelesComponent } from './adatkezeles/adatkezeles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Web Vibes - webdesign, webfejlesztés, webshop készítés',
      ogTitle: 'Web Vibes - webdesign, webfejlesztés, webshop készítés',
      description:
        'Az online jelenlét kulcsfontosságú a versenyképesség megtartásában. Legyen szó logóról, weboldalról vagy webshopról segítünk a vállalkozásod digitális transzformációjában.',
      ogDescription:
        'Az online jelenlét kulcsfontosságú a versenyképesség megtartásában. Legyen szó logóról, weboldalról vagy webshopról segítünk a vállalkozásod digitális transzformációjában.',
      // ogImage: 'ImagePathForSocialMedia' # TODO
    },
  },
  {
    path: 'webdesign',
    component: WebdesignComponent,
    data: {
      title: 'Kiemelkedő, ügyfélszerző weboldal vállalkozásod számára',
      ogTitle: 'Kiemelkedő, ügyfélszerző weboldal vállalkozásod számára',
      description:
        'Erősítsd meg az online jelenléted egy korszerű és innovatív weboldallal.',
      ogDescription:
        'Erősítsd meg az online jelenléted egy korszerű és innovatív weboldallal.',
    },
  },
  {
    path: 'logo',
    component: LogoComponent,
    data: {
      title: 'Egységes és elragadó arculat a vállalkozásod számára',
      ogTitle: 'Egységes és elragadó arculat a vállalkozásod számára',
      description:
        'Egy megnyerő arculattal és figyelemfelkeltő logóval hozzájárulhatsz a vállalkozásod növekedéséhez.',
      ogDescription:
        'Egy megnyerő arculattal és figyelemfelkeltő logóval hozzájárulhatsz a vállalkozásod növekedéséhez.',
    },
  },
  {
    path: 'webshop',
    component: WebshopComponent,
    data: {
      title: 'Webáruházak teljeskörű kivitelezése',
      ogTitle: 'Webáruházak teljeskörű kivitelezése',
      description:
        'Elkészítjük az egyedi webáruházad amellyel kitűnhetsz a versenytársaid közül.',
      ogDescription:
        'Elkészítjük az egyedi webáruházad amellyel kitűnhetsz a versenytársaid közül.',
    },
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'Web Vibes blog',
      ogTitle: 'Web Vibes blog',
      description: '', // TODO
      ogDescription: '',
    },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      title: 'Kapcsolat',
      ogTitle: 'Kapcsolat',
      description: 'Vedd fel velünk a kapcsolatot és dolgozzunk együtt.',
      ogDescription: 'Vedd fel velünk a kapcsolatot és dolgozzunk együtt.',
    },
  },
  {
    path: 'blog/:slug',
    component: BlogPostComponent,
    data: {
      title: 'Web Vibes blog',
      ogTitle: 'Web Vibes blog',
      description: '', // TODO
      ogDescription: '',
    },
  },
  {
    path: 'impresszum',
    component: ImpresszumComponent,
    data: {
      title: 'Impresszum - Web Vibes',
      ogTitle: 'Impresszum - Web Vibes',
      description: 'Web Vibes impresszum',
      ogDescription: 'Web Vibes impresszum',
      robots: 'noindex, nofollow',
    },
  },
  {
    path: 'adatkezelesi-tajekoztato',
    component: AdatkezelesComponent,
    data: {
      title: 'Adatkezelési tájékoztató - Web Vibes',
      ogTitle: 'Adatkezelési tájékoztató - Web Vibes',
      description: 'Web Vibes adatkezelési tájékoztató',
      ogDescription: 'Web Vibes adatkezelési tájékoztató',
      robots: 'noindex, nofollow',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
