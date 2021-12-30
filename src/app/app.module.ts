import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './components/table/table.component';
import { AgregaralumnoComponent } from './components/agregaralumno/agregaralumno.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosService } from './services/alumnos.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EliminarComponent } from './components/table/eliminar/eliminar.component';
import { ModificarComponent } from './components/table/modificar/modificar.component';
import { AgregarComponent } from './components/table/agregar/agregar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    AgregaralumnoComponent,
    ModificarComponent,
    EliminarComponent,
    AgregarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [
    AlumnosService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
