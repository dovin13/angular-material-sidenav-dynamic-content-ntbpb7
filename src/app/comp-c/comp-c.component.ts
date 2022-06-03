import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';
@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {
  constructor(public sidenavService: SidenavService) {}

  ngOnInit() {}
}