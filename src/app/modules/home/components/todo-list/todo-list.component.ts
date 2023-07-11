import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{
 
  public taskList: Array<TaskList>= JSON.parse(localStorage.getItem("list") || '[]');
  public deleteItem(event: number) {
    this.taskList.splice(event, 1);
  }
  public deleteAll(){
    const confirm = window.confirm("Você realmente deseja Deletar tudo?");
    
    if(confirm){
      this.taskList = [];
    }

  }
  public setEmit(event: string){
    this.taskList.push({task: event, checked: false});
  }
  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?");
      if(confirm == true){
        this.deleteItem(index);
      }
    }
  }
  public setLocalStorage(){
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    localStorage.setItem("list", JSON.stringify(this.taskList));
  }

  constructor(){}
  ngDoCheck(): void {
    this.setLocalStorage();
  }



}
