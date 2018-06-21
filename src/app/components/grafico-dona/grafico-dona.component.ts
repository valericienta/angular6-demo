import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {


  @Input() Etiquetas: string[] = [];
  @Input() Datos: number[] = [];
  @Input() Tipo: string = '';

  @Input() inputDemo: string[] = [''];

  @ViewChild('grafico') grafico: ElementRef;

  constructor() { }

  ngOnInit() {


  }

}
