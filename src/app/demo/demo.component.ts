import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  title: string=  "Demo componnent";
  @Input() message: string= "Hello";
  constructor(){
    console.log("Demo Componenet Conustructor Called")
    console.log(this.title)
    console.log(this.message)
  }

}
