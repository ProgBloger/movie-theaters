import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { userCredentials } from '../security.model';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private securityService: SecurityService,
    private router: Router) { }

  errors: string[] = [];

  ngOnInit(): void {
  }

  register(userCredentials: userCredentials) {
    this.errors = [];
    this.securityService.register(userCredentials).subscribe(authenticationResponse => {
      this.securityService.saveToken(authenticationResponse);
      this.router.navigate(['/']);
    }, error => this.errors = parseWebAPIErrors(error));
  }
}
