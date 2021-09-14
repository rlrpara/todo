import { Component } from '@angular/core';

import { Todo } from './models/todos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, '', false));
    this.todos.push(new Todo(1, 'ir ao supermercado.', false));
    this.todos.push(new Todo(1, 'cortar o cabelo.', false));
  }

  alteraTexto() {
    this.title = 'Teste';
  }
}
