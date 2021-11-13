import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './../../components/template/header/header.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Ranking',
      icon: 'storefront',
      routeUrl: '/empresas'
    }
  }

  ngOnInit(): void {
  }

}
