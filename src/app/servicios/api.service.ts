import { Injectable } from "@angular/core";
import { Usuario } from "../modelos/Usuario";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ApiService {
  // private libro: Libro = { id: 0, autor: "",  id_editorial: 0,titulo:"",genero:"",numero_paginas:0,año :new Date() };
  private Url = "http://localhost:54887/api/Usuario/"; // URL to web api

  constructor(private http: HttpClient) {}

  public getUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.Url}List/0`);
  }
  public getLibroText(text: string): Observable<Usuario> {
    const path = `${this.Url}ListText/${text}`;
    return this.http.get<Usuario>(path);
  }
}
