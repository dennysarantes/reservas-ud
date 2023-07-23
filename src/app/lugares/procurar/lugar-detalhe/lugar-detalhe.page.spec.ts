import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugarDetalhePage } from './lugar-detalhe.page';

describe('LugarDetalhePage', () => {
  let component: LugarDetalhePage;
  let fixture: ComponentFixture<LugarDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LugarDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
