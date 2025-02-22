[🔗 Live deployed Jobchaser site ()]

🔗 Links

- GitHub Repository: [https://github.com/AleksaSolevic/jobchaser-app.git]
- Live Demo: []

## Overview

JobChaser is a modern job listing web application designed to make job searching intuitive and engaging. The platform features a responsive user interface, real-time search filtering, and a detailed modal for job descriptions. The app also includes three filters powered by Redux, a dark/light mode toggle, and placeholder sign-in and sign-up pages (currently non-functional, for future implementation).

## Features

- Displays a list of all available jobs.
- Searchbar for real-time filtering of job listings.
- Modal popup for detailed job descriptions.
- Redux-based filters for three role: Frontend, Backend and Fullstack
- Dark/Light mode toggle available on all pages.
- Sign-in and sign-up pages (currently non-functional placeholders).

## Responsive Design

- Optimized for mobile, tablet, and desktop views with a responsive UI powered by Media Queries CSS.

## Technologies Used

- Next.js – Framework for server-side rendering and fast performance.
- CSS & Tailwind CSS – For responsive design and custom styling.
- React/TypeScript – For type-safe, interactive components.
- Redux Toolkit – For managing the filter state and global app state.
  -JSON for storing jobs data.

## Advantages

- User-friendly design: Clean and easy-to-navigate UI focused on job listings.
- Dynamic interface: Real-time filtering with Redux ensures a responsive user experience.
- Responsive design: Fully optimized for all devices.
- Dark/Light Mode: Accessible theme switching for better user comfort.

## Disadvantages

- Limited filtering options.
- Sign-in/Sign-up pages are placeholders and not yet functional.

## Future Improvements

- Implement user authentication for sign-in/sign-up.
- Expand job filtering and sorting options (e.g., by level, company).
- Add a "Saved Jobs" feature for user wishlists.

## Key Functionalities

- Search Functionality

* Real-time filtering of job listings based on keywords typed in the search bar.

- Job Modal

* Clicking on a job opens a modal with detailed descriptions and job requirements.

- Redux-Powered Filters

* Three filters managed by Redux:
  roles- Frontend, Backend, Fullstack.
* Filters dynamically update the displayed job list.

## Dark/Light Mode

- Theme toggle is available across all pages, persisting user preferences.

## Authentication (Planned Feature)

- Sign-in and sign-up pages currently serve as placeholders.
- Future updates will integrate full authentication functionality.

### Veckans frågor och svar

# Vecka 1

Frågor om React – Vecka 1

# 1. Allmänt om ramverket React: Hur och varför uppkom det? Vad är centralt i React?

React skapades av Jordan Walke på Facebook år 2013. Syftet var att lösa problem med prestanda och skalbarhet i komplexa webbapplikationer, särskilt de dynamiska.
Det centrala i React är komponentbaserad arkitektur, vilket innebär att en applikation delas upp i små delar (komponenter). Varje komponent har sin egen struktur, stil och funktionalitet.

# 2. Vad är JSX?

JSX (JavaScript XML) är en förlängning av JavaScript som låter utvecklare skriva HTML-element direkt i JavaScript. Det gör koden mer lättläst och uttrycksfull. Eftersom webbläsare inte förstår JSX direkt används Babel för att omvandla det till vanlig JavaScript.

# 3. Vad är en komponent?

En komponent är en återanvändbar byggsten på en webbsida. Den är en självständig del som kan ha egen funktionalitet, stil och struktur. I moderna tillvägagångssätt kombineras den ofta med Hooks eller som en klassbaserad komponent.

# 4. Vad är props?

Props (kort för properties) fungerar som ”överförare” av data från en föräldrakomponent till en barnkomponent. Props är endast läsbara och kan inte ändras direkt av barnkomponenten, vilket säkerställer att komponentens data är oföränderlig (immutable) och gör applikationen mer förutsägbar och lättare att felsöka.

# 5. Vad menas med one-way dataflow?

One-way dataflow innebär att data bara flödar i en riktning – från förälder till barn via props. Om en barnkomponent behöver kommunicera med föräldern sker det genom callback-funktioner.

# 6. Hur använder man konditionell rendering i React?

Konditionell rendering låter komponenter visa olika innehåll beroende på villkor. Vanligtvis används ternära operatorer (villkor ? sant : falskt) eller logiska operatorer (&&) för detta, t.ex. för att hantera inloggningsstatus eller visa felmeddelanden.

# 7. Vad är en återanvändbar komponent?

En återanvändbar komponent är en komponent som kan användas flera gånger i en applikation. Genom att skicka olika props kan dess utseende och beteende anpassas utan att ändra kärnan.

## Vecka 2

# 1. Vad är state i React?

State är ett internt dataobjekt i en komponent som kan ändras över tid. Det fungerar som en “let-variabel” i JavaScript. När state ändras renderas komponenten automatiskt om med den nya datan.

# 2. Vad är skillnad mellan state och props?

Props: Läsbara data som skickas från förälder till barn.

State: Hanteras inom komponenten och kan ändras, vilket utlöser en omrendering.

# 3. Vad menas med en kontrollerad komponent i React?

En kontrollerad komponent är ett formulärelement där React styr värdet via state. Det gör det enklare att hantera användarinmatning och validering.

# 4. Vad är en callback handler?

En callback handler är en funktion som skickas från en förälder till en barnkomponent. Barnet anropar funktionen för att skicka data eller trigga handlingar hos föräldern.

# 5. Vad menas med "lifting state up"?

Det innebär att flytta state från en barnkomponent till en förälder så att flera barnkomponenter kan dela samma data.

# 6. Vad är syftet med useEffect-hook i React?

useEffect används för att hantera sidobeteenden som att hämta data från ett API. Den körs efter att komponenten har renderats.

# 7. Vad är syfter kring den s.k. dependency-arrayen i useEffect?

Den styr när useEffect körs:

- Tom array ([]): Körs en gång vid montering.

- Med variabler: Körs när dessa ändras.

- Utan array: Körs vid varje render, vilket kan påverka prestandan.

### Vecka 3

# 1. Vilka fördelar finns det med att använda NextJS? Nackdelar??

Fördelar:
Snabb prestanda med server-side rendering.
Bra för SEO.
Automatisk routing via filstruktur.
Inbyggd bildoptimering.
Fullstack-stöd med API-rutter.
Enkel distribution via Vercel.

Nackdelar:

- Mer komplext för nybörjare.
- Backend-kod kan vara svår att återanvända i andra projekt.
- Större projekt kräver mer konfiguration.

# 2. Vad menas med Routing? pÅ vilket sätt löser NextJS Routing vs. "vanliga React"?

Routing styr navigeringen mellan sidor. I React används react-router-dom, medan Next.js hanterar detta automatiskt baserat på filstrukturen.

# 3. Vad menas med Reacts ekosystem? Nämn några viktiga bibliotek i Reacts ekosysem?

Reacts ekosystem omfattar alla bibliotek, verktyg och ramverk som stöder utveckling med React. Det inkluderar verktyg för state-hantering, routing, stil, testning och API-hantering.

Reacts ekosystem består av verktyg och bibliotek som:

- Tailwind CSS för stil.
- Redux och Zustand för state management.
- React Query för API-hantering.
- React Router för navigering.

# 4. Vad är syftet med useContext? Vilket promlem med props löser den?

useContext gör det möjligt att dela data mellan komponenter utan att props skickas manuellt, vilket löser problemet med “prop drilling”.

#### Vecka 4

# 1. Vad är Redux Toolkit?

Redux Toolkit är ett verktyg som gör det enklare att använda Redux i React-applikationer. Det minskar mängden kod som behöver skrivas och följer bästa praxis. Genom att erbjuda färdiga funktioner som createSlice och configureStore hjälper det utvecklare att hantera global state på ett mer strukturerat och effektivt sätt.

# 2. När, i vilka situationer vill man anvönda Redux Toolkit?

Redux Toolkit används när en applikation har komplex data som delas mellan många komponenter. Det är särskilt användbart när flera delar av applikationen behöver samma data eller när API-anrop måste hanteras på ett organiserat sätt. Det hjälper till att skriva renare kod och gör tillståndshanteringen mer överskådlig.
