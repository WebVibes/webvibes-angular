import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-gyik',
  templateUrl: './gyik.component.html',
  styleUrls: ['./gyik.component.css']
})
export class GyikComponent {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 960px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


}
