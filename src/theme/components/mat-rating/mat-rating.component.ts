import { Component, Input, OnChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'mat-rating',
  templateUrl: './mat-rating.component.html',
  styleUrls: ['./mat-rating.component.scss'],
})
export class MatRatingComponent implements OnChanges{

  constructor(private el : ElementRef<HTMLElement>){}
  
  @Input() max!:string;
  @Input() defaultValue!:string;

  prueba:Array<any> =[
    
  ]
      
  ngOnChanges( ){
    for(let i :number = 0; i<parseInt(this.max);i++ ){
      this.prueba.push(i+1);
    }
  }
  
  ngAfterViewInit(): void {
    Array.prototype.slice.call(this.el.nativeElement.querySelectorAll('input'));
    console.log()
  }
}
