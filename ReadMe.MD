## Branching Model

Our default branch is `dev`. When starting development work, please create a new branch based on `dev`. Once your changes are ready, create a pull request targeting the `dev` branch.

## Getting Started

1. Clone the repository to your local development environment.
2. Checkout the `dev` branch as your starting point for development.

## Development Workflow

1. Create a new branch for your specific contribution. Give it a descriptive and concise name that reflects the nature of your changes.
2. Make changes, commit them frequently with clear and meaningful commit messages.
3. Push your branch regularly to the remote repository.
4. When your changes are complete, create a pull request targeting the `dev` branch.
5. Ensure your pull request includes a clear and concise description of the changes made.
6. Be open to feedback and iterate on your changes as necessary.
7. Once approved, your changes will be merged into the `dev` branch.


## File Structure
<h1>File Structure</h1> 

```bash
src
├── assets
├── components 
│   ├── [component folders]
    ├── Shared
├── pages
│   ├── About
│   ├── Home
│   ├── Service
├── reducers
├── utils
│   ├── footer.ts
    ├── option.ts

```
<br>
The **assets** folder contains all our image assets
<br>

The components folder contains all our application component files and a shared that hold all re-usable components

<br>


The **Pages** folder contains all folders for different pages in this project
* Each folder has all neccessary and required file that particular page


render any component displayed on the homepage in the *main.tsx* file

<br>

<br>
<br>

# ResQ

## Description

This project is a web application built with Create React App Vite, TypeScript, and Tailwind CSS. It serves as a template or starting point for developing modern and responsive web applications.

## Features

- **Create React App Vite**: A lightweight development server and build tool for React applications with fast startup and instant hot module replacement (HMR).
- **TypeScript**: A typed superset of JavaScript that improves developer productivity and code quality by enabling static typing and improved tooling.
- **Tailwind CSS**: A highly customizable utility-first CSS framework for building modern UIs with rapid development and easy styling.
- **Vite**: A fast development server and build tooling for modern web applications, providing an instant and optimized development experience.
- **ESLint**: A pluggable linting utility for JavaScript and TypeScript that helps enforce code quality and maintainability.
- **Prettier**: An opinionated code formatter that ensures consistent code style across the project.


### Prerequisites

Make sure you have the following software installed:

- Node.js (v14 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:

   ```shell
   cd your-project
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

### Usage

- Start the development server:

  ```shell
  npm run dev
  ```

  This command will start the development server with hot module replacement (HMR) enabled. You can view the app in your browser at `http://127.0.0.1:5173`.

- Build the production-ready app:

  ```shell
  npm run build
  ```

  This command will build the app for production in the `dist` directory. The production-ready assets will be optimized and minified for better performance.

- Run tests:

  ```shell
  npm test
  ```

  This command will run the test suite and provide feedback on the test results.

### Configuration

- **Tailwind CSS**: The Tailwind CSS configuration file is located at `tailwind.config.js`. You can customize various aspects of Tailwind CSS, such as colors, typography, spacing, and more, according to your project's design requirements.

- **ESLint**: The ESLint configuration file is located at `.eslintrc.js`. You can customize ESLint rules and settings to enforce your preferred coding style and ensure code quality.

