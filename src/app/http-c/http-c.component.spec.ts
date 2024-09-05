import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCComponent } from './http-c.component';

describe('HttpCComponent', () => {
  let component: HttpCComponent;
  let fixture: ComponentFixture<HttpCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
