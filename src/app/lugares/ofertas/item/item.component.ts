import { Component, Input, OnInit } from '@angular/core';
import { LugaresModel } from '../../model/lugares.model';

@Component({
  selector: 'app-oferta-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemOfertaComponent  implements OnInit {
  @Input() oferta: LugaresModel | undefined
  constructor() { }

  ngOnInit() {}

  getDate(){
    return new Date();
  }

}
