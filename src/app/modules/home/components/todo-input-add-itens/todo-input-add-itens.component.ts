import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emitItem = new EventEmitter();
  
  public addItem: string = "";

  public submitItem(){
    this.addItem = this.addItem.trim();
    if(this.addItem){
      this.emitItem.emit(this.addItem);
      this.addItem = "";
    }
    
  }
}
