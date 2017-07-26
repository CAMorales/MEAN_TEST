import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { BearsService } from '../service/bears.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-bear-detail',
  templateUrl: './bear-detail.component.html',
  styleUrls: ['./bear-detail.component.css']
})
export class BearDetailComponent implements OnInit {
  bear: any;

  constructor(private bearsService: BearsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.bearsService.getBear(params.get('id')))
      .subscribe(bear => this.bear = bear);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.bearsService.update(this.bear)
      .then(() => this.goBack());
  }

  delete(bear: any): void {
    this.bearsService.delete(bear._id).then(() => this.goBack());
  }

}
