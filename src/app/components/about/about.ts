import { Component, OnInit, inject } from '@angular/core';
import { pay ,Servicepays } from '../../services/servicepays';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone:true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit{

  pays?: pay;

  private servicePays= inject (Servicepays) ;

  ngOnInit(): void {
    this.servicePays.getCountry('United States').subscribe({
      next: (data) => {
        this.pays = data[0]; 
      },
      error: (err) => {
        console.error('Erreur du chargement :', err);
      }
    });
  }

  

}
