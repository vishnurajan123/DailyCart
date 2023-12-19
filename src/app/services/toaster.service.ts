import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr:ToastrService) { }

  showSuccess(msg:string) {
    this.toastr.success(msg);
  }
  showError(msg:string) {
    this.toastr.error(msg);
  }
  showWarning(msg:string) {
    this.toastr.warning(msg);
  }
}
