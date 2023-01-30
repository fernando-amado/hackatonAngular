import { Component, Input, OnInit } from '@angular/core';
import { Utilidades } from '../../utilidades/utilidades';

@Component({
  selector: 'mat-avatar',
  templateUrl: './mat-avatar.component.html',
  styleUrls: ['./mat-avatar.scss']
})

export class MatAvatarComponent implements OnInit{;

  @Input() nombre!:string;
  resultado :string = " ";

  ngOnInit(): void {
  this.resultado = Utilidades.partirIniciales(this.nombre,2).toUpperCase();
  }
}