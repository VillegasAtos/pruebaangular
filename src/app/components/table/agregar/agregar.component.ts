import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Alumnos } from '../../../interfaces/alumnos.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AgregarComponent>) {}
  model: Alumnos = {
    id: 0,
    nombre: '',
    apellido: '',
    edad: 0,
  };
  ngOnInit(): void {}
}
