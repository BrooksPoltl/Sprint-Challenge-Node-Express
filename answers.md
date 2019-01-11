
- [ ] Mention two parts of Express that you learned about this week.

        allows for easy CRUD operations
        Great for server side routing

- [ ] Describe Middleware?

        middleware is something that takes the backend and creates a bridge to the front-end.

- [ ] Describe a Resource?

        resource is an object with the types of HTTP request can be made.

- [ ] What can the API return to help clients know if a request was successful?

        the api can return a 1 or the new object to show that the request worked. 
        1 is naturally truthy so it works well
        for this kind of thing, also ruturing 2XX status codes are helpful.

- [ ] How can we partition our application into sub-applications?

        Export.modules and require() allows you to cut up your application into little pieces