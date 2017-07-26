import { Component, OnInit } from '@angular/core';
import { BearsService } from "../service/bears.service";

@Component({
  selector: 'app-bears',
  templateUrl: './bears.component.html',
  styleUrls: ['./bears.component.css']
})
export class BearsComponent implements OnInit {
  bears: any = [];

  constructor(private bearsService: BearsService) { }

  ngOnInit() {
    this.bearsService.getAllBears().then(bears => {
      this.bears = bears
    });
  }

  delete(bear: any): void {
    this.bearsService.delete(bear._id).then(() => {
      this.bears = this.bears.filter(b => b !== bear);
    });
  }

  add(bearName: string): void {
    bearName = bearName.trim();
    if (!bearName) {
      return;
    }
    this.bearsService.create(bearName).then(data => this.bears.push(data.bear) );
  }

}
