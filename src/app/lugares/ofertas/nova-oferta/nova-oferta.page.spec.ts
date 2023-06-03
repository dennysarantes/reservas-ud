import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaOfertaPage } from './nova-oferta.page';

describe('NovaOfertaPage', () => {
  let component: NovaOfertaPage;
  let fixture: ComponentFixture<NovaOfertaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovaOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
