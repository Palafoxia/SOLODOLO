# SOLODOLO

This project is a .edu search engine Vaadin application with Spring Boot called SOLODOLO.
The main application opens the default browser and loads onto localhost:8080.
It searches an index of .edu webpages that have already been crawled and indexed.
The source code includes a multithreaded web crawler and an indexer to search and add
any user-crawled .edu webpages.

## Running the application

The project is a standard Maven project. To run it from the command line,
type `mvnw` (Windows), or `./mvnw` (Mac & Linux), then open
http://localhost:8080 in your browser.

Alternatively, you can run the `solodolo-1.0.jar` file to launch the application.
However, you must manually close the application regardless of how you run it.

You can also import the project to your IDE of choice as you would with any
Maven project. Read more on [how to import Vaadin projects to different 
IDEs](https://vaadin.com/docs/latest/flow/guide/step-by-step/importing)
(Eclipse, IntelliJ IDEA, NetBeans, and VS Code).

## Project structure

- `HomeView.java` in `src/main/java` contains the 
- `UI` package in `src/main/java` contains the server-side Java views of the application.
- `themes` folder in `frontend/` contains the custom CSS styles.
- `backend` package in `src/main/java` contains
