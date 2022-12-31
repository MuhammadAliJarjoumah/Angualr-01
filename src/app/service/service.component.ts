import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @Input() title:string = 'Rami';
  @Input() description: string = 'Bla Bla'
  @Input()  biClassName: string = 'image.png'
  constructor() { }

  ngOnInit(): void {
  }

}
