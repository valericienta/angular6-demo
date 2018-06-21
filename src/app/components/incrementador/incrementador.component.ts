import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Output() cambiovalor: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {

  }

  onChange(newValue: number) {
    // let elemHTML: any = document.getElementsByName("progreso");
    console.log(this.txtProgress);
    if (newValue > 100) this.progreso = 100;
    else if (newValue < 0) this.progreso = 0;
    else this.progreso = newValue;
    // elemHTML[0].value = Number(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambiovalor.emit(this.progreso);
  }

  cambiarValor(valor) {
    this.progreso = this.progreso + valor;
    this.cambiovalor.emit(this.progreso);
  }

  ngOnInit() {

  }


}
