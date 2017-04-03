import {EventProgram} from '../event-program';
import { ZenActivity } from '../zen-activity';
import { ZenEvent } from '../zen-event';

export const DUMMY_DATA: EventProgram[] = [
    {
        "event_date": "Tue, Mar 21, 2017",
        "event_time": "08:30 AM - 10:30 AM",
        "event_name": "Senior's Golf Tournament",
        "show_date": true
    },
    {
        "event_date": "Thu, Mar 23, 2017",
        "event_time": "09:30 AM - 11:30 AM",
        "event_name": "Young ladies cooking lessons",
        "show_date": true
    },
    {
        "event_date": "Thu, Mar 23, 2017",
        "event_time": "08:30 AM - 10:30 AM",
        "event_name": "Leadership General Assembly Meeting I",
        "show_date": false
    },
    {
        "event_date": "Tue, Mar 28, 2017",
        "event_time": "08:30 AM - 10:30 AM",
        "event_name": "Senior's Golf Tournament",
        "show_date": true
    },
    {
        "event_date": "Tue, Mar 28, 2017",
        "event_time": "09:30 AM - 11:30 AM",
        "event_name": "Young ladies cooking lessons",
        "show_date": false
    },
    {
        "event_date": "Wed, Mar 29, 2017",
        "event_time": "08:30 AM - 10:30 AM",
        "event_name": "Leadership General Assembly Meeting I",
        "show_date": true
    },
    {
        "event_date": "Thu, Mar 30, 2017",
        "event_time": "08:30 AM - 09:30 AM",
        "event_name": "Youth craft lessons I",
        "show_date": true
    },
    {
        "event_date": "Thu, Mar 30, 2017",
        "event_time": "08:30 AM - 09:30 AM",
        "event_name": "Swimming Lessons for the youth",
        "show_date": false
    },
    {
        "event_date": "Wed, Apr 5, 2017",
        "event_time": "08:30 AM - 09:30 AM",
        "event_name": "Youth craft lessons I",
        "show_date": true
    },
    {
        "event_date": "Wed, Apr 5, 2017",
        "event_time": "08:30 AM - 09:30 AM",
        "event_name": "Swimming Lessons for the youth",
        "show_date": false
    }
];

export const EVENT_DATA: ZenEvent[] = [
{
"eventId": 1,
"fromTime": "2017-03-21T08:30:00",
"toTime": "2017-03-21T10:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 1,
"activity": null
},
{
"eventId": 2,
"fromTime": "2017-03-21T09:30:00",
"toTime": "2017-03-21T11:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 21,
"activity": null
},
{
"eventId": 3,
"fromTime": "2017-03-22T08:30:00",
"toTime": "2017-03-22T10:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 20,
"activity": null
},
{
"eventId": 4,
"fromTime": "2017-03-23T08:30:00",
"toTime": "2017-03-23T09:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 8,
"activity": null
},
{
"eventId": 5,
"fromTime": "2017-03-23T08:30:00",
"toTime": "2017-03-23T09:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 12,
"activity": null
},
{
"eventId": 6,
"fromTime": "2017-03-23T10:30:00",
"toTime": "2017-03-23T12:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 14,
"activity": null
},
{
"eventId": 7,
"fromTime": "2017-03-24T09:30:00",
"toTime": "2017-03-24T11:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 6,
"activity": null
},
{
"eventId": 8,
"fromTime": "2017-03-24T10:30:00",
"toTime": "2017-03-24T12:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 4,
"activity": null
},
{
"eventId": 9,
"fromTime": "2017-03-24T12:00:00",
"toTime": "2017-03-24T01:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 3,
"activity": null
},
{
"eventId": 10,
"fromTime": "2017-03-25T07:30:00",
"toTime": "2017-03-25T08:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 10,
"activity": null
},
{
"eventId": 11,
"fromTime": "2017-03-25T08:30:00",
"toTime": "2017-03-25T10:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 16,
"activity": null
},
{
"eventId": 12,
"fromTime": "2017-03-25T10:30:00",
"toTime": "2017-03-25T12:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 18,
"activity": null
},
{
"eventId": 13,
"fromTime": "2017-03-25T12:30:00",
"toTime": "2017-03-25T01:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 5,
"activity": null
},
{
"eventId": 14,
"fromTime": "2017-03-26T11:30:00",
"toTime": "2017-03-26T15:30:00",
"enteredBy": "a",
"creationDate": "2017-02-04T00:00:00",
"isActive": false,
"activityId": 2,
"activity": null
}
];

export const ACTIVITY_DATA: ZenActivity[] = [
{
"activityId": 1,
"activityDescription": "Senior's Golf Tournament",
"creationDate": "2017-02-01T00:00:00",
"events": null
},
{
"activityId": 2,
"activityDescription": "Garage Sale",
"creationDate": "2017-02-07T00:00:00",
"events": null
},
{
"activityId": 3,
"activityDescription": "BBQ Lunch",
"creationDate": "2017-02-07T00:00:00",
"events": null
},
{
"activityId": 4,
"activityDescription": "Bingo Tournament",
"creationDate": "2017-02-07T00:00:00",
"events": null
},
{
"activityId": 5,
"activityDescription": "Lunch",
"creationDate": "2017-02-07T00:00:00",
"events": null
},
{
"activityId": 6,
"activityDescription": "Youth choir practice",
"creationDate": "2017-02-07T00:00:00",
"events": null
},
{
"activityId": 7,
"activityDescription": "Youth craft lessons II",
"creationDate": "2017-02-07T00:00:00",
"events": null
},
{
"activityId": 8,
"activityDescription": "Youth craft lessons I",
"creationDate": "2017-02-06T00:00:00",
"events": null
},
{
"activityId": 9,
"activityDescription": "Youth Bowling Tournament",
"creationDate": "2017-02-06T00:00:00",
"events": null
},
{
"activityId": 10,
"activityDescription": "Pancake Breakfast",
"creationDate": "2017-02-07T00:00:00",
"events": null
},
{
"activityId": 11,
"activityDescription": "Leadership General Assembly Meeting II",
"creationDate": "2017-02-05T00:00:00",
"events": null
},
{
"activityId": 12,
"activityDescription": "Swimming Lessons for the youth",
"creationDate": "2017-02-05T00:00:00",
"events": null
},
{
"activityId": 13,
"activityDescription": "Senior's Hotdog Eating Contest",
"creationDate": "2017-02-04T00:00:00",
"events": null
},
{
"activityId": 14,
"activityDescription": "Lady's Hotdog Eating Contest",
"creationDate": "2017-02-04T00:00:00",
"events": null
},
{
"activityId": 15,
"activityDescription": "Senior's Ballroom Dance",
"creationDate": "2017-02-03T00:00:00",
"events": null
},
{
"activityId": 16,
"activityDescription": "Junior's Hockey Tournament",
"creationDate": "2017-02-02T00:00:00",
"events": null
},
{
"activityId": 17,
"activityDescription": "Youth's Hockey Tournament",
"creationDate": "2017-02-02T00:00:00",
"events": null
},
{
"activityId": 18,
"activityDescription": "Junior Golf Tournament",
"creationDate": "2017-02-01T00:00:00",
"events": null
},
{
"activityId": 19,
"activityDescription": "Youth Golf Tournament",
"creationDate": "2017-02-01T00:00:00",
"events": null
},
{
"activityId": 20,
"activityDescription": "Leadership General Assembly Meeting I",
"creationDate": "2017-02-05T00:00:00",
"events": null
},
{
"activityId": 21,
"activityDescription": "Young ladies cooking lessons",
"creationDate": "2017-02-08T00:00:00",
"events": null
}
];