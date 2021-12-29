import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregaralumno',
  templateUrl: './agregaralumno.component.html',
  styleUrls: ['./agregaralumno.component.scss'],
})
export class AgregaralumnoComponent implements OnInit {
  constructor() {}
  model: any = {
    nombre: '',
    apellido: '',
    edad: '',
  };

  hide = true;
  ngOnInit(): void {}
  onChange = () => {
    console.log(this.model.nombre);
  };
}
