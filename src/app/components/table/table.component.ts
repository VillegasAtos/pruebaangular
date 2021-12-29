import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AffectedFileResult } from 'typescript';
import { Alumnos } from '../../interfaces/alumnos.interface';
import { MatPaginator } from '@angular/material/paginator';

const alumnos: Alumnos[] = [
  { id: 1, nombre: 'Julio', apellido: 'Villegas', edad: 15 },
  { id: 2, nombre: 'Cesar', apellido: 'Venzor', edad: 15 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  constructor() {}
  dataSource: any;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'modificar', 'eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(alumnos);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  filtrar = (event: Event) => {
    console.log('event', (event.target as HTMLInputElement).value);
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
    console.log('dataSource', this.dataSource);
  };
}
