import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  JDA:StudentInfo[]= [];
  data :StudentInfo[]= [];
  TDI:StudentDescription[]=[];
  constructor() { 
   
  }

  

  ngOnInit(): void {
   // alert("Bader")

   fetch('https://api-test-01-read-from-excel.onrender.com/Data')
   .then(response => response.json())
   .then(json => {
     json.forEach((z:any) =>{
       let TD = new StudentDescription();
       TD.title = z.title;
       TD.description = z.description;
       TD.icon = z.icon;
       
       this.TDI.push(TD);
      })
     })









    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      json.forEach((y:any) =>{
        let JD = new StudentInfo();
        JD.username = y.username;
        
        this.JDA.push(JD);
      })
      json.forEach((x:any) => {//because the json data isn't predefined so we need to defined such as "any" type just like what we do with "x"
        let si = new StudentInfo();
        si.name = x.name;
        si.email = x.email ;
        si.website = x.website;
        si.address = JSON.stringify(x.address);
        this.data.push(si);
      });  
    })
  }
  
}

class StudentDescription
  {
    title : string =""
    description : string = "";
    icon: string = "";
    
  }




class StudentInfo
{
  name : string =""
  email : string = "";
  username: string = "";
  website: string = "";
  address:string = "";
}
