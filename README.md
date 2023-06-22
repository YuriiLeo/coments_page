README:

# Test Task for Pics.io

This is a test task for creating an information page with comments. The page retrieves the initial comments from the API endpoint [https://dummyjson.com/comments](https://dummyjson.com/comments). The page allows users to add comments using a form and delete any comment.

## Getting Started

To locally run the project, follow these steps:

1. Install npm:

```shell
 npm install
```

2. Start the development server:

```shell
 npm start
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

## Build

To build the application for production, run the following command:

```shell
npm run build
```

This will compile the application into the `build` folder.

Feel free to reach out if you have any questions or need further assistance.
