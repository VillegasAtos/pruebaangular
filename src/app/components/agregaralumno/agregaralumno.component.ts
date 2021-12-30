import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../../interfaces/alumnos.interface';
import { AlumnosService } from '../../services/alumnos.service';
@Component({
  selector: 'app-agregaralumno',
  templateUrl: './agregaralumno.component.html',
  styleUrls: ['./agregaralumno.component.scss'],
})
export class AgregaralumnoComponent implements OnInit {
  constructor(private alumnosSvc: AlumnosService) {}

  model: Alumnos = {
    id: 0,
    nombre: '',
    apellido: '',
    edad: 0,
  };

  hide = true;
  ngOnInit(): void {}

  onSubmit = () => {
    this.model.id = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
    console.log(this.model);
    this.alumnosSvc.addAlumno(this.model).subscribe((res) => console.log(res));
  };
}
