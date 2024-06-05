# **SPA Market Fruit Challenge**

The challenge is to develop a simple single page application (SPA) for managing fruit buckets through the browser.

<ins>The application needs</ins>

- Register/delete buckets;
- Register fruits;
- Add/remove fruit from a bucket;
- View the complete list of buckets, with the total value of the sum of the prices of the fruits in each one, sorted in descending order by their occupancy (% of occupied capacity). This list must be visible and updated throughout the application flow, while buckets and fruits are created, relocated, etc.

<ins>Rules</ins>

- Buckets can store fruit, and each fruit has a price;
- Each Bucket is created with a maximum capacity value,
- A Bucket can be deleted as long as it is empty
- Fruits can be deposited and removed between different buckets available.
- At no time should the maximum capacity of a bucket be violated;
- A bucket must be empty before it can be deleted;
- A fruit does not necessarily need to be in a bucket at the time of its creation, it can be created outside of a bucket and be deposited in a bucket posteriorly

Follow the instructions below to clone the repository, install dependencies, and run locally.

<br  />

> **About the Solution**

This application was built with Next.js, TypeScript, using App Router for client-side/server-side handlering, MUI for components, Tailwind for styling, and Axios for making HTTP requests.
I also implemented an API with JSON-server and published it on vercel to consume with Axios. The API is working on this link: [https://market-fruit-api.vercel.app/](https://market-fruit-api.vercel.app/)

<br  />

> **Links**

- **Repository**: https://github.com/c4l3tt1/market_fruit_challenge.git

- **JSON-Server API**: https://github.com/c4l3tt1/market-fruit-api.git

<br  />

> **Tools and versions**

- **Next** _14.2.3_
- **React** _^18_
- **Node** _20.10.0_
- **Yarn** _ˆ1.22.19_
- **Tailwindcss** _ˆ3.4.3_
- **Typescript** _ˆ5_

<br  />

## Libraries/Plugins

- [**Tailwind**](https://tailwindcss.com/): Framework CSS

- [**Material UI**](https://mui.com/): UI Tools

- [**Axios**](https://axios-http.com): HTTP requests

<br  />

## Get Started

1. **Clone repository:**

```bash
git clone https://github.com/c4l3tt1/market_fruit_challenge.git
```

2. **Install dependencies:**

```bash
yarn install
```

3. **Run the project**:

```bash
yarn run dev
```

4. **Open the URL** [http://localhost:3000](http://localhost:3000) with your browser to see the result

<br  />

## Folders

- `public`: contains asset files such as images, icons, fonts, etc. used in components and pages

- `api`: contains configs of axios library to connect APIs and the functions to call respective endpoints

- `app`: contains the pages (`page.tsx` or folders to specify routes) of the project and other files to implement usage like:

- `layout.tsx`: This file is used to define the layout of your application. It can be used to wrap all your pages and provide a consistent layout across your application.

- `loading.tsx`: This file is used to define the loading state of your application. It can be used to display a loading spinner or any other loading state while your application is fetching data.

- `error.tsx`: This file is used to define the error state of your application. It can be used to display an error message or any other error state when your application encounters an error.

- `not-found.tsx`: This file is used to define the 404 page of your application. It can be used to display a custom 404 page when a user navigates to a non-existent page.

- `globals.css`:This file is used to define the global styles of your application. It can be used to define styles that are applied to all pages of your application.

- `favicon.ico`: This file is used to define the favicon of your application. It can be used to display a custom icon in the browser tab when your application is open.

- `components`: All components created and used in the project

- `theme`: Contains definitions/variables for color themes, typography and other styles related to the application theme. (Integrated with Tailwind)

- `data`: Contains the JSON file to act like an serveless API.

- `utils`: This folder contains utilities – functions, arrays, and other reusable constructs – that provide common functionality across the application.

## Files

- `.env`: Defines enviroment variables for the project

- `.nvmrc`: Defines the version of Node if you use NVM library

- `.eslintrc.json`: ESLint configs

- `.prettierrc`: Prettier configs

- `tsconfig.json`: defines options and settings for the Typescript compiler, including mapping paths for imports.

- `next.config.mjs`: NextJS configurations and plugin integrations

- `postcss.config.mjs`: PostCSS configurations and plugin integrations

- `tailwind.config.ts`: Tailwindcss Settings, Colors and Plugin Integrations

- `components.json`: Config and defines the components used by ShadCDN library

<br  />

## Vercel

You can see the project published on my Vercel on this link: [https://market-fruit-challenge.vercel.app/](https://market-fruit-challenge.vercel.app/)

<br  />

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
