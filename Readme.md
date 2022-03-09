# Assignment 1: Node Modules, Express and REST API

## Assignment Requirements
The creaded REST API built here supports the following REST API end points:

1. - http://localhost:3000/dishes/ 
   - http://localhost:3000/dishes/:dishId 
 
2. - http://localhost:3000/promotions
   - http://localhost:3000/promotions/:promoId
3. - http://localhost:3000/leaders 
   - http://localhost:3000/leaders/:leaderId


The application supports GET, PUT, POST and DELETE operations on each of the endpoints mentioned above, including supporting the use of route parameters to identify a specific dish, promotion and leader.


## Task 1
Created a separate Node module implementing an Express router to support the REST API for the dishes. 
Completed the following in order to do this:
1. Created a Node module named dishRouter.js that implements the Express router for the /dishes and /dishes/:dishId REST API end points.
2. Required the created Node module within the Express application and mounted it on the /dishes route.

## Task 2
Created a separate Node module implementing an Express router to support the REST API for the promotions. 
Completed the following in order to do this:
1. Created a Node module named promoRouter.js that implements the Express router for the /promotions and /promotions/:promoId REST API end points.
2. Required the created Node module within the Express application and mounted it on the /promotions route.

## Task 3
Created a separate Node module implementing an Express router to support the REST API for the leaders. 
1. Created a Node module named leaderRouter.js that implements the Express router for the /leaders  and /leaders/:leaderId REST API end points.
2. Required the creaded Node module within the Express application and mounted it on the /leaders route.