# Clorian Frontend Test - made by Juan Ordosgoite

This is my Frontend test created for Clorian. The project includes:

- Login page (used to demostrate the advantages of react query - simple example, save user authenticated data with zustand and routing with react router dom). 

- There is a header with the Clorian logo, a link to the project github url and a logout button. It also includes a "hamburger icon" demo for mobile menu.

- After get authenticated, the user will be able to see the home page which contains a list of 10 products with the following information: id, name, description, date, quantity and cost. In this page, the user will be able to select the number of products he wants to add to the cart (up to 10). It also contains the button "add to the cart" to complete the adding operation. The cart icon contains a number field that indicates the number of products the user has added. This page also contains a search bar to filter the list and a dropdown to sort the list by name or description.

- The final page is the checkout screen. Here the user will be able to see the list of products and the quantity per each he has added to the cart so far. It also contains 3 buttons: back (go to the home page), empty the cart (to cancel all products he previoslu selected) and checkout (to resume the purchase).

## Stack

![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?align=center&titleAlign=center&lineCount=4&theme=github_dark&hideTitle=true&line1=react,react,61DAFB;react-query,react-query,FF4500;&line3=typescript,typescript,3178C6;vite,vite,646CFF;&line2=zustand,zustand,64D5CA;axios,axios,4183C4;&line4=eslint,eslint,4B32C3;prettier,prettier,F7B93E;)

| Tool         | Purpose                                           |
| ------------ | ------------------------------------------------- |
| React        | A JavaScript library for building user interfaces |
| React Query  | Data synchronization library for React            |
| Zustand      | Minimalist state management                       |
| TypeScript   | Static typing for JavaScript                      |
| Vite         | Build tool and development server                 |
| Tailwindcss  | Styles                                            |
| Vitest       | Unit tests                                        |

## Features

:white_check_mark: Faster build with Vite

:white_check_mark: State management using Zustand

:white_check_mark: Data fetching using React Query and Axios

:white_check_mark: TypeScript for static typing

:white_check_mark: ESLint and Prettier for code linting and formatting


## Required Versions

| Tool        | Version    |
| ----------- | ---------- |
| NodeJS      | >=16       |
| TypeScript  | >=4.9.4    |

## Getting Started

### Clone the repository

```
git clone https://github.com/jordosgoite/clorian-demo.git
cd clorian-demo
```

### Installing Dependencies

```
npm install
```

### Running Locally

To run the project locally, simply execute:

```
npm start
```
### Running unit tests

To run the project unit tests, simply execute:

```
npm test
```
### Authentication

To get authenticated use the following credentials:

user: user
password: user

## Scripts

| Command       | Description                                                                  |
| ------------- | -----------------------------------------------------------------------------|
| `start`       | Run `build:css` then watch TailwindCSS and Vite concurrently                 |
| `watch:css`   | Watch for changes in `index.css` and output to `styles.css` using TailwindCSS|
| `build:css`   | Build CSS using TailwindCSS from `index.css` to `styles.css`                 |
| `build`       | Run TypeScript compiler, build CSS and then Vite build                       |
| `preview`     | Run Vite preview                                                             |
| `lint`        | Lint TypeScript files using ESLint                                           |
| `lint:fix`    | Fix linting issues in TypeScript files using ESLint                          |
| `format`      | Format `.ts`, `.tsx`, and `.json` files using Prettier                       |
| `test`        | Run Jest tests                                                               |
| `release`     | Run `standard-version` for versioning                                        |
| `commit`      | Use `git-cz` for commits                                                     |
| `prepare`     | Set up Husky for git hooks in a production environment                       |


## Project Structure

Here's a basic overview of the significant folders in the project:

```
├── public
└── src
  ├── assets
  ├── components
  ├── hooks
  ├── lib
  ├── pages
  |     ├── __tests__
  ├── routes
  ├── services
  ├── store
  └── types
```


| Folder      | Description                                                                                               |
|-------------|-----------------------------------------------------------------------------------------------------------|
| **`src/`**  | Contains the main source code for the application.                                                        |
| `assets    `| Images and other assets.                                                                                  |
| `components`| Reusable React components, each handling a specific piece of the UI.                                      |
| `hooks`     | Custom React hooks that encapsulate logic and behaviors which can be reused across different components.  |
| `lib`       | Miscellaneous utility functions, helpers, and other standalone pieces of logic.                           |
| `pages`     | Components representing full pages in the application, typically corresponding to routes.                 |
| `__tests__` | Unit test files related to the page components                                                            |
| `routes`    | Configuration and components related to routing in the application.                                       |
| `services`  | Functions or classes that handle tasks like API calls, data processing, or other "service"-like tasks.    |
| `store`     | Zustand st ores for state management, holding                                                             |
| **`public/`**  | Contains static assets like images, fonts, and the entry HTML file. Assets in this directory are served| directly and are not processed by bundlers like Vite.                                                                     |




## Features

| Tool/Library | Description                                                    |
|--------------|----------------------------------------------------------------|
| React Query  | Helps in fetching, caching, and updating asynchronous data.    |
| Zustand      | For simple and scalable state management.                      |
| TypeScript   | For type-safe code and scalability.                            |
| Vite         | For faster builds and a smoother developer experience.         |
| Vitest       | Next generation testing framework                              |

## About the author:

Juan Ordosgoite
LinkedIn: https://www.linkedin.com/in/juan-ordosgoite-1a492567/
Github: https://github.com/jordosgoite


