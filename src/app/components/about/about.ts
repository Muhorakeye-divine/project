import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { pay, Servicepays } from '../../services/servicepays';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  pays: pay | null = null;
  error: string | null = null;
  loading = true;

  private servicePays = inject(Servicepays);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    this.servicePays.getCountry('United States')
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (data) => {
          this.pays = data[0];
          this.loading = false;
        },
        error: (err) => {
          this.error = err.message;
          this.loading = false;
        }
      });
  }
}