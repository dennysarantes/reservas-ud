import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';
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
    private formBuilder: FormBuilder,
    private loadingController: LoadingController
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
    /* const dados = this.form?.getRawValue(); */
    this.loadingController.create({
      keyboardClose:true,
      message:'Autenticando...'
    }).then((element) => {
      element.present(); //Responsável por mostrar o componente de carregamento...
      setTimeout(() => {
        this.authService.login();
        this.loadingController.dismiss(); // Responsável por esconder o componente de carregamento...
      }, 2500);
    })


  }
}
