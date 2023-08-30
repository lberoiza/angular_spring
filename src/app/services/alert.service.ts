import { Injectable } from '@angular/core';
import sweetAlert from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public showSuccess(title: string, htmlContent: string){
    sweetAlert.fire(title,htmlContent,'success').then(() => {});
  }

}
