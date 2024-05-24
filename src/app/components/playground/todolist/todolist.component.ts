import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  userInput: string = '';
  todoList: { name: string, completed: boolean }[] = [{ name: 'Task 1', completed: false }, { name: 'Task 2', completed: true }, { name: 'Task 3', completed: false }, { name: 'Task 4', completed: true }];
  incompleteCount: number = this.todoList.length;

  constructor() { }
  ngOnInit(): void {
    this.incompleteCount = this.todoList.filter((todo) => !todo.completed).length;
  }

  addTodo() {
    if (this.userInput != '') {
      this.todoList.push({ name: this.userInput, completed: false });
      this.incompleteCount = this.todoList.filter((todo) => !todo.completed).length;
      this.userInput = '';
    }
  }

  toggleComplete(index: number) {
    this.todoList[index].completed = !this.todoList[index].completed;
    this.incompleteCount = this.todoList.filter((todo) => !todo.completed).length;
  }
}
