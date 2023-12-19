import { Component } from '@angular/core';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  constructor(private toaster:ToasterService){}

  addtoWishlist(){
    if(sessionStorage.getItem("token")){
      this.toaster.showSuccess("proceed to add item to cart")
    }
    else{
   this.toaster.showError("Operation denied please login....")
    }
  }

  adttoCart(){
    if(sessionStorage.getItem("token")){
      this.toaster.showSuccess("proceed to add item to cart")
    }
    else{
      this.toaster.showError("Operation denied please login....")
    }
  }

}
