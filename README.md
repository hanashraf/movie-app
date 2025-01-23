## Introduction to My Project

This project is a movie app featuring four main pages: Home, Movie Details, Movie List, and Favourites. Here's a quick overview of its functionality:

Navigation Bar:
Appears on all pages.

Clicking on the StarStack logo redirects users to the Home page.

The Favourites icon navigates users to the Favourites page, where their favourite movies are stored.

Home Page:
Users can search for movies by entering at least three characters in the search bar. They can either press the magnifier icon or hit Enter to initiate the search, which takes them to the Movie List page.

Movie List Page:
Displays search results. Users can:

Click on a movie to view more details.

Add or remove movies from their favourites.

Favourites Page:
Users can view their favourite movies and remove any they no longer wish to keep.

Responsive Design:

In mobile view, a there is a menu bar accessing Favourites and the search bar.
Language localization is not applied; a placeholder button is included for design purposes.

## Instructions on how to install and run application locally

0)install bun first
1)bun create next-app [To create app]
2)bun --bun run dev [To run dev server]
3)Open http://localhost:3000 with your browser to see the result

## Design Decisions, Challenges Faced, and Solutions

Component Tree and State Management:
Challenge: Determining how to structure the component tree and manage states efficiently.
Solution:
Used Zustand for global state management when multiple components needed to share the same state.
Used the useState hook and props for localized state management within specific components.
These decisions helped balance simplicity and scalability in the app's architecture.
