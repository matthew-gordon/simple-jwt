

/* Client: Enter your email and password into the login form.
Client: On form submit call $auth.login() with email and password.
Client: Send a POST request to /auth/login.
Server: Check if email exists, if not - return 401.
Server: Check if password is correct, if not - return 401.
Server: Create a JSON Web Token and send it back to the client.
Client: Parse the token and save it to Local Storage for subsequent use after page reload. */
