import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError } from 'rxjs';

class Contact {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public type: string,
    public message: string,
    public check: boolean
  ) {}
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  }),
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  model = new Contact('', '', '', '', '', false);

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 960px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  postForm(data: any): Observable<any> {
    return this.http.post<any>(
      'https://22ncmi5gxh.execute-api.eu-central-1.amazonaws.com/WebVibesStage/webvibes-contact-form',
      data,
      httpOptions
    );
  }

  openSnackbar(text: string, isSuccess: boolean) {
    this._snackBar.open(text, '', {
      duration: isSuccess ? 10000 : 20000,
      panelClass: isSuccess
        ? 'contact-success-snackbar'
        : 'contact-error-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  invokeAWSAPI(form: any) {
    if (!form.valid) {
      return;
    }
    if (!this.model.check) {
      Object.keys(form.controls).forEach((key) => {
        form.controls[key].markAsTouched();
      });
      return;
    }
    var data = {
      name: this.model.name,
      email: this.model.email,
      phone: this.model.phone,
      type: this.model.type,
      msg: this.model.message,
    };
    this.postForm(data)
      .pipe(
        catchError((err) => {
          this.openSnackbar(
            'Sajnos nem sikerült továbbítani az adatokat rajtunk kívül álló okok miatt. Kérlek írj nekünk az info@webvibes.hu email címre.',
            false
          );
          return err;
          // handle error
        })
      )
      .subscribe((resp) => {
        console.log(resp);
        this.openSnackbar(
          'Köszönjük, hogy kitöltötted! Hamarosan felvesszük veled a kapcsolatot!',
          true
        );
      });
  }
}
