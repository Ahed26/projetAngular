import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {
  // champs de recherche 
  searchTitle: string = '';
  searchCategory: string = '';

  // liste des favorites
  favorites: Suggestion[] = [];

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 0,
      isFavorite: false
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0,
      isFavorite: false
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur",
      description: "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description: "Organisation d'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.",
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
      nbLikes: 0
,
      isFavorite: false
    }
  ];

  // getter calcule pour la liste filtrée
  get filteredSuggestions(): Suggestion[] {
    const title = this.searchTitle.trim().toLowerCase();
    const category = this.searchCategory.trim().toLowerCase();

    return this.suggestions.filter(s => {
      const matchesTitle = title ? s.title.toLowerCase().includes(title) : true;
      const matchesCategory = category ? s.category.toLowerCase().includes(category) : true;
      return matchesTitle && matchesCategory;
    });
  }

  // incrémente le nombre de likes
  likeSuggestion(s: Suggestion) {
s.nbLikes = (s.nbLikes ?? 0) + 1;
;

  }

  // ajouter aux favoris
  addToFavorites(s: Suggestion) {
    if (!s.isFavorite) {
      s.isFavorite = true;
      // éviter les doublons
      if (!this.favorites.find(f => f.id === s.id)) {
        this.favorites.push({ ...s });
      }
    }
  }

  // retirer des favoris
  removeFromFavorites(s: Suggestion) {
    s.isFavorite = false;
    this.favorites = this.favorites.filter(f => f.id !== s.id);
  }

  // tester l'état refusee
  isRefused(s: Suggestion): boolean {
    return s.status === 'refusee';
  }
}
