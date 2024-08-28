import { Component } from '@angular/core';

@Component({
  selector: 'app-my-clients',
  templateUrl: './my-clients.component.html',
  styleUrls: ['./my-clients.component.scss']
})
export class MyClientsComponent {
  lawyers: any[];
  displayDialog: boolean = false; // For dialog visibility
  selectedLawyer: any; // Store selected lawyer details

  constructor() {
    // Example data, replace with actual data
    this.lawyers = [
      { 
        id: '1',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Jane',
        lastName: 'Smith',
        location: 'Los Angeles',
        type: 'Civil',
        caseDetails: 'Expert in personal injury and workers\' compensation cases',
        contact: '+1 987-654-3210',
        caseName: 'Personal Injury Case',
        caseHiredDate: '2024-01-15',
        caseStatus: 'Ongoing',
        closedDate: null,
        description: 'Detailed description of the case'
      },
      { 
        id: '2',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'John',
        lastName: 'Doe',
        location: 'New York',
        type: 'Criminal',
        caseDetails: 'Specializes in criminal defense and high-profile cases',
        contact: '+1 123-456-7890',
        caseName: 'Criminal Defense',
        caseHiredDate: '2023-10-01',
        caseStatus: 'Pending',
        closedDate: null,
        description: 'Detailed description of the case'
      },
      { 
        id: '3',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Emily',
        lastName: 'Johnson',
        location: 'Chicago',
        type: 'Administrative',
        caseDetails: 'Experienced in administrative law and regulatory compliance',
        contact: '+1 234-567-8901',
        caseName: 'Regulatory Compliance',
        caseHiredDate: '2022-08-20',
        caseStatus: 'Closed',
        closedDate: '2024-02-15',
        description: 'Detailed description of the case'
      },
      { 
        id: '4',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Michael',
        lastName: 'Brown',
        location: 'San Francisco',
        type: 'Civil',
        caseDetails: 'Focuses on family law and divorce settlements',
        contact: '+1 345-678-9012',
        caseName: 'Family Law',
        caseHiredDate: '2023-05-10',
        caseStatus: 'Ongoing',
        closedDate: null,
        description: 'Detailed description of the case'
      },
      { 
        id: '5',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'Laura',
        lastName: 'Miller',
        location: 'Houston',
        type: 'Criminal',
        caseDetails: 'Handles drug offenses and federal cases',
        contact: '+1 456-789-0123',
        caseName: 'Drug Offenses',
        caseHiredDate: '2022-12-12',
        caseStatus: 'Pending',
        closedDate: null,
        description: 'Detailed description of the case'
      },
      { 
        id: '6',
        profile: '../assets/layout/images/lawyer.png',
        firstName: 'David',
        lastName: 'Wilson',
        location: 'Philadelphia',
        type: 'Administrative',
        caseDetails: 'Expert in employment law and workplace regulations',
        contact: '+1 567-890-1234',
        caseName: 'Employment Law',
        caseHiredDate: '2024-03-25',
        caseStatus: 'Ongoing',
        closedDate: null,
        description: 'Detailed description of the case'
      }
    ];
  }

  getCardsForSelectedCase() {
    return this.lawyers;
  }

  showDetails(lawyer: any) {
    this.selectedLawyer = lawyer;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedLawyer = null; // Clear selected lawyer when dialog is hidden
  }
  
}
