import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  locationUrl: string = "https://www.google.hu/maps/place/Szeged/@46.232789,20.1404686,11z/data=!3m1!4b1!4m6!3m5!1s0x474487e22bcce54b:0x400c4290c1e1190!8m2!3d46.2530102!4d20.1414253!16zL20vMDIzZzFo?entry=ttu";

  mailUrl: string = "mailto:kismarczirobi@gmail.com@?subject=feedback";
}
