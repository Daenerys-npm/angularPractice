import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInDirComponent } from './built-in-dir.component';

describe('BuiltInDirComponent', () => {
  let component: BuiltInDirComponent;
  let fixture: ComponentFixture<BuiltInDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
