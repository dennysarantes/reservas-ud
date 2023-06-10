import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lugar-detalhe',
  templateUrl: './lugar-detalhe.page.html',
  styleUrls: ['./lugar-detalhe.page.scss'],
})
export class LugarDetalhePage implements OnInit {

  constructor(/* private router:Router, */ private navCtrl: NavController) { }

  ngOnInit() {
  }

  reservarLugar = () => {
    //this.router.navigateByUrl('/lugares/tabs/procurar');
    this.navCtrl.navigateBack('/lugares/tabs/procurar')
  }
}
