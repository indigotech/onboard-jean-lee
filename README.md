# First taki-tiler project

This repository contains the code for my onboarding project at Taqtile.

## Environment and tools

This project was built using Node v16.8.0 and React v17.0.2 on a Linux Mint 20.2 machine.

__Development environment__
+ TypeScript v4.4.2
+ ESLint v7.32.0
+ Prettier v2.3.2

## Steps to run and debug

In order to run this project, clone the repository and run the following commands in its root folder:

```bash
$ npm install
$ npm start
```

To run ESLint on a specific file, from the project's root folder:

```bash
$ npx eslint src/app.tsx
```

Alternatively, you can run ESLint on all files within a folder:

```bash
$ npx eslint . --ext .js,.jsx,.ts,.tsx
```