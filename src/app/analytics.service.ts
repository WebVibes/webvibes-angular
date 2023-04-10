import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

declare const ga: any;
export interface AnalyticsEvent {
  type: 'PAGEVIEW' | 'EVENT';
  category?: string;
  action?: string;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  eventsQueue$ = new ReplaySubject<AnalyticsEvent>();

  constructor() {}

  public startTracking(): void {
    ga('create', 'G-TB417DX63C', 'auto');
    this.subscribeToEvents();
  }

  private subscribeToEvents(): void {
    this.eventsQueue$.subscribe((e: AnalyticsEvent) => {
      if (e.type === 'PAGEVIEW') {
        ga('send', {
          hitType: 'pageview',
          page: e.label,
        });
      } else if (e.type === 'EVENT') {
        ga('send', {
          hitType: 'event',
          eventCategory: e.category,
          eventAction: e.action,
          eventLabel: e.label,
        });
      }
    });
  }

  public trackVirtualPageview(url: string): void {
    this.eventsQueue$.next({ type: 'PAGEVIEW', label: url });
  }

  public trackEvent(category: string, action: string, label: string) {
    this.eventsQueue$.next({ type: 'EVENT', category, action, label });
  }
}
