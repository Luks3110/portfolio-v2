This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Live Version

https://frnlucas.vercel.app/

## Getting Started

This app was built with PNPM, but you can use any package manager. 

Install the dependencies:

```bash
pnpm i
```

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Project Structure

Components are at src/app/components. In the UI folder, you can find general use components, that are not binded in any specific section. Each section has its own component, and sections that have lists, have a component on plural, and a component on singular.

At lib, there's utilities and the data used in the portfolio. 

At context, there's the theme context.

You need a Resend API Key to send emails, and set it in the RESEND_API_KEY environment variable.



