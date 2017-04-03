import { Injectable } from '@angular/core';
import { DUMMY_DATA } from './data/dummy-data';
import { EventProgram } from './event-program';
import { Event } from './event';
import { AppComponent } from './app.component';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// private BASE_URL = "http://flintstones.zift.ca/api/flintstones";

@Injectable()
export class ZenithEventService {

  //private BASE_URL = "http://zenithsocietya2.azurewebsites.net/api/EventsApi";
  private BASE_URL = "http://localhost:5000/api/EventsApi"
  
  constructor(private http: Http) { }

  /*
  getZenithEvents(): Promise<EventProgram[]> {
    return Promise.resolve(DUMMY_DATA);
  } */

  /*
  getZenithEvents(): Promise<EventProgram[]> {
    return this.http.get(this.BASE_URL)
     .toPromise()
     .then(response => response.json() as EventProgram[])
     .catch(this.denied);
  } */

/*
  getZenithEvents(): Promise<ApiEvent[]> {
    return this.http.get(this.BASE_URL)
     .toPromise()
     .then(response => response.json() as ApiEvent[])
     .catch(this.denied);
  } */

  /*
  getZenithEvents(): Promise<EventProgram[]> {
    let newEvents: ApiEvent[] = [];
    let events: Promise<ApiEvent[]> = this.http.get(this.BASE_URL)
     .toPromise()
     .then(response => response.json() as ApiEvent[])
     .catch(this.denied);
     events.then(apev => newEvents = apev);
     return Promise.resolve(this.convert(newEvents));
  } */

  
  getZenithEvents(): Promise<Event[]> {
    let headers: Headers = new Headers();
    //headers.append('Authorization', 'Bearer ' + this.tokenService.getToken());
    headers.append('content-type', 'application/json');

    let options = new RequestOptions({headers: headers});

    let events: Promise<Event[]> = this.http.get(this.BASE_URL, options)
            .toPromise()
            .then(response => response.json())
            .catch(this.denied);
    if (events == undefined) {
            
    }

    return events;
  }

  /*
  getZenithEvents(): Promise<EventProgram[]> {
    return Promise.resolve(DUMMY_DATA);
  } */

  /*
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } */

  
  private denied(error: any): Promise<any> {
    console.error('Request denied', error);
    return Promise.reject(error.message);
  }

  /*
  getZenithEventById(id: number): Promise<EventProgram[]> {

    let d = new Date();
    d.setTime(d.getTime() + AppComponent.DAY_OFFSET * (id * 7));
    if (d.getDay() === 0)
      d.setTime(d.getTime() - AppComponent.DAY_OFFSET * 1);

    let lastSun = new Date();
    lastSun.setTime(d.getTime() - AppComponent.DAY_OFFSET * d.getDay()); 
    let nextMon = new Date();
    nextMon.setTime(lastSun.getTime() + AppComponent.DAY_OFFSET * 8);  

    let apievents: Event[] = [];
    let eventprograms: EventProgram[] = [];

    //this.getZenithEvents().then(ev => apievents = ev);
    //eventprograms = this.convert(apievents);

    let res: any[] = [];
    for (let ev of DUMMY_DATA) {
      let evDate = AppComponent.getDateFromStr(ev.event_date); 
      if (evDate > lastSun && evDate < nextMon) {
          res.push(ev);
          // console.log(evDate);
      }

    return Promise.resolve(res);
    }
  } */

  
  getZenithEventById(id: number): Promise<EventProgram[]> {

    let d = new Date();
    d.setTime(d.getTime() + AppComponent.DAY_OFFSET * (id * 7));
    if (d.getDay() === 0)
      d.setTime(d.getTime() - AppComponent.DAY_OFFSET * 1);

    let lastSun = new Date();
    lastSun.setTime(d.getTime() - AppComponent.DAY_OFFSET * d.getDay()); 
    let nextMon = new Date();
    nextMon.setTime(lastSun.getTime() + AppComponent.DAY_OFFSET * 8);  

    // console.log(lastSun);
    // console.log(nextMon);

    let events: EventProgram[] = [];
    let res: any[] = [];
    
    for (var ev of DUMMY_DATA) {
      let evDate = AppComponent.getDateFromStr(ev.event_date); 
      if (evDate > lastSun && evDate < nextMon) {
          res.push(ev);
          // console.log(evDate);
      }
         
    } 
    return Promise.resolve(res);
  }
/*
  convert(events: Event[]): Promise<EventProgram[]> {
    let newevents: EventProgram[] = [];
    for (let apievent of events) {
        let event: EventProgram = new EventProgram();
        event.event_name = apievent.activityId;
        event.event_date = apievent.fromTime.substr(0, 8);
        event.event_time = apievent.fromTime + " - " + apievent.toTime;
        event.show_date = apievent.isActive;
        newevents.push(event);
      }
      return Promise.resolve(newevents);
  } */

}
