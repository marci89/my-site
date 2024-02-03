import { Component, OnInit } from '@angular/core';
import { Reference } from 'src/app/Interfaces/reference.interface';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit{
  references: Reference[];

  ngOnInit(): void {

    this.listReferences();
  }

  listReferences(){
    this.references = [
      {
        title: 'English Helper',
       // url: 'https://www.kismarczi.hu/english-helper/',
        url: 'https://github.com/marci89/EnglishHelper',
        image: 'assets/images/references/english-helper.png'
      },
      {
        title: 'KJ Brain Developer',
      //  url: 'https://www.kismarczi.hu/kj-brain-developer/',
        url: 'https://github.com/marci89/kj-brain-developer',
        image: 'assets/images/references/kj-brain-developer.png'
      }
    ]
  }
}
