import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { EventProgram } from '../event-program';
import { ZenithEventService } from '../zenith-event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  current_idx = 0;
  thisWeek = AppComponent.getThisWeek(new Date());

  events: EventProgram[];
  apievents: Event[];

  constructor(private zenithEventService: ZenithEventService) {}

  ngOnInit(): void {
    this.getZenithEvents();
  }

  getZenithEvents(): void {
    let dayOffset = (24*60*60*1000);
    let d = new Date();
    d.setTime(d.getTime() + dayOffset * this.current_idx * 7);
    this.thisWeek = AppComponent.getThisWeek(d);
    
    
    this.zenithEventService.getZenithEventById(this.current_idx)
      .then(ev => this.events = ev); 
  }

  showPrev(): void {
    this.current_idx--;
    this.getZenithEvents();
  }

  showNext(): void {
    this.current_idx++;
    this.getZenithEvents();
  }
}
