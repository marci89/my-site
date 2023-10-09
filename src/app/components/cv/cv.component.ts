import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent  {
  pdfUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/pdf/Kismarczi_CV.pdf');
  }
}
