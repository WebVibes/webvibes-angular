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
import { HostingTutorialComponent } from './hosting-tutorial/hosting-tutorial.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Web Vibes | webdesign, webfejlesztés, webshop készítés',
      ogTitle: 'Web Vibes | webdesign, webfejlesztés, webshop készítés',
      description:
        'Az online jelenlét kulcsfontosságú a versenyképesség megtartásában. Legyen szó logóról, weboldalról vagy webshopról segítünk a vállalkozásod digitális transzformációjában.',
      ogDescription:
        'Az online jelenlét kulcsfontosságú a versenyképesség megtartásában. Legyen szó logóról, weboldalról vagy webshopról segítünk a vállalkozásod digitális transzformációjában.',
      // ogImage: 'ImagePathForSocialMedia' # TODO
      animation: 'HomePage',
    },
  },
  {
    path: 'webdesign',
    component: WebdesignComponent,
    data: {
      title: 'Web Vibes | Kiemelkedő, ügyfélszerző weboldal vállalkozásod számára',
      ogTitle: 'Web Vibes | Kiemelkedő, ügyfélszerző weboldal vállalkozásod számára',
      description:
        'Erősítsd meg az online jelenléted egy korszerű és innovatív weboldallal.',
      ogDescription:
        'Erősítsd meg az online jelenléted egy korszerű és innovatív weboldallal.',
      animation: 'WebDesignPage',
    },
  },
  {
    path: 'logo',
    component: LogoComponent,
    data: {
      title: 'Web Vibes | Egységes és elragadó arculat a vállalkozásod számára',
      ogTitle: 'Web Vibes | Egységes és elragadó arculat a vállalkozásod számára',
      description:
        'Egy megnyerő arculattal és figyelemfelkeltő logóval hozzájárulhatsz a vállalkozásod növekedéséhez.',
      ogDescription:
        'Egy megnyerő arculattal és figyelemfelkeltő logóval hozzájárulhatsz a vállalkozásod növekedéséhez.',
      animation: 'LogoPage',
    },
  },
  {
    path: 'webshop',
    component: WebshopComponent,
    data: {
      title: 'Web Vibes | Webáruházak teljeskörű kivitelezése',
      ogTitle: 'Web Vibes | Webáruházak teljeskörű kivitelezése',
      description:
        'Elkészítjük az egyedi webáruházad amellyel kitűnhetsz a versenytársaid közül.',
      ogDescription:
        'Elkészítjük az egyedi webáruházad amellyel kitűnhetsz a versenytársaid közül.',
      animation: 'WebshopPage',
    },
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'Web Vibes | Blog',
      ogTitle: 'Web Vibes | Blog',
      description: '', // TODO
      ogDescription: '',
      animation: 'BlogPage',
    },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      title: 'Web Vibes | Kapcsolat',
      ogTitle: 'Web Vibes | Kapcsolat',
      description: 'Vedd fel velünk a kapcsolatot és dolgozzunk együtt.',
      ogDescription: 'Vedd fel velünk a kapcsolatot és dolgozzunk együtt.',
      animation: 'ContactPage',
    },
  },
  {
    path: 'blog/:slug',
    component: BlogPostComponent,
    data: {
      title: 'Web Vibes | Blog',
      ogTitle: 'Web Vibes | Blog',
      description: '', // TODO
      ogDescription: '',
      animation: 'BlogPostPage',
    },
  },
  {
    path: 'impresszum',
    component: ImpresszumComponent,
    data: {
      title: 'Web Vibes | Impresszum',
      ogTitle: 'Web Vibes | Impresszum',
      description: 'Web Vibes impresszum',
      ogDescription: 'Web Vibes impresszum',
      robots: 'noindex, nofollow',
      animation: 'ImpresszumPage',
    },
  },
  {
    path: 'adatkezelesi-tajekoztato',
    component: AdatkezelesComponent,
    data: {
      title: 'Web Vibes | Adatkezelési tájékoztató',
      ogTitle: 'Web Vibes | Adatkezelési tájékoztató',
      description: 'Web Vibes adatkezelési tájékoztató',
      ogDescription: 'Web Vibes adatkezelési tájékoztató',
      robots: 'noindex, nofollow',
      animation: 'AdatkezelesPage',
    },
  },
  {
    path: 'tarhely-segedlet',
    component: HostingTutorialComponent,
    data: {
      title: 'Web Vibes | Tárhely segédlet',
      ogTitle: 'Web Vibes | Tárhely segédlet',
      description: '', // TODO
      ogDescription: '',
      animation: 'TarhelyPage',
    },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
