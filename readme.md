# What is GraphQL ?

it is a query languange for API, developed by facebook. It provides an approach to developing web APIs and has been compared ans contrasted with REST and other web services architectures.

It allows clients to define the structure of the data required, and the same structure of the data is returned from the server, therefore preventing excessively large amount of data from being returned,but this has implications for how effective web caching of query results can be.


# Difference between Graphql and Rest

**REST**(Representational State Transfer)is an API design architecture to implement web services.
>Rest-compliant web services allow the requesting systems to access and manipulate textual representations of web resources by using a uniform and predefined set of stateless operations.
>When **HTTP** is used, the most common operations available are **GET**, **POST**, **PUT**, and **DELETE**.
>The core concept of **REST** is that everything is a resource. While **REST** was a great solution when it was first proposed, there are some issues that architecture suffer from right now.


**GraphQL** is an API design architecture that takes a different, more flexible approach. 
>The key difference between **GraphQL** vs **REST** is that **GraphQL** doesn’t deal with dedicated resources. Instead, everything is regarded as a graph implying it’s connected.
>You can tailor your request to match your exact requirements using the GraphQL query language. In addition to this, it lets you combine different entities into a single query.e **offline!**

## Data fetching with REST causes over- and under-fetching issues whereas this simply isn’t possible with GraphQL.

-   The endpoint you call in **REST** is that object’s identity whereas, in **GraphQL**, the object’s identity has nothing to do with how you fetch it. In other words, in **REST** you define the object on Backend and on **GraphQL** you "define" this object on Frontend.
    
-   With **REST**, the server determines the shape and size of the resource whereas, in **GraphQL**, the server simply declares the available resources and the client can ask for exactly what it needs.
    
-   **REST** automatically puts caching into effect whereas **GraphQL** has no automatic caching system.
    
-   Error handling in **REST** is much simpler as compared to **GraphQL** which typically gives you a __200 OK__ status code.

## Schema

A **GraphQL** schema is at the core of any **GraphQL** server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a **GraphQL** schema and build an interface around it.

The **GraphQL** runtime defines a generic graph-based schema to publish the capabilities of the data service it represents. Client applications can query the schema within its capabilities. This approach decouples clients from servers and allows both to evolve and scale independently.

## Resolvers
**Resolver** is a collection of functions that generate response for a **GraphQL** query. In simple terms, a resolver acts as a **GraphQL** query handler. Every resolver function in a **GraphQL** schema accepts four positional arguments as given below :-

*fieldName:(root, args, context, info) => { result }*

- **Root**: The object that contains the result returned from the resolver on the parent field.
- **Args**: An object with the arguments passed into the field in the query.
- **Context**: This is an object shared by all resolvers in a particular query.
- **Info**: It contains information about the execution state of the query, including the field name, path to the field from the root.
