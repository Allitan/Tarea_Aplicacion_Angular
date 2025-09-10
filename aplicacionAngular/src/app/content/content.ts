import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-content',
  imports: [FormsModule, CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.css',
  standalone: true,
})
export class Content {
  tareas: string[] = ['Aprendiendo Angular', 'Investigando sobre Angular']
  nuevaTarea: string ='';

  agregarTarea(){
    if(this.nuevaTarea.trim() !==''){
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea ='';
    }
  }
}
