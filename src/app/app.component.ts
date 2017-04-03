import { Component, OnInit } from '@angular/core';
import { ZenithEventService } from './zenith-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ZenithEventService]
})
export class AppComponent {  

  static readonly DAY_OFFSET = (24*60*60*1000);
  //title = "app works";

  public static getThisWeek(d: Date): string {
    //let today = new Date();
    if (d.getDay() === 0)
      d.setTime(d.getTime() - this.DAY_OFFSET * 1);
    let monday = new Date();
    monday.setTime(d.getTime() - this.DAY_OFFSET * (d.getDay() - 1));
    let sunday = new Date();
    sunday.setTime(monday.getTime() + this.DAY_OFFSET * 6);

    return this.getDayName(monday) + ", " + this.getMonthName(monday) + " " + monday.getDate() + 
      " - " + this.getDayName(sunday) + ", " + this.getMonthName(sunday) + " " + sunday.getDate();
  }

  public static getMonthName(d: Date): string {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return monthNames[d.getMonth()];
  }

  public static getDayName(d: Date): string {
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayNames[d.getDay()];
  }

  public static getMonthNumber(name: string): number {
    return "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(name) / 3; // start with 0 // + 1;
  }

  public static getDateFromStr(dateStr: string): Date {
    let res = dateStr.replace(/,/g, "").split(" ");
    return new Date(parseInt(res[3]), this.getMonthNumber(res[1]),  parseInt(res[2]));
  }
 
}
