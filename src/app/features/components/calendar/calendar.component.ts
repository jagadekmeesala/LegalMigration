import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { addDays, endOfDay, startOfDay, subMonths, addMonths, subYears, addYears } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  taskTitle: string = '';
  visible: boolean = false;

  
  taskDate: string = '';
  selectedTask: CalendarEvent | null = null; // Property to store the selected task
  meetDuration: any;

  isScheduled:boolean=false;
  ngOnInit(): void {
    this.loadInitialEvents();
  }

  loadInitialEvents(): void {
    this.events = [
      {
        start: startOfDay(new Date()),
        end: endOfDay(addDays(new Date(), 1)),
        title: 'You have a meeting!',
        color: { primary: '#ad2121', secondary: '#FAE3E3' }
      }
    ];
  }
  showDialog() {
    this.visible = true;
}
  addTask(): void {
    if (this.taskTitle && this.taskDate) {
    const event: CalendarEvent = {
    start: startOfDay(new Date(this.taskDate)),
    end: endOfDay(new Date(this.taskDate)),
    title: this.taskTitle,
    color: { primary: '#ad2121', secondary: '#FAE3E3' }
    };
    let d={
    "meetingAgenda":this.taskTitle,
    "DateTime":this.taskDate,
    "duration":this.meetDuration
    }
    console.log(d)
    this.events = [...this.events, event];
    this.taskTitle = '';
    this.taskDate = '';
    this.meetDuration=''
    }
    }

    Schedule()
    {
      this.visible = true;
    this.isScheduled=!this.isScheduled;
    }

  prevMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  prevYear(): void {
    this.viewDate = subYears(this.viewDate, 1);
  }

  nextYear(): void {
    this.viewDate = addYears(this.viewDate, 1);
  }

  getMonthName(): string {
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(this.viewDate);
  }

  onEventClicked(event: CalendarEvent): void {
    this.selectedTask = event;
  }
}