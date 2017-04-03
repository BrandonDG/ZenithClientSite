import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { ZenithEventService } from '../zenith-event.service'
import { EventProgram } from '../event-program';
import { ZenEvent } from '../zen-event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, ZenithEventService]
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = true;
    returnUrl: string = 'https://localhost:4200/home';
    public loggedIn: boolean = false;
    /*
    constructor(private authenticationService: AuthenticationService,
        private router: Router) { } */
    constructor(private authenticationService: AuthenticationService,
        private router: Router) { }

    ngOnInit() {
    }

    login() {
       this.authenticationService.login(this.model.username, this.model.password);
    }
}
