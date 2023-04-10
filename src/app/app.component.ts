import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AnalyticsService } from './analytics.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { BLOGPOSTS } from './blog-posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of heroes';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  hasCookie: boolean = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private metaService: Meta,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private analyticsService: AnalyticsService,
    private cookieService: CookieService,
    private _snackBar: MatSnackBar
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    let isCookieAllowed = this.cookieService.get('IS_COOKIE_ALLOWED');
    if (isCookieAllowed == '1') {
      this.hasCookie = true;
      this.analyticsService.startTracking();
    } else {
      let snackBarRef = _snackBar.open(
        'Statisztikai célokból, valamint a legjobb felhasználói élmény érdekében az oldal cookie-kat használ. 🍪',
        'Rendben',
        { duration: 0, panelClass: 'my-custom-snackbar' }
      );
      snackBarRef.afterDismissed().subscribe(() => {
        this.cookieService.set('IS_COOKIE_ALLOWED', '1');
        this.analyticsService.startTracking();
      });
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.analyticsService.trackVirtualPageview(event.url);
        // window.scroll({
        //   top: 0,
        //   left: 0,
        //   behavior: 'smooth',
        // });
      }
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        var rt = this.getChild(this.activatedRoute);

        rt.data.subscribe((data) => {
          if (
            this.router.url.includes('blog') &&
            this.router.url.split('/').length == 3
          ) {
            // add title and description from blog posts data
            let blogPostSlug = this.router.url.split('/')[2];
            const blogPost = BLOGPOSTS.find((b) => b.slug === blogPostSlug)!;
            this.titleService.setTitle(blogPost.title);
            this.metaService.updateTag({
              name: 'description',
              content: blogPost.description,
            });
          } else {
            this.titleService.setTitle(data.title);
            if (data.description) {
              this.metaService.updateTag({
                name: 'description',
                content: data.description,
              });
            } else {
              this.metaService.removeTag("name='description'");
            }
          }

          if (data.robots) {
            this.metaService.updateTag({
              name: 'robots',
              content: data.robots,
            });
          } else {
            this.metaService.updateTag({
              name: 'robots',
              content: 'follow,index',
            });
          }

          if (data.ogUrl) {
            this.metaService.updateTag({
              property: 'og:url',
              content: data.ogUrl,
            });
          } else {
            this.metaService.updateTag({
              property: 'og:url',
              content: this.router.url,
            });
          }

          if (data.ogTitle) {
            this.metaService.updateTag({
              property: 'og:title',
              content: data.ogTitle,
            });
          } else {
            this.metaService.removeTag("property='og:title'");
          }

          if (data.ogDescription) {
            this.metaService.updateTag({
              property: 'og:description',
              content: data.ogDescription,
            });
          } else {
            this.metaService.removeTag("property='og:description'");
          }

          if (data.ogImage) {
            this.metaService.updateTag({
              property: 'og:image',
              content: data.ogImage,
            });
          } else {
            this.metaService.removeTag("property='og:image'");
          }
        });
      });
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
