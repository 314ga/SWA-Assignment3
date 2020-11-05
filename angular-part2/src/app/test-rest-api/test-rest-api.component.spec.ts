import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRestApiComponent } from './test-rest-api.component';

describe('TestRestApiComponent', () => {
  let component: TestRestApiComponent;
  let fixture: ComponentFixture<TestRestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRestApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
