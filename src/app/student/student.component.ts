import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() name = 'MAJ';
  income = 12458455 ;
  clickMe(){
    alert(this.name)
  }
  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

}
