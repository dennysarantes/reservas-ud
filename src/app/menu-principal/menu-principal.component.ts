import { AuthService } from './../auth/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {
  constructor(
    private menuCtrl: MenuController,
    private navController: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  navegar(id: string) {
    this.navController.navigateForward('/lugares/tabs/' + id);
    this.menuCtrl.close();
  }

  logout() {this.authService.logout() }
}
