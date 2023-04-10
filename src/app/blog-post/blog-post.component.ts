import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blog-post';
import { Observable } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  @ViewChild('simpleDiv', { static: true }) simple?: ElementRef<HTMLElement>;
  
  @Input() blogPost?: BlogPost;
  innerHtmlString?: SafeHtml;

  @ViewChild('foo', {static: true}) foo?: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getBlogPost(id);
  }

  ngAfterViewInit() {
    this.simple!.nativeElement.innerHTML = 'AAA';
  }

  getBlogPost(id: number): void {
    this.blogService.getBlogPost(id).subscribe(
      blogPost => {
        this.blogPost = blogPost;
        this.getBlogContent(blogPost.path);
      }
    );
  }

  public getBlogContent(path: string): void {
    this.blogService.getBlogPostContent(path).subscribe(
      content => {
        this.foo=content;
      }
    );
    console.log(this.innerHtmlString);
  }
}
