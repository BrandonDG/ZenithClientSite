import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { ZenithEventService } from '../zenith-event.service'
import { EventProgram } from '../event-program';
import { Event } from '../event';
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
    public test: Event[];
    public test2: IterableIterator<Event>;
    /*
    constructor(private authenticationService: AuthenticationService,
        private router: Router) { } */
    constructor(private authenticationService: AuthenticationService,
        private router: Router,
        private zenithEventService: ZenithEventService) { }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //this.authenticationService.logout();
    }

    //{{ authenticationService.token }}

    login() {
        // this.loading = true;
        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
        /*
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {

                    this.router.navigate([this.returnUrl]);
                } else {
                    this.router.navigate([this.returnUrl]);
                    this.loading = false;
                }
            }); */
        let apievents: any[] = [];
        let eventprograms: any[] = [];

        this.authenticationService.login(this.model.username, this.model.password);
        this.zenithEventService.getZenithEvents().then(ev => this.test = ev as Event[]);
        //this.zenithEventService.getZenithEventById(-5).then(ev => apievents = ev);
        //this.zenithEventService.getZenithEventById(0).then(ev => this.test = ev.length);
        //Promise.resolve(this.zenithEventService.getZenithEvents().then(ev => this.test = ev.pop().activityId));
        //this.zenithEventService.getZenithEvents().then(ev => eventprograms = ev);
        //this.test = 5000;
        //this.test = eventprograms.length;
        //this.test2 = this.test.values();
        this.authenticationService.isLoggedIn = true;

        //this.router.navigate([this.returnUrl]);
    }
}
