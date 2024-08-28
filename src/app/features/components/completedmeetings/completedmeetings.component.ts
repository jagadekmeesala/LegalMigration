import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-completed',
  templateUrl: './completedmeetings.component.html',
  styleUrls: ['./completedmeetings.component.scss']
})
 
export class CompletedmeetingsComponent {
  isclicked:boolean=false
  show() {
  this.isclicked=!this.isclicked;
  }
  
  meetings = [
    {
      "host": "Sanjay Patel",
      "numberOfAttendees": 4,
      "meetingTime": "2024-08-20T10:00:00Z",
      "duration": "1 Hour",
      "subject": "2nd Hearing review meeting",
      "attendees": [
        { "name": "Amit Sharma", "email": "amit.sharma@example.com" },
        { "name": "Rina Gupta", "email": "rina.gupta@example.com" },
        { "name": "Nitin Verma", "email": "nitin.verma@example.com" },
        { "name": "Priya Singh", "email": "priya.singh@example.com" }
      ]
    },
    {
      "host": "Meera Joshi",
      "numberOfAttendees": 3,
      "meetingTime": "2024-08-15T14:30:00Z",
      "duration": "2 Hours",
      "subject": "New case kickoff meeting",
      "attendees": [
        { "name": "Rajiv Patel", "email": "rajiv.patel@example.com" },
        { "name": "Sonia Rao", "email": "sonia.rao@example.com" },
        { "name": "Karan Mehta", "email": "karan.mehta@example.com" }
      ]
    },
    {
      "host": "Arun Kumar",
      "numberOfAttendees": 5,
      "meetingTime": "2024-08-12T09:00:00Z",
      "duration": "1 Hour 30 Minutes",
      "subject": "Lawyer and Client initial meeting",
      "attendees": [
        { "name": "Pooja Sharma", "email": "pooja.sharma@example.com" },
        { "name": "Vikram Singh", "email": "vikram.singh@example.com" },
        { "name": "Neha Bhatia", "email": "neha.bhatia@example.com" },
        { "name": "Amit Verma", "email": "amit.verma@example.com" },
        { "name": "Ravi Reddy", "email": "ravi.reddy@example.com" }
      ]
    },
    {
      "host": "Anjali Kapoor",
      "numberOfAttendees": 6,
      "meetingTime": "2024-08-08T13:00:00Z",
      "duration": "2 Hours",
      "subject": "Accident Case related meeting",
      "attendees": [
        { "name": "Ankit Mehta", "email": "ankit.mehta@example.com" },
        { "name": "Suman Patel", "email": "suman.patel@example.com" },
        { "name": "Kavita Agarwal", "email": "kavita.agarwal@example.com" },
        { "name": "Mohan Singh", "email": "mohan.singh@example.com" },
        { "name": "Nidhi Shah", "email": "nidhi.shah@example.com" },
        { "name": "Rajeev Kumar", "email": "rajeeve.kumar@example.com" }
      ]
    },
    {
      "host": "Vijay Kumar",
      "numberOfAttendees": 2,
      "meetingTime": "2024-08-05T11:00:00Z",
      "duration": "45 Minutes",
      "subject": "Firm weekly meeting",
      "attendees": [
        { "name": "Ravi Joshi", "email": "ravi.joshi@example.com" },
        { "name": "Neeta Verma", "email": "neeta.verma@example.com" }
      ]
    },
    {
      "host": "Priti Agarwal",
      "numberOfAttendees": 7,
      "meetingTime": "2024-08-02T15:00:00Z",
      "duration": "3 Hours",
      "subject": "Client Feedback Session",
      "attendees": [
        { "name": "Rajesh Bhatia", "email": "rajesh.bhatia@example.com" },
        { "name": "Meenal Sharma", "email": "meenal.sharma@example.com" },
        { "name": "Vikas Rao", "email": "vikas.rao@example.com" },
        { "name": "Seema Gupta", "email": "seema.gupta@example.com" },
        { "name": "Rohan Patel", "email": "rohan.patel@example.com" },
        { "name": "Pallavi Jain", "email": "pallavi.jain@example.com" },
        { "name": "Sunil Mehta", "email": "sunil.mehta@example.com" }
      ]
    }
  ];
  
  
  selectedMeeting: any = null;
  
  togglePopup(meeting: any) {
  this.selectedMeeting = this.selectedMeeting === meeting ? null : meeting;
  }

  showAgenda(meeting: any) {
    // Implement functionality to show agenda
    alert('Agenda for ' + meeting.subject);
  }

  showMoM(meeting: any) {
    // Implement functionality to show MoM
    alert('MoM for ' + meeting.subject);
  }
  }