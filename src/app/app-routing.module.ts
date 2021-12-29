import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { AgregaralumnoComponent } from './components/agregaralumno/agregaralumno.component';
const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'agregar', component: AgregaralumnoComponent },
  { path: '**', redirectTo: 'table' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
