// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RegisterComponent } from './register.component';
// import { DropdownModule } from 'primeng/dropdown';
// import { ButtonModule } from 'primeng/button';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;
//   let debugElement: DebugElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         ReactiveFormsModule,
//         DropdownModule,
//         ButtonModule
//       ],
//       declarations: [ RegisterComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     debugElement = fixture.debugElement;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have a form with role dropdown', () => {
//     const roleDropdown = debugElement.query(By.css('p-dropdown#role'));
//     expect(roleDropdown).toBeTruthy();
//   });

//   it('should render additional fields for Lawyer role', () => {
//     component.selectedRole = 'Lawyer';
//     fixture.detectChanges();
    
//     const collegeInput = debugElement.query(By.css('input#college'));
//     expect(collegeInput).toBeTruthy();

//     const degreeInput = debugElement.query(By.css('input#degree'));
//     expect(degreeInput).toBeTruthy();
    
//     const experienceInput = debugElement.query(By.css('input#experience'));
//     expect(experienceInput).toBeTruthy();

//     const noOfCasesDealtInput = debugElement.query(By.css('input#no_of_cases_dealt'));
//     expect(noOfCasesDealtInput).toBeTruthy();
//   });

//   it('should render additional fields for Client role', () => {
//     component.selectedRole = 'Client';
//     fixture.detectChanges();
    
//     const activeCasesInput = debugElement.query(By.css('input#active_cases'));
//     expect(activeCasesInput).toBeTruthy();

//     const occupationInput = debugElement.query(By.css('input#occupation'));
//     expect(occupationInput).toBeTruthy();
//   });

//   it('should log role change', () => {
//     spyOn(console, 'log');
//     const event = { value: 'Lawyer' };
//     component.onRoleChange(event);
//     expect(console.log).toHaveBeenCalledWith('Selected Role:', 'Lawyer');
//   });
// });


// // <div class="text-center mb-5">
// // <img src="assets/images/miraclelogo.png" alt="Image" height="50" class="mb-3">
// // <div class="text-900 text-3xl font-medium mb-3">Create an account!</div>
// // </div>