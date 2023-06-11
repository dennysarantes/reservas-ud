import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcurarPage } from './procurar.page';

describe('ProcurarPage', () => {
  let component: ProcurarPage;
  let fixture: ComponentFixture<ProcurarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProcurarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
