import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarOfertaPage } from './editar-oferta.page';

describe('EditarOfertaPage', () => {
  let component: EditarOfertaPage;
  let fixture: ComponentFixture<EditarOfertaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
