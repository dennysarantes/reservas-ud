import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  form?: FormGroup;
  usuarioLabel = '';
  senhaLabel = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.montarForm();

    this.form
      ?.get('usuario')
      ?.valueChanges.subscribe(
        (usuario) => (this.usuarioLabel = !!usuario ? 'Usuário' : '')
      );

    this.form
      ?.get('senha')
      ?.valueChanges.subscribe(
        (senha) => (this.senhaLabel = !!senha ? 'Senha' : '')
      );
  }

  montarForm() {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  login() {
    const dados = this.form?.getRawValue();

    this.authService.login();

  }
}
