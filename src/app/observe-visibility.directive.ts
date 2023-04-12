import { Directive, OnDestroy, OnInit, AfterViewInit, Input, Output, EventEmitter, ElementRef, Renderer2 } from "@angular/core";
import { Subject, delay, filter } from "rxjs";

@Directive({
  selector: '[fadeIn]',
})
export class ObserveVisibilityDirective implements OnDestroy, OnInit{
  @Input() thresholdMin = 0.1;
  @Input() thresholdMax = 0.9;
  @Output() isVisible = new EventEmitter<string>();

  private observer: IntersectionObserver | undefined;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.addClassName('not-visible');
  }

  //TODO: possibly implement debouncing

  ngOnInit() {
    this.createObserver();
  }

  // ngAfterViewInit() {
  //   this.addClassName('not-visible');
  // }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    // this.subject$.next();
    // this.subject$.unsubscribe();
  }


  addClassName(className) {
    this.renderer.addClass(this.element.nativeElement, className);
    this.isVisible.emit();
  }

  removeClassName(className) {
    if (this.element.nativeElement.classList.contains(className)) {
      this.renderer.removeClass(this.element.nativeElement, className);
    }
  }

  createObserver() {
    const options = {
      threshold: [this.thresholdMin, this.thresholdMax],
    };

    const callback = (entries) => {
      entries &&
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            this.addClassName('visible');
          } else {
            this.removeClassName('visible');
          }
        });
    };

    this.observer = new IntersectionObserver(callback, options);
    const target = this.element.nativeElement;
    target && this.observer.observe(target);
  }
}