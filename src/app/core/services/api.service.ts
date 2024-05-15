import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected api: string;
  constructor(private http: HttpClient) {
    this.api = environment.API_URL;
  }

  /**
   * Metodo generico que permite guardar un objeto
   * @param urlSegment segmento de la url 
   * @param form formulario basado en un modelo
   * @returns Observable tipo Message
   */
  protected save<T>(urlSegment: string, form: T): Observable<Message<null>> {
    return this.http.post<Message<null>>(this.api.concat(urlSegment), form)
  }

  /**
   * Metodo generico que permite actualizar un registro
   * @param urlSegment string- url
   * @param form formulario de actualizacion
   * @returns Observable tipo Message
   */
  protected update<T>(urlSegment: string, form: T): Observable<Message<null>> {
    return this.http.put<Message<null>>(this.api.concat(urlSegment), form);
  }

  /**
   * Metodo generico para eliminar objetos
   * @param urlSegment url para eliminar
   * @param id identificador de la tabla
   * @returns 
   */
  protected delete(urlSegment: string, id: number): Observable<Message<null>> {
    return this.http.delete<Message<null>>(`${this.api.concat(urlSegment)}/${id}`);
  }

  protected getAll<T>(urlSegment: string): Observable<T> {
    return this.http.get<T>(this.api.concat(urlSegment))
  }


}
