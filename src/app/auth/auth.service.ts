import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _usuarioEstaAutenticado = false; //TODO: Alterar para false

  constructor(private router: Router) {}

  get usuario(){ return this._usuarioEstaAutenticado}

  login() {
    this._usuarioEstaAutenticado = true;
    this.router.navigateByUrl('/');
  }

  logout() {
    this._usuarioEstaAutenticado = false;
    this.router.navigateByUrl('/auth');
  }
}
