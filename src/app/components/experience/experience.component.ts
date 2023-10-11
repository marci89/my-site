import { Component, OnInit } from '@angular/core';
import { Company, Udemy } from 'src/app/Interfaces/education-works.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  companies: Company[];
  udemycourses: Udemy[];

  ngOnInit(): void {
    this.listCompanies();
    this.listUdemycourses();
  }

  listCompanies() {
    this.companies = [
      { company: 'ActualJob', role: 'FullStackDeveloper', description: 'SignalIdunaDescription', stacks: 'Stacks: C#, Angular' },
      {
        company: 'NewLine kft. | 2019 - 2022', role: 'FullStackDeveloper', description: 'NewlineDescription',
        stacks: 'Stacks: C#, Kendo UI, MVC, TypeScript, GIT/TFS, SQL, Web API'
      },
      { company: 'Pc Trade Systems kft. | Jun 2018 - Dec 2018', role: 'FrontEndDeveloper', stacks: 'Angular, Scrum, Jira ticket management' }
    ];
  }

  listUdemycourses() {
    this.udemycourses = [
      {
        title: 'Build an app with ASPNET Core and Angular from scratch',
        url: 'https://www.udemy.com/certificate/UC-02d682c8-43f5-458f-994f-a71998edc071/'
      },
      {
        title: 'CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass)',
        url: 'https://www.udemy.com/certificate/UC-a6d6513b-4ecd-4e0b-aa1e-c1f0406f6e3c/'
      },
      {
        title: 'JavaScript - The Complete Guide 2023 (Beginner + Advanced)',
        url: 'https://www.udemy.com/certificate/UC-2f927b51-6518-47f5-9d50-d68e8bc42897/'
      },
      {
        title: 'C# Programming Course – Beginner to Expert',
        url: 'https://www.udemy.com/certificate/UC-40f22487-2d00-4406-b2bb-cbe1114a22e4/'
      },
      {
        title: 'Design Patterns using C# and .NET Core',
        url: 'https://www.udemy.com/certificate/UC-97cc703a-e05a-4b53-8fbe-1f3f83fa98ba/'
      },
      {
        title: 'Angular - The Complete Guide (2023 Edition)',
        url: 'https://www.udemy.com/certificate/UC-9f8ad24c-d2e6-4abc-9e57-569c1b1f7404/'
      },
      {
        title: 'The Complete SQL Bootcamp: Go from Zero to Hero',
        url: 'https://www.udemy.com/certificate/UC-1d35db7d-b8df-4bf2-9850-31821774f31b/'
      }
    ]
  }
}
