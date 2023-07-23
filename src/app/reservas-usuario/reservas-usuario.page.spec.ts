import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasUsuarioPage } from './reservas-usuario.page';

describe('ReservasUsuarioPage', () => {
  let component: ReservasUsuarioPage;
  let fixture: ComponentFixture<ReservasUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservasUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
