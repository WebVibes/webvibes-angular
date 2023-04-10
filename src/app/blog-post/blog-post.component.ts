import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blog-post';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { BLOGPOSTS } from '../blog-posts';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostComponent implements AfterViewInit {
  @Input() blogPost?: BlogPost;
  blogContent;
  randomBlogPost?: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.getBlogPost(slug);
  }

  ngAfterViewInit() {
    this.http
      .get(this.blogPost!.path, { responseType: 'text' })
      .subscribe((res) => {
        this.blogContent = this.sanitizer.bypassSecurityTrustHtml(res);
      });
  }

  getBlogPost(slug: any): void {
    this.blogService.getBlogPost(slug).subscribe((blogPost) => {
      this.blogPost = blogPost;
      // get a random post
      let excludedBlogPosts = BLOGPOSTS.filter((x) => x.id != blogPost.id);
      this.randomBlogPost =
        excludedBlogPosts[Math.floor(Math.random() * excludedBlogPosts.length)];
    });
  }
}
