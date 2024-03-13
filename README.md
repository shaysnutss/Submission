# Hello! This is the read me to set up the project!

**I have dockerized it so that there is minimal dependencies needed by the user.**

## **Dependencies needed:**

- Docker
- MySQL + MySQL workbench** (or any other platform to connect to and visualise databases)
- IDE to edit, or edit on terminal**
- Postman (or other platform to send API requests)

## **Steps:**

0. Open docker, and ensure it is running

1. Open your SQL workbench (or other software). And execute the command at `../account-service/src/main/resources/account.sql`.

2. Clone this repository into your local machine. Your terminal should be at the submissions directory.**

3. Search for the `account-service/src/main/resources/application.properties` file. This path is relative to where you are right now.

4. Write down the username and password of your database at `spring.datasource.username=` and
   `spring.datasource.password=`.

5. Ensure that no other program is running at port 30009 and 30000. Run `docker compose up`.

6. Open up postman, and start a post request to register two users. The  URL will look like `http://localhost:30000/api/v1/auth/register` And the body (JSON) of the request will look like:

   {
"name":"Maison",
"email":"maison@gmail.com",
"password":"maison",
"role":"Team member"
   }

7. Execute another request for the same endpoint/URL:
{
"name":"Henry",
"email":"henry@gmail.com",
"password":"henry",
"role":"Manager"
}

Note: everytime you want to register a manager user, make sure the role is "Manager" with a capital "M".

8. After that is done, just make sure to check your SQL to see that the users are populated. You can use MySQL Workbench for this.

9. Now open your browser, and navigate to http://localhost:30000. You can sign in as both Henry and Maison now!

