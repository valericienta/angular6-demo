import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})

export class ProgressComponent implements OnInit {

  progreso1 = 50;
  progreso2 = 10;
  constructor() { }

  ngOnInit() {
  }
}
