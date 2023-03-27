import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';

class Contact {

  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public type: string,
    public message: string,
    public check: boolean,
  ) {  }

}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model = new Contact('', '', '', '', '', false);

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 960px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  
  invokeAWSAPI(form: any) {
    console.log(this.model);
    if (!this.model.check) {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }
    debugger;
    // form = document.getElementById("contact-form");
    // if (form && !form.checkValidity()) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   form.classList.add("was-validated");
    //   return;
    // }
    // event.preventDefault();
    // var name = $("#name").val();
    // var email = $("#email").val();
    // var phone = $("#phone").val();
    // var type = $("#type").val();
    // var msg = $("#msg").val();
    // var data = {
    //   name: name,
    //   email: email,
    //   phone: phone,
    //   type: type,
    //   msg: msg,
    // };
    // $.ajax({
    //   type: "POST",
    //   url: "https://22ncmi5gxh.execute-api.eu-central-1.amazonaws.com/WebVibesStage/webvibes-contact-form",
    //   dataType: "json",
    //   crossDomain: "true",
    //   contentType: "application/json; charset=utf-8",
    //   data: JSON.stringify(data),
    //   success: function () {
    //     document.getElementById("contact-form").reset();
    //     const toastLiveExample = document.getElementById("successToast");
    //     const toast = new bootstrap.Toast(toastLiveExample);
    //     toast.show();
    //   },
    //   error: function () {
    //     const toastLiveExample = document.getElementById("unsuccessToast");
    //     const toast = new bootstrap.Toast(toastLiveExample);
    //     toast.show();
    //   },
    // });
  }
 
}
