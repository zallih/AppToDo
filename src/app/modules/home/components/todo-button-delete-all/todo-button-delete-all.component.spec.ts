import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDeleteAllComponent } from './todo-button-delete-all.component';

describe('TodoButtonDeleteAllComponent', () => {
  let component: TodoButtonDeleteAllComponent;
  let fixture: ComponentFixture<TodoButtonDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoButtonDeleteAllComponent]
    });
    fixture = TestBed.createComponent(TodoButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
