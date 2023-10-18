import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  question: string = "";
  text: any = "Do you ever get the feeling monitored online?";
  currentIndex: number = 0;

  private ctx: CanvasRenderingContext2D;
  private letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
  private lettersArray: string[] = [];
  private fontSize = 10;
  private columns: number;
  private drops: number[] = [];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.animateText();
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.width = window.innerWidth - 20;
    this.canvas.nativeElement.height = window.innerHeight - 77;


    this.lettersArray = this.letters.split('');
    this.columns = this.canvas.nativeElement.width / this.fontSize;

    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = 1;
    }

    setInterval(() => this.draw(), 60);
  }

  draw() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.lettersArray[Math.floor(Math.random() * this.lettersArray.length)];
      this.ctx.fillStyle = '#0f0';
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
      this.drops[i]++;
      if (this.drops[i] * this.fontSize > this.canvas.nativeElement.height && Math.random() > 0.95) {
        this.drops[i] = 0;
      }
    }
  }

  animateText() {
    const textElement = document.querySelector('.text-animation');
    setInterval(() => {
      if (this.currentIndex < this.text.length) {
        this.question += this.text[this.currentIndex];
        this.currentIndex++;
      }
    }, 200);
  }
}
