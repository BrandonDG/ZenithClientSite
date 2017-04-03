import { Activity } from './activity';
/*export class Event {
    eventId: number;
    fromTime: string;
    toTime: string;
    enteredBy: string;
    creationDate: string;
    isActive: boolean;
    activityId: string;
    activity: null;
} */

export class Event {
    eventId: number;
    eventFromDate: Date;
    eventToDate: Date;
    enteredByUserName: string;
    activityId: number;
    activity: Activity;
    creationDate: Date;
    isActive: boolean;
}