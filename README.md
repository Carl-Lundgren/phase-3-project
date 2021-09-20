# Phase 3 'Not Yelp' Project

The 'Not Yelp' website allows you to look at restaurants and reviews as established in the ruby backend, as well as delete write your own reviews for those restaurants by interacting with the backend server through Fetch and various crd actions.

## Requirements

1. Access a Sqlite3 database using Active Record.
2. You should have a minimum of two models with a one to many relationship.
3. You should build out a simple **React** frontend to give your user 3 of the 4
   CRUD abilities for at least one of your resources. For example, build out a
   todo list. A user should be able to create a new todo, see all todos,
   update a todo item, and delete a todo. Todos can be grouped into categories,
   so that a todo has many categories and categories have many todos.
4. Use good OO design patterns. You should have separate classes for your
   models.


**Setup**

First, cd into the `backend` folder and run `bundle install` in your backend
folder to install your gems.

**Start your server with:**

```sh
shotgun --port=9292
```

> **Note:** This will run your server on port
> [http://localhost:9292](http://localhost:9292).


For your frontend, cd into the `frontend` folder and run `npm install` to install your dependencies.

**Start your frontend server with:**

```sh
npm start
```