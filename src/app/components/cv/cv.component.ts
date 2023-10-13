import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  pdfUrl: SafeResourceUrl;
  width = window.innerWidth - 5;
  height = window.innerHeight - 100;

  constructor(private sanitizer: DomSanitizer, private translate: TranslateService) { }

  ngOnInit() {
    this.translate.onLangChange.subscribe(event => {
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/pdf/kismarczi-cv-' + event.lang + '.pdf');
    });

    const lang = this.translate.currentLang;
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/pdf/kismarczi-cv-' + lang + '.pdf');
  }
}
