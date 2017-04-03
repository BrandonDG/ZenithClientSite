import { ZenActivity } from './zen-activity';
export class ZenEvent {
    eventId: number;
    fromTime: string;
    toTime: string;
    enteredBy: string;
    creationDate: string;
    isActive: boolean;
    activityId: number;
    activity: ZenActivity;
}
