# Template example

## Running the project

1. Make sure you have installed `node` and `yarn` (using `volta` is highly
recommended).

```sh
$ node -v
v18.14.0
$ yarn -v
v1.22.19
```

2. Install all the dependencies. In the **root** of the application run:

```sh
yarn
```

3. Start the "mock" server from the root of the project. Small server that is
   executed using `json-server`:

```sh
yarn start:server
```

4. Start all the applications (i.e. the frontends):

```sh
yarn dev
```

> We can run all the applications using this simple command thanks to turborepo,
> which is a tool developed by Vercel that simplifies the management of
> monorepos.

To make sure that you do not come across any issue, make sure that **you are not
opening the application on `localhost:<port>` but in `127.0.0.1:<port>`.
Otherwise, you may come across some CORS issues.
