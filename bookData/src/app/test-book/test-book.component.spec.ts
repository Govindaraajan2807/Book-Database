import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBookComponent } from './test-book.component';

describe('TestBookComponent', () => {
  let component: TestBookComponent;
  let fixture: ComponentFixture<TestBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
