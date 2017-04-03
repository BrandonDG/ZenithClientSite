import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { EVENT_DATA } from './data/dummy-data';
import { ACTIVITY_DATA } from './data/dummy-data';
import { ZenActivity } from './zen-activity';
import { ZenEvent } from './zen-event';
import { EventProgram } from './event-program';
import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service'

@Injectable()
export class ZenithEventService {

  private BASE_URL = "http://zenithsocietya2.azurewebsites.net/";

  constructor(private authenticationService: AuthenticationService, private http: Http) { }

  getZenithEventsFromAPI(): Promise<ZenEvent[]> {
    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.getAuthorization()});
    headers.append('Content-Type', 'application/json');
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.get(this.BASE_URL + "api/EventsApi", requestOptions)
             .toPromise()
             .then(response => response.json() as ZenEvent[])
             .catch(this.handleError);
  }

  getZenithActivitiesFromAPI(): Promise<ZenActivity[]> {
    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.getAuthorization()});
    headers.append('Content-Type', 'application/json');
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.get(this.BASE_URL + "api/ActivitiesApi", requestOptions)
            .toPromise()
            .then(response => response.json() as ZenActivity[])
            .catch(this.handleError);
  }

  getActivityDescription(id: number, acts: ZenActivity[]): string {
    for (var a of acts) {
      if (a.activityId === id) {
        return a.activityDescription;
      }
    }
    return "";
  }


  getZenithEvents(): Promise<EventProgram[]> {

    let event_programs: EventProgram[] = [];

    this.getZenithEventsFromAPI()
      .then(ev => {
          this.getZenithActivitiesFromAPI().then(ac => {
              let old: string = "";
              for (var e of ev) {  
                  let ep = new EventProgram();   
                  ep.event_date = AppComponent.getDecoDate(e.fromTime.substr(0, 10));
                  ep.event_time = e.fromTime.substr(11, 5) + " - " + e.toTime.substr(11, 5);
                  ep.event_name = this.getActivityDescription(e.activityId, ac);
                  if (ep.event_date !== old) {
                    old = ep.event_date;
                    ep.show_date = true;
                  } else {
                    ep.show_date = false;
                  }
                  event_programs.push(ep);
              } 

          })
      });

    return Promise.resolve(event_programs);
  }

  getZenithEventById(id: number): Promise<EventProgram[]> {

    let d = new Date();
    d.setTime(d.getTime() + AppComponent.DAY_OFFSET * (id * 7));
    if (d.getDay() === 0)
      d.setTime(d.getTime() - AppComponent.DAY_OFFSET * 1);

    let lastSun = new Date();
    lastSun.setTime(d.getTime() - AppComponent.DAY_OFFSET * d.getDay()); 
    let nextMon = new Date();
    nextMon.setTime(lastSun.getTime() + AppComponent.DAY_OFFSET * 8);  

    let event_programs: EventProgram[] = [];

    this.getZenithEventsFromAPI()
      .then(ev => {
          this.getZenithActivitiesFromAPI().then(ac => {
              let old: string = "";
              for (var e of ev) {  
                  let eDate = AppComponent.getDateFromStr2(e.fromTime.substr(0, 10));
                  if (eDate > lastSun && eDate < nextMon) {
                      let ep = new EventProgram();
                      ep.event_date = AppComponent.getDecoDate(e.fromTime.substr(0, 10));
                      ep.event_time = e.fromTime.substr(11, 5) + " - " + e.toTime.substr(11, 5);
                      ep.event_name = this.getActivityDescription(e.activityId, ac);
                      if (ep.event_date !== old) {
                        old = ep.event_date;
                        ep.show_date = true;
                      } else {
                        ep.show_date = false;
                      }
                      event_programs.push(ep);
                  }   
              } 
          })
      });

    return Promise.resolve(event_programs);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
