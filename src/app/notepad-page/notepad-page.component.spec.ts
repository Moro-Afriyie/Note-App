import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadPageComponent } from './notepad-page.component';

describe('NotepadPageComponent', () => {
  let component: NotepadPageComponent;
  let fixture: ComponentFixture<NotepadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotepadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
