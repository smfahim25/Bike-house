import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container mt-5">
                <h2>Difference between javascript and nodejs</h2>
                <p>
                Javascript is just a programming language which can be used in any environment where a Javascript interpreter or runtime is available (noticed that I used "interpreter or runtime", as modern JS engines like V8, JS is actually compiled to bytecode rather than being actually interpreted). Welcome to the rabbit hole of JS! Browser and NodeJS are just the more common ones, there are many other environments such as Electron (Desktop Applications), React Native (Mobile Applications), MUJS etc, and these different environments define what you can do with it such as manipulating DOM or server side functions or more.

                Both the browser and Node.js use JavaScript as their programming language.

                Building apps that run in the browser is a completely different thing than building a Node.js application.

                Despite the fact that it's always JavaScript, there are some key differences that make the experience radically different.


                </p>

                <h2>When should you use nodejs and when should you use mongodb?</h2>
                <p>Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.

                MongoDB is the most popular of the new breed of non-relational NoSQL databases. Specifically, it's a document database, also called a document-oriented database or a document store.

                Documents hold semistructured data, usually represented in a format like JSON or XML, and each document is associated with a unique key.
                Key values are typically a path or a URI that can be used to retrieve the associated document from the database.
                The keys are indexed, making it efficient to retrieve the associated documents.
                Document structures usually align with objects that developers are working with in code, which is a more flexible approach than the row-and-column table-oriented structure of a relational database. Developers can rework document (data) 
                </p>

                <h2>Differences between sql and nosql databases.</h2>
                <p>The five critical differences between SQL vs NoSQL are:

                    <ol>
                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li> SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </ol>

                
               
                
                
                



            </p>
            </div>
        </div>
    );
};

export default Blog;