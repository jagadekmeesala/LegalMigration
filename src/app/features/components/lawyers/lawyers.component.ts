
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mylawyers',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.scss'],
})
export class LawyersComponent {
  lawyers: any[];
  view: boolean = false;
  appointView: boolean = false;
  emailSubject: string;
  emailBody: string;
  messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
    this.lawyers = [
      {
        id: '1',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Ravi',
        lastName: 'Reddy',
        location: 'Hyderabad',
        type: 'Civil',
        caseDetails:
          "Expert in personal injury and workers' compensation cases",
        contact: '+1 987-654-3210',
        caseName: 'Personal Injury Case',
        caseHiredDate: '2024-01-15',
        caseStatus: 'Ongoing',
        closedDate: null,
        description: 'Detailed description of the case',
      },
      {
        id: '2',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Sita',
        lastName: 'Kumar',
        location: 'Vijayawada',
        type: 'Criminal',
        caseDetails: ` Expert in personal injury and workers' compensation cases`,
        contact: '+1 123-456-7890',
        caseName: 'Criminal Defense',
        caseHiredDate: '2023-10-01',
        caseStatus: 'Pending',
        closedDate: null,
        description: 'Detailed description of the case',
      },
      {
        id: '3',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Lakshmi',
        lastName: 'Chowdary',
        location: 'Visakhapatnam',
        type: 'Administrative',
        caseDetails: ` Expert in personal injury and workers' compensation cases`,
        contact: '+1 234-567-8901',
        caseName: 'Regulatory Compliance',
        caseHiredDate: '2022-08-20',
        caseStatus: 'Closed',
        closedDate: '2024-02-15',
        description: 'Detailed description of the case',
      },
      {
        id: '4',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Kumar',
        lastName: 'Rao',
        location: 'Guntur',
        type: 'Civil',
        caseDetails: ` Expert in personal injury and workers' compensation cases`,
        contact: '+1 345-678-9012',
        caseName: 'Family Law',
        caseHiredDate: '2023-05-10',
        caseStatus: 'Ongoing',
        closedDate: null,
        description: 'Detailed description of the case',
      },
      {
        id: '5',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Anita',
        lastName: 'Nair',
        location: 'Tirupati',
        type: 'Criminal',
        caseDetails: ` Expert in personal injury and workers' compensation cases`,
        contact: '+1 456-789-0123',
        caseName: 'Drug Offenses',
        caseHiredDate: '2022-12-12',
        caseStatus: 'Pending',
        closedDate: null,
        description: 'Detailed description of the case',
      },
      {
        id: '6',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Pradeep',
        lastName: 'Sinha',
        location: 'Kakinada',
        type: 'Administrative',
        caseDetails:
          "Expert in personal injury and workers' compensation cases",
        contact: '+1 567-890-1234',
        caseName: 'Employment Law',
        caseHiredDate: '2024-03-25',
        caseStatus: 'Ongoing',
        closedDate: null,
        description: 'Detailed description of the case',
      },
    ];
  }
  favoriteLawyers: any[] = [];

  isFavorite(lawyer: any): boolean {
    return this.favoriteLawyers.includes(lawyer);
  }

  toggleFavorite(lawyer: any) {
    if (this.isFavorite(lawyer)) {
      this.favoriteLawyers = this.favoriteLawyers.filter(
        (fav) => fav !== lawyer
      );
    } else {
      this.favoriteLawyers.push(lawyer);
    }
  }

  getCardsForSelectedCase() {
    return this.lawyers;
  }

  showDialog() {
    this.view = true;
  }
  closeDialog() {
    this.view = false; 
  }
  showAppointDialog() {
    this.appointView = true;
  }

  submitContactForm() {
    this.messageService.add({
      severity: 'info',
      summary: 'Form Submitted',
      detail: 'Your message has been sent to the lawyer.',
    });
    this.view = false; 
  }
}

