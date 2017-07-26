import { Component, OnInit } from '@angular/core';
import { BearsService } from "../services/bears.service";

@Component({
  selector: 'app-bears',
  templateUrl: './bears.component.html',
  styleUrls: ['./bears.component.css'],
  providers: [BearsService]
})
export class BearsComponent implements OnInit {
  bears : any = [];

  constructor(private bearsService:BearsService) { }

  ngOnInit() {
    this.bearsService.getAllBears().subscribe(bears => {
      this.bears = bears
    });
  }

}
