import { Component } from '@angular/core';
import { Model } from './model';
import { ToDoItem } from './toDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getToDoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem) {
    // tslint:disable-next-line: no-debugger
    debugger;
    if (newItem !== '') {
      this.model.items.push(new ToDoItem(newItem, false));
    }
  }
}
