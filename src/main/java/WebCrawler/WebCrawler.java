// WebCrawler.java
// Crawls webpages from an initial seed URL
// Creates a JSoup document for every URL found
// Crawling terminates when either MAX_LEVEL or MAX_PAGES is reached
// Multithreaded functionality

package WebCrawler;

// 3rd Party Dependencies: JSoup and Apache Commons

import org.apache.commons.io.FileUtils;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

// Other Imports
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;

public class WebCrawler implements Runnable {
    private static final int MAX_LEVEL = 6; // Highest level until crawling terminates
    private static final int MAX_PAGES = 1000; // Max pages visited for current thread until crawling terminates

    private final Thread THREAD; // Thread
    private final int THREADNUMBER; // Used to identify thread
    private final String SEED; // Initial URL
    private final ArrayList<String> visited = new ArrayList<>(); // List of visited URLs
    private final ArrayList<String> badURLs = new ArrayList<>(); // List of bad URLs
    private final ArrayList<String> uniqueWebsites = new ArrayList<>(); // List of unique hosts for robots.txt
    private final ArrayList<String> disallowedPaths = new ArrayList<>(); // List of disallowed paths from robots.txt

    // Construct WebCrawler and start thread
    public WebCrawler(String seed, int threadNumber) {
        this.SEED = seed;
        this.THREADNUMBER = threadNumber;

        THREAD = new Thread(this);
        THREAD.start();
    }

    // Run function for multithreading
    @Override
    public void run() {
        crawl(1, SEED);
    }

    // Crawl Method (Recursive)
    private void crawl(int level, String url) {
        // Crawl until max level or visited pages is reached
        if(level <= MAX_LEVEL && visited.size() < MAX_PAGES) {
            // Get the Document, output .html file, add URL to visited array
            Document doc = requestAccess(url);

            // Get all links from the Document and call crawl for each
            if(doc != null) {
                for(Element link : doc.select("a[href]")) {
                    String nextLink = link.absUrl("href");

                    // Clean the URL
                    nextLink = cleanURL(nextLink);

                    // If URL has not been visited and is not a badURL, create URL object and crawl
                    if(!(visited.contains(nextLink)) && !(badURLs.contains(nextLink))) {
                        URL urlObj;

                        try {
                            assert nextLink != null : "Current URL contains no links ";
                            urlObj = new URL(nextLink);
                        } catch(MalformedURLException e) { // Don't crawl if URL is malformed
                            System.out.println("MalformedURL: " + nextLink);
                            badURLs.add(nextLink);
                            continue;
                        }

                        // Only crawl if URL .edu
                        if(urlObj.getHost().endsWith(".edu")) {
                            crawl(level++, nextLink);
                        } else {
                            badURLs.add(nextLink);
                        }
                    }
                }
            }
        }
    }

    // Request/Return Document
    private Document requestAccess(String url) {
        try{
            // Get the Document from URL
            Connection con = Jsoup.connect(url);
            Document doc = con.get();

            // Print details, output .html file, add URL to visited list, return Document
            if(con.response().statusCode() == 200 && isAllowed(url)) { // Code 200 means can visit website
                visited.add(url);

                // Encode url to valid fileName
                String fileName = encodeURL(url);

                System.out.println("\n*Thread " + THREADNUMBER + " Received Webpage at " + url);
                System.out.println("TITLE: " + doc.title());
                System.out.println("VISITED PAGES FOR THREAD " + THREADNUMBER + ": " + visited.size());

                File f = new File("output/" + fileName);
                FileUtils.writeStringToFile(f, doc.outerHtml(), StandardCharsets.UTF_8);

                return doc;
            } else { // Cannot visit website
                badURLs.add(url);
                return null;
            }
        } catch(IOException e) {
            System.out.println("\nFailed connection to " + url);
            badURLs.add(url);
            return null;
        }
    }

    // Encode URL to valid html fileName
    private String encodeURL(String url) {
        String fileName = url.replaceAll(":", "%col%");
        fileName = fileName.replaceAll("/", "%sl%");
        fileName = fileName.replaceAll("[?]", "%que%");
        fileName = fileName.replaceAll("[*]", "%ast%");
        fileName = fileName + ".html";
        return fileName;
    }

    // Clean URL
    private String cleanURL(String url) {
        if(badURLs.contains(url)) { // Already is a bad URL
            return null;
        } else if(url.endsWith(".pdf") | url.endsWith(".png") | url.endsWith(".jpg") | url.endsWith(".jpeg")) { // Bad URL
            badURLs.add(url);
            return null;
        } else { // Good URL
            // Remove bookmark/anchor
            if(url.contains("#")) {
                url = url.substring(0, url.indexOf("#"));
            }

            // Remove index.html
            if(url.endsWith("index.html")) {
                url = url.substring(0, url.indexOf("index.html"));
            }

            // End after Login.aspx
            if(url.contains("Login.aspx")) {
                url = url.substring(0, url.indexOf("Login.aspx") + "Login.aspx".length());
            }

            // Remove self path
            if(url.endsWith("/")) {
                url = url.substring(0, url.length() - 1);
            }
            return url;
        }
    }

    // Check robots.txt (Crawler Ethics)
    private boolean isAllowed(String url) {
        try { // robots.txt exists
            URL urlObj = new URL(url);
            String website = urlObj.getProtocol() + "://" + urlObj.getHost();

            // Add disallowed paths if website is new
            if(!(uniqueWebsites.contains(website))) {
                uniqueWebsites.add(website);

                // Get robots.txt
                Connection con = Jsoup.connect(website + "/robots.txt");
                Document robotsTxt = con.get();

                // Find disallowed paths
                String body = robotsTxt.body().text();
                String[] words = body.split("\\s+");

                for(int i = 0; i < words.length - 1; i++) {
                    if(words[i].equals("Disallow:")) {
                        disallowedPaths.add(website + words[i + 1]);
                    }
                }
            }

            // Don't crawl if disallowed by robots.txt
            for (String disallowedPath : disallowedPaths) {
                if (url.contains(disallowedPath)) {
                    return false;
                }
            }

            // Not disallowed by robots.txt
            return true;
        } catch (IOException e) { // robots.txt doesn't exist
            System.out.println("robots.txt doesn't exist");
            return true;
        }
    }

    // Get thread from WebCrawler object to use thread functions
    public Thread getThread() {
        return this.THREAD;
    }

    // Get thread number from WebCrawler
    public int getThreadNumber() {
        return this.THREADNUMBER;
    }

    // Get visited ArrayList
    public ArrayList<String> getVisited() {
        return visited;
    }
}