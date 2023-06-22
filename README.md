README:

# Test Task for Pics.io

This is a test task for creating a Comment Service. The page allows users to view and interact with comments. The initial comments are retrieved from the API endpoint [https://dummyjson.com/comments](https://dummyjson.com/comments), with a default limit of 5 comments. You can change the number of comments received by changing the API request in the `src/services/api/dummyJson.ts` file to getAllComments, look for `?limit=5`, change the number 5 if needed. By removing the `?limit=5` parameter from the function `getAllComments`, you can get 30 comments.

When the page is first loaded, the comments are fetched and stored in the local storage. If new comments are received from the database, the local storage is cleared to ensure that the most up-to-date comments are displayed. This means that if you want to fetch new comments from the database, you need to clear the local storage.

## Getting Started

To locally run the project, follow these steps:

1. Install pnpm :

```shell
 pnpm  install
```

2. Start the development server:

```shell
 pnpm  start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Functionality

The page provides the following functionality:

- Users can add comments using the comment form.
- Users can delete any comment.
- The comment text is stored in the `<textarea>` and persists even after page reloads, using the local storage.

## API Requests

The page uses the following API requests:

- **GET**: Retrieve the initial comments from [https://dummyjson.com/comments](https://dummyjson.com/comments).
- **POST**: Add a new comment to [https://dummyjson.com/comments/add](https://dummyjson.com/comments/add).
- **DELETE**: Delete a comment from [https://dummyjson.com/comments/{commentId}](https://dummyjson.com/comments/{commentId}).

Please note that these requests are fictitious and custom handlers have been added to handle them.

## Package.json

The `package.json` file includes the project's dependencies and scripts. Here are some notable packages:

- `axios`: Used for making HTTP requests.
- `react-scripts`: Provides scripts for starting and building the application.
- `tailwindcss`: A utility-first CSS framework used for styling the application.
- `typescript`: The programming language used for the project.ED

## Build

To build the application for production, run the following command:

```shell
pnpm  run build
```

This will compile the application into the `build` folder.

## Additional Scripts

The project also includes additional scripts for type-checking and linting:

- `pnpm  run type:check`: Runs type-checking using TypeScript.
- `pnpm  run lint`: Runs ESLint to lint the TypeScript files.

Feel free to reach out if you have any questions or need further assistance.

README:

# Test Task for Pics.io

This is a test task for creating a Comment Service. The page allows users to view and interact with comments. The initial comments are retrieved from the API endpoint [https://dummyjson.com/comments](https://dummyjson.com/comments), with a default limit of 5 comments. You can modify the number of comments received by changing the API request in the `src/services/api/dummyJson.ts` file. By removing the `?limit=5` parameter from the `getAllComments` function, you can receive 30 comments instead.

Users can add comments using a form and delete any comment. The comment text is stored in the `<textarea>` and persists even after page reloads, using local storage.

When the page is first loaded, the comments are fetched and stored in the local storage. If new comments are received from the database, the local storage is cleared to ensure that the most up-to-date comments are displayed. This means that if you want to fetch new comments from the database, you need to clear the local storage.

## Getting Started

To locally run the project, follow these steps:

1. Install pnpm : `pnpm  install`
2. Start the development server: `pnpm  start`
3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Functionality

The page provides the following functionality:

- Users can add comments using the comment form.
- Users can delete any comment.
- The comment text is stored in the `<textarea>` and persists even after page reloads, using local storage.

## API Requests

The page uses the following API requests:

- **GET**: Retrieve the initial comments from [https://dummyjson.com/comments](https://dummyjson.com/comments). The number of comments received can be modified by changing the API request.
- **POST**: Add a new comment to [https://dummyjson.com/comments/add](https://dummyjson.com/comments/add).
- **DELETE**: Delete a comment from [https://dummyjson.com/comments/{commentId}](https://dummyjson.com/comments/{commentId}).

Please note that these requests are fictitious, and custom handlers have been added to handle them.

## Package.json

The `package.json` file includes the project's dependencies and scripts. Here are some notable packages:

- `axios`: Used for making HTTP requests.
- `react-scripts`: Provides scripts for starting and building the application.
- `tailwindcss`: A utility-first CSS framework used for styling the application.
- `typescript`: The programming language used for the project.

To install the project's dependencies, run the following command:

```shell
pnpm  install
```

To start the development server, use:

```shell
pnpm  start
```

To build the application for production, use:

```shell
pnpm  run build
```

## Additional Scripts

The project also includes additional scripts for type-checking and linting:

- `pnpm  run type:check`: Runs type-checking using TypeScript.
- `pnpm  run lint`: Runs ESLint to lint the TypeScript files.

Feel free to reach out if you have any questions or need further assistance.
