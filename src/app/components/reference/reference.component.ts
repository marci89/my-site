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
        url: 'https://www.kismarczi.hu/english-helper/',
        image: 'assets/images/references/english-helper.png'
      }
    ]
  }
}
