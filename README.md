# SOLODOLO | VAADIN APPLICATION

This project is a spaced-themed search engine Vaadin application with Spring-Boot called SOLODOLO.
The main application loads a webpage onto localhost:8080 in the default browser.
The application can be used to search an index of webpages.

The source code includes a multithreaded web crawler under the `webcrawler` package that adds all crawled pages (.html files) to the `output/` folder.
The source code also includes an indexer under the `backend` package that indexes crawled pages into the `index/` folder so they may be found by the search engine.

## Running the Application
### Crawling & Indexing
If the `output/` or `index/` folders are empty, run `Run.java` then `BuildIndex.java` to crawl webpages and index them.
Note that `Run.java` may take long to finish running, so you can terminate it once you have crawled a sufficient amount of pages. 
You also have the option to change the `output/` folder to different name or location. 

### Main Application
The project is a standard Maven project. To run it from the command line,
type `mvnw` (Windows), or `./mvnw` (Mac & Linux), then open
http://localhost:8080 in your browser.

Alternatively, you can run the `SOLODOLO.jar` file to launch the application.
However, you must manually close the application regardless of how you run it.

You can also import the project to your IDE of choice as you would with any
Maven project and run `src/main/java/Application.java` from there.

## Project Structure

### Packages
- `UI` package in `src/main/java/application` contains the Vaadin server-side views of the application
- `backend` package in `src/main/java/application` contains the indexer
- `webcrawler` package in `src/main/java` contains the web crawler

### Source Code
- `Application.java` in `src/main/java` runs the Spring-Boot application with main()
- `HomeView.java` in `src/main/java/UI` is the primary and only Vaadin view of the application
- `BuildIndex.java` in `src/main/java/backend` builds the index from .html files using the Lucene library
- `SearchIndex.java` in `src/main/java/backend` searches the index using the Lucene Library
- `Crawler.java` in `src/main/webcrawler` crawls the web at different seeds using multiple threads
- `Run.java` in `src/main/webcrawler` main() runs `Crawler.java` with user defined webpages for threads/seeds

### Other Folders
- The `output/` folder contains crawled webpages as .html files
- The `index/` folder contains the index for the crawled webpages

# PROJECT REPORT PHASE 1 - CRAWLING
## Overview of the System
### Architecture
- Multiple threads are defined by String[] args in the main() method in Main.java
  - Each element in args is a seed URL
- For each element in args
  - A new WebCrawler object with a seed and a threadNumber is created in Crawler.java
  - A new thread object is created and started with thread.start() within the WebCrawler constructor
- Crawler.java implements the Runnable class for multithreading functionality
  - Each thread with a unique seed recursively calls the crawl() method in Crawler.java simultaneously until termination to collect many .html files in an output folder 
   
### Crawling Strategy
- Crawling is done with a multithreaded recursive crawl() method
  - A different seed (URL String) is given to the crawl() method for every thread
  - Each thread starts at level = 1
  - Level is incremented each time crawl() is recursively called
  - Terminates once level = 6 or when 1000 pages have been added to visited ArrayList for any given thread
- crawl() calls requestAccess() to make a connection to the url and return a document
- requestAccess()
  - Calls isAllowed() to check website’s robots.txt file
  - Outputs a .html file for every page that is successfully visited
  - Adds all successfully visited URLs to the visited ArrayList
  - Adds URL to badURL if connection unsuccessful
- crawl() finds every link in the retrieved document and calls cleans the URL
  - Don’t crawl if URL in badURLs ArrayList
  - Don’t crawl if page is pdf or image
  - Removes bookmark/anchor, index.html, Login.aspx, and self path
 
### Data Structures Employed
- No queues are necessary, a recursive crawl() method is used
- String ArrayLists employed
  - visited keeps track of URLs that have been successfully visited
    - The size of visited is used to determine when to terminate crawl()
  - badURLs keeps track of URLs that can’t be crawled due to a failed connection, a MalformedURLException, or if the URL is a pdf or image
  - uniqueWebsites keeps track of websites that have been visited so that robots.txt only needs to be analyzed once per website
  - disallowedPaths keeps track of all disallowed paths from robot.txt files

### 3rd Party Dependencies
- JSoup 1.15.1 `import org.jsoup.*` & `import org.jsoup.nodes.*`
  - Retrieves html files from the web using Connection and Document objects
  - Finds links in the Document objects using Element objects and their methods
- Apache Commons IO 2.11.0 `import org.apache.commons.io.FileUtils`
  - Writes retrieved Document objects to .html files

## Limitations of the System
- badURLs and visited ArrayLists use a lot of RAM in order to prevent the crawler from visiting these links when unnecessary
- The higher level the crawler is, the slower it becomes at crawling, partially because the program must parse through the increasing ArrayLists sizes
- A page that directs to many similar pages may take very long to crawl but can be evaded
  - Manual additions to the cleanURL() method
  - Preemptively selecting seeds that do not have this issue
  - A website’s robots.txt file may prevent this issue
- Limited amount of local storage and RAM for crawled pages

# PROJECT PHASE 2 REPORT - LUCENE INDEXING, RANKING, & GUI
## Overview of the System
### Architecture
- Uses Spring-Boot and Vaadin to create web interface
  - Ran by Application.java
  - Starts a webpage on localhost:8080
- HomeView located at localhost:8080 is the main page of the web page
  - The text in the search box is used as a query to search the index
  - The index is located at /index/, stored on disk
  - SearchIndex(query) from Index.java is called which returns an ArrayList of hit Documents
  - The fields of these Documents are used to display the title, URL, and score of each hit Document onto the web page

### Index Structures
- Uses a StandardAnalyzer, best overall
  - Tokenizes words on whitespace
  - Doesn’t include stop words
  - Forces every word to lowercase
- Each Lucene Document includes the following fields
  - “path” - path to the file
  - “filename” - file name, encoded from original URL
  - “contents” - all words from the body of the Document
  - “title” - title of the Document (from JSoup Document)
  - “url” - decoded from encoded file name
  - “score” - score of a hit Document when searched
  - “contents” is a TextField, all others are StringField
- All fields are stored in the index except “contents”
- “score” only exists when a Document is searched for and hit

### Search Algorithm
- Uses Lucene search algorithm to score documents
  - Uses BM25 similarity
  - Based on weighted tf * idf score (Term Frequency * Inverse Document Frequency)
  - idf, computed as log(1 + (N - n + 0.5) / (n + 0.5)) from:
    - n, number of documents containing term
    - N, total number of documents with field
  - tf, computed as freq / (freq + k1 * (1 - b + b * dl / avgdl)) from:
    - freq, occurrences of term within document
    - k1 = 1.2, term saturation parameter
    - b = 0.75, length normalization parameter
    - dl, length of field (approximate)
    - avgdl, average length of field

## Limitations of the System
- Due to limited amount of local storage and RAM, index is relatively small and delivers limited search results
- The Lucene ranking algorithm doesn't always return the best results

### Planned Features
- Implement PageRank into the ranking algorithm
- Display a snippet/preview for each link
- Display more links per page by making page scrollable
- Add additional Vaadin views for the homepage and searching
