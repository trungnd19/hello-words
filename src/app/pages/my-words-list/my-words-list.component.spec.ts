import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWordsListComponent } from './my-words-list.component';

describe('MyWordsListComponent', () => {
  let component: MyWordsListComponent;
  let fixture: ComponentFixture<MyWordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWordsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
