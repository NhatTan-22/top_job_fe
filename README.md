This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Install Node.js

Make sure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).

### Install project packages

```bash
npm i -f
```

### Update .env.local

Create a `.env.local` file in the root directory of the project and add the necessary environment variables. For example:

```
NEXT_PUBLIC_API_URL = backend url
```

### Build the project

```bash
npm run build
```

### Start the project

```bash
npm start
or
PORT=custom-your-port npm start
```

### Note

Every time you pull code, you need to run steps 2, 3, 4 and 5 again.

### Delete node_modules and .next folders if you encounter errors

If you encounter errors, try deleting the `node_modules` and `.next` folders, then reinstall the packages:

```bash
rm -rf node_modules .next
npm i -f
npm run build
npm start
```
