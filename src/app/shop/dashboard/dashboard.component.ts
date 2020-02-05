import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public show: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }
  addTodo() {
    this.show = !this.show;
  }
  ngOnInit() {
    this.show = false;
    this.validate();


  }
  taskDetail;
  todo: string[] = [];
  progress: string[] = [];
  completed: string[] = [];
  addtask() {
    this.taskDetail = this.form.getRawValue();
    console.log(this.form.getRawValue());
    var taskData = this.form.getRawValue();
      
    if (taskData.category == "progress") {
      let progressData = taskData.task;
      this.progress.push(progressData);
      console.log(this.progress);
    }
    if (taskData.category == "todo") {
      let todoData = taskData.task;
      this.todo.push(todoData);
      console.log(this.todo);
    }
    if (taskData.category == "completed") {
      let completedData = taskData.task;
      this.completed.push(completedData);
      console.log(this.completed);
    }

  }

  validate() {
    this.form = this.fb.group({
      'task': ['', Validators.required],
      'category': ['', Validators.required]
    })
  }



}
