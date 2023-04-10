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
  
  getBlogPosts(): Observable<BlogPost[]> {
    const heroes = of(BLOGPOSTS)
    return heroes;
  }

  getBlogPost(slug: any): Observable<BlogPost> {
    // TODO not found
    const blogPost = BLOGPOSTS.find(b => b.slug === slug)!;
    return of(blogPost);
  }

}
