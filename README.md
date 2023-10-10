# Dev Setup Guide

This guide will walk you through setting up and running the monorepo project. This includes installing the necessary prerequisites, configuring linting and formatting, running tests, and ensuring clean commits.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Linting and Formatting](#linting-and-formatting)
- [Testing with Jest](#testing-with-jest)
- [Pre-commit Lint Check](#pre-commit-lint-check)

## Prerequisites

### Install NVM (Node Version Manager):

NVM allows you to manage multiple versions of Node.js on your machine.

**For macOS/Linux:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

**For Windows:** 

Visit [nvm-windows](https://github.com/coreybutler/nvm-windows) for installation instructions.

### Install Node.js v18:

With NVM installed, download and use Node.js v18:

```bash
nvm install 18
nvm use 18
```

## Project Setup

1. **Clone the Repository:**

```bash
git clone [YOUR_REPOSITORY_URL]
cd [YOUR_REPOSITORY_DIRECTORY]
```

2. **Install Project Dependencies:**

```bash
npm install
```

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. 

1. **Install ESLint and Prettier extensions in your editor**:

   - For VSCode:
     - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
     - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. **Setup Format on Save in VSCode**:

   Open the settings (`Ctrl` + `,`) and add:

```json
{
   "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
   },
   "editor.formatOnSave": true
}
```

3. **Run the Lint Command:**

```bash
npm run lint
```

This command will display any linting errors in your code.

## Testing with Jest

1. **Run All Tests:**

```bash
npm test
```

2. **Run Tests in Watch Mode (runs tests related to changed files)**:

```bash
npm run test:watch
```

## Pre-commit Lint Check

Before committing, a lint check will be performed to ensure that no linting errors are present. If any issues are found, the commit will be aborted. This ensures that only clean code gets committed to the repository.

---

**Note:** Always ensure you're on the correct Node.js version when working on the project. You can always run `nvm use` in the project directory to set the correct version.

---

That should provide a comprehensive README for anyone looking to set up and work on the project. You might want to adapt the specifics based on the exact configurations and tools you're using.
