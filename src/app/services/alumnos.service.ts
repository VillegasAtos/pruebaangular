import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Alumnos } from '../interfaces/alumnos.interface';
@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private url = 'http://localhost:3000/alumnos';
  constructor(private http: HttpClient) {}

  addAlumno(alumno: Alumnos): Observable<any> {
    console.log('estas en post alumno', alumno);
    return this.http.post<any>(this.url, alumno).pipe(map((data) => data));
  }
  getAlumnos(): Observable<Alumnos[]> {
    console.log('estas en get alumno');
    return this.http.get<Alumnos[]>(this.url).pipe(map((data) => data));
  }
  deleteAlumno(id: number): Observable<any> {
    console.log('estas en delete alumno');
    return this.http.delete<any>(`${this.url}/${id}`).pipe(map((data) => data));
  }
  updateAlumno(alumno: Alumnos): Observable<any> {
    console.log('estas en update alumno');
    return this.http.put<any>(`${this.url}/${alumno.id}`, alumno).pipe(map((data) => data));
  }
}
