import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    //freeze another sound when listening to cat voice
    isSoundFreeze: boolean = false;

  locationUrl: string = "https://www.google.hu/maps/place/Szeged/@46.232789,20.1404686,11z/data=!3m1!4b1!4m6!3m5!1s0x474487e22bcce54b:0x400c4290c1e1190!8m2!3d46.2530102!4d20.1414253!16zL20vMDIzZzFo?entry=ttu";

  mailUrl: string = "mailto:kismarczirobi@gmail.com@?subject=feedback";

  playCatVoice() {
    if(!this.isSoundFreeze){
    const catSound = new Audio('assets/sound/cat.mp3');
    catSound.play();
    this.isSoundFreeze = true;
    setTimeout(() => {
      this.isSoundFreeze = false;
    }, 2000);
    }
  }
}
