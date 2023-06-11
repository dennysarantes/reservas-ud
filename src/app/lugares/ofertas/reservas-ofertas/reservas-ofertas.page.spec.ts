import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasOfertasPage } from './reservas-ofertas.page';

describe('ReservasOfertasPage', () => {
  let component: ReservasOfertasPage;
  let fixture: ComponentFixture<ReservasOfertasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservasOfertasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
