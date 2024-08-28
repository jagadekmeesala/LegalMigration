import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-schedule',
  templateUrl: './meeting-schedule.component.html',
  styleUrls: ['./meeting-schedule.component.scss']
})
 
export class MeetingScheduleComponent {
  isclicked:boolean=false
  show() {
  this.isclicked=!this.isclicked;
  }
  
  meetings=[
    {
    "host": "Ramesh Reddy",
    "numberOfAttendees": 5,
    "meetingTime": "2024-09-05T10:00:00Z",
    "duration": "1 Hour 30 Minutes",
    "subject": "Review of Contract Dispute",
    "attendees": [
    { "name": "Rajesh Kumar", "email": "rajesh.kumar@example.com" },
    { "name": "Suresh Babu", "email": "suresh.babu@example.com" },
    { "name": "Chandra Sekhar", "email": "chandra.sekhar@example.com" },
    { "name": "Deepa Reddy", "email": "deepa.reddy@example.com" },
    { "name": "Eshwar Naidu", "email": "eshwar.naidu@example.com" }
    ]
    },
    {
    "host": "Anita Rao",
    "numberOfAttendees": 3,
    "meetingTime": "2024-09-06T14:00:00Z",
    "duration": "2 Hours",
    "subject": "Preparation for Arbitration Hearing",
    "attendees": [
    { "name": "Feroz Khan", "email": "feroz.khan@example.com" },
    { "name": "Ganga Devi", "email": "ganga.devi@example.com" },
    { "name": "Haritha Reddy", "email": "haritha.reddy@example.com" }
    ]
    },
    {
    "host": "Lakshmi Kumar",
    "numberOfAttendees": 4,
    "meetingTime": "2024-09-07T09:30:00Z",
    "duration": "1 Hour",
    "subject": "Client Briefing on Legal Strategy",
    "attendees": [
    { "name": "Indira Patil", "email": "indira.patil@example.com" },
    { "name": "Jagan Mohan", "email": "jagan.mohan@example.com" },
    { "name": "Kavitha Reddy", "email": "kavitha.reddy@example.com" },
    { "name": "Laxman Rao", "email": "laxman.rao@example.com" }
    ]
    },
    {
    "host": "Venkatesh Naidu",
    "numberOfAttendees": 6,
    "meetingTime": "2024-09-08T16:00:00Z",
    "duration": "1 Hour 45 Minutes",
    "subject": "Settlement Negotiations Overview",
    "attendees": [
    { "name": "Madhavi Sharma", "email": "madhavi.sharma@example.com" },
    { "name": "Narayana Rao", "email": "narayana.rao@example.com" },
    { "name": "Oshitha Reddy", "email": "oshitha.reddy@example.com" },
    { "name": "Prasad Kumar", "email": "prasad.kumar@example.com" },
    { "name": "Ravi Kumar", "email": "ravi.kumar@example.com" },
    { "name": "Sreelatha Reddy", "email": "sreelatha.reddy@example.com" }
    ]
    },
    {
    "host": "Sangeetha Devi",
    "numberOfAttendees": 2,
    "meetingTime": "2024-09-09T11:00:00Z",
    "duration": "30 Minutes",
    "subject": "Case Law Review and Analysis",
    "attendees": [
    { "name": "Srinivas Reddy", "email": "srinivas.reddy@example.com" },
    { "name": "Teja Kumar", "email": "teja.kumar@example.com" }
    ]
    },
    {
    "host": "Ravi Shankar",
    "numberOfAttendees": 7,
    "meetingTime": "2024-09-10T13:00:00Z",
    "duration": "2 Hours 30 Minutes",
    "subject": "Discuss Evidence and Witnesses for Trial",
    "attendees": [
    { "name": "Usha Naidu", "email": "usha.naidu@example.com" },
    { "name": "Venu Gopal", "email": "venu.gopal@example.com" },
    { "name": "Vijay Kumar", "email": "vijay.kumar@example.com" },
    { "name": "Xavi Reddy", "email": "xavi.reddy@example.com" },
    { "name": "Yamini Reddy", "email": "yamini.reddy@example.com" },
    { "name": "Zakir Ali", "email": "zakir.ali@example.com" },
    { "name": "Anjali Reddy", "email": "anjali.reddy@example.com" }
    ]
    }
  ]
  
  
  
  
  
  selectedMeeting: any = null;
  
  togglePopup(meeting: any) {
  this.selectedMeeting = this.selectedMeeting === meeting ? null : meeting;
  }
  }