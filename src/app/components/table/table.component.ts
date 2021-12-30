import { AfterViewInit, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from '../../interfaces/alumnos.interface';
import { MatPaginator } from '@angular/material/paginator';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { MatDialog } from '@angular/material/dialog';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { AgregarComponent } from './agregar/agregar.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  constructor(private alumnoSrv: AlumnosService, public dialog: MatDialog) {}
  dataSource: any;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'modificar', 'eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.getAlumnos();
  }
  ngAfterViewInit(): void {}
  getAlumnos() {
    this.alumnoSrv.getAlumnos().subscribe((res) => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Alumnos>(res);
      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar = (event: Event) => {
    console.log('event', (event.target as HTMLInputElement).value);
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
    console.log('dataSource', this.dataSource);
  };

  openDialog(objeto: any) {
    let dialogRef: any;
    console.log(objeto);
    switch (objeto.accion) {
      case 'agregar':
        dialogRef = this.dialog.open(AgregarComponent);
        break;
      case 'modificar':
        dialogRef = this.dialog.open(ModificarComponent, {
          data: objeto.element,
        });
        break;
      case 'eliminar':
        dialogRef = this.dialog.open(EliminarComponent);
        break;
    }
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
      if (typeof result !== 'undefined') {
        switch (result.message) {
          case 'agregar':
            result.model.id = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
            this.alumnoSrv.addAlumno(result.model).subscribe((res) => console.log(res));
            this.getAlumnos();
            break;
          case 'modificar':
            this.alumnoSrv.updateAlumno(result.model).subscribe((res) => {
              console.log(res);
              this.getAlumnos();
            });
            break;
          case 'eliminar':
            this.alumnoSrv.deleteAlumno(objeto.id).subscribe((res) => {
              console.log(res);
              this.getAlumnos();
            });
            break;
        }
      }
    });
  }
}
