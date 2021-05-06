import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotePageComponent } from './add-note-page.component';

describe('AddNotePageComponent', () => {
  let component: AddNotePageComponent;
  let fixture: ComponentFixture<AddNotePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
