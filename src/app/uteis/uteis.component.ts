import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-uteis',
  templateUrl: './uteis.component.html',
  styleUrls: ['./uteis.component.css']
})
export class UteisComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert ('Sessão expirou')
      this.router.navigate(['/inicio'])
    }
  }
  }


