## A simple example combining queues and dependency injection

Configure the mode (uppercase | lowercase) in the .env USER_HANDLER var

Run with yarn dev

Post a user = {name: string, email: string, password: string} in the route localhost:3333/users

You will see the name and email in uppercase or lowercase (it uses a background job with dependency injection to process it) and a hello message coming from another background job running

This structure of background jobs scales easily

It uses bull library for background jobs and Redis (you can config Redis in .env)

Simple and powerful