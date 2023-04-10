import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { Observable, map, of } from 'rxjs';
import { BLOGPOSTS } from './blog-posts';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(
    private readonly http: HttpClient,
    private readonly sanitizer: DomSanitizer
  ) {}
  
  getBlogPosts(): Observable<BlogPost[]> {
    const heroes = of(BLOGPOSTS)
    return heroes;
  }

  getBlogPost(id: number): Observable<BlogPost> {
    const blogPost = BLOGPOSTS.find(b => b.id === id)!;
    return of(blogPost);
  }

  getBlogPostContent(path: string): Observable<SafeHtml> {
    // https://stackoverflow.com/questions/68970386/use-html-link-in-innerhtml-to-display-that-file-in-angular
    const headers = new HttpHeaders({
      'Content-Type':  'text/plain',
    });
    return this.http.get(path, {
      headers,
      responseType: 'text'
    }).pipe(
      // This is unsafe if the path and content is not under your control
      map(html => this.sanitizer.bypassSecurityTrustHtml(html))
    );
  }
}
