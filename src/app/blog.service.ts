import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { Observable, of } from 'rxjs';
import { BLOGPOSTS } from './blog-posts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  getBlogPosts(): Observable<BlogPost[]> {
    const heroes = of(BLOGPOSTS)
    return heroes;
  }

  getBlogPost(id: number): Observable<BlogPost> {
    const blogPost = BLOGPOSTS.find(b => b.id === id)!;
    return of(blogPost);
  }
}
