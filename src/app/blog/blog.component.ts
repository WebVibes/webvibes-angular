import { Component } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  blogPosts: BlogPost[] = [];
  threePostsCount: Array<number> = Array();

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(): void {
    this.blogService.getBlogPosts().subscribe((blogPosts) => {
      this.blogPosts = blogPosts.reverse();
      this.threePostsCount = Array.from(
        Array(Math.ceil(blogPosts.length / 3)).keys()
      );
    });
  }
}
