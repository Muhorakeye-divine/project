import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { CommonModule } from '@angular/common';

interface Social {
  name: string;
  description: string;
  icon: string;
  link: string;
}


@Component({
  selector: 'app-page.component',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

    currentYear = new Date().getFullYear();
    
  socials: Social[] = [
    { 
      name: 'Facebook(Meta) ', 
      description: 'Version  payant si on fait  la creation d’une page professionelle.', 
      icon: 'fab fa-facebook', 
      link: 'https://www.facebook.com'
    },
    { 
      name: 'Instagram', 
      description: 'Payant selon le nombre des abonnements  et de vues atteint sur sa page .', 
      icon: 'fab fa-instagram', 
      link: 'https://www.instagram.com'
    },
    { 
      name: 'Tik Tok', 
      description: 'Payant selon le nombre des abonnements  et de vues atteint sur sa page.', 
      icon: 'fab fa-tiktok', 
      link: 'https://www.tik tok.com'
    },
    { 
      name: 'LinkedIn Premium', 
      description: 'Version premium de LinkedIn pour les proffesionneles avec outils avancés.', 
      icon: 'fab fa-linkedin', 
      link: 'https://www.linkedin.com/premium/'
    },
    { 
      name: 'X Premium (Twitter Blue)', 
      description: 'Abonnement payant à X (ex-Twitter) pour des fonctionnalités exclusives.', 
      icon: 'fab fa-twitter', 
      link: 'https://x.com/premium'
    },
    { 
      name: 'Patreon', 
      description: 'Plateforme pour soutenir des créateurs via un abonnement mensuel.', 
      icon: 'fab fa-patreon', 
      link: 'https://www.patreon.com/'
    },
    { 
      name: 'OnlyFans', 
      description: 'Réseau social basé sur l’abonnement aux contenus premium.', 
      icon: 'fa-solid fa-lock', 
      link: 'https://onlyfans.com/'
    },
    { 
      name: 'Substack', 
      description: 'Plateforme de newsletters payantes pour les créateurs.', 
      icon: 'fa-solid fa-envelope', 
      link: 'https://substack.com/'
    },
    { 
      name: 'YouTube Premium', 
      description: 'Abonnement payant à YouTube pour contenu sans publicite et exclusif.', 
      icon: 'fab fa-youtube', 
      link: 'https://www.youtube.com/premium'
    }

  ];
}
