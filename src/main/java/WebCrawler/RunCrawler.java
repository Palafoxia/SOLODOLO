// RunCrawler.java
// Runs WebCrawler.java to crawl the web given seed URLs as threads
// Supports any (reasonable) amount of threads

package WebCrawler;

// Imports
import java.util.ArrayList;

public class RunCrawler {
    public static void main(String[] args) {
        ArrayList<WebCrawler> threads = new ArrayList<>();

        // Crawl with each thread
        threads.add(new WebCrawler("https://ucr.edu", 1));
        threads.add(new WebCrawler("https://www.usc.edu/", 2));
        threads.add(new WebCrawler("https://www.princeton.edu/", 3));
        threads.add(new WebCrawler("https://www.ucsb.edu/", 4));
        threads.add(new WebCrawler("https://www.berkeley.edu/", 5));
        threads.add(new WebCrawler("https://www.canyons.edu/", 6));
        threads.add(new WebCrawler("https://www.chapman.edu/", 7));
        threads.add(new WebCrawler("https://www.fullerton.edu/", 8));
        threads.add(new WebCrawler("https://www.mit.edu/", 9));
        threads.add(new WebCrawler("https://www.columbia.edu/", 10));
        threads.add(new WebCrawler("https://calarts.edu/", 11));
        threads.add(new WebCrawler("https://www.juilliard.edu/", 12));
        threads.add(new WebCrawler("https://ucsd.edu/", 13));
        threads.add(new WebCrawler("https://www.stanford.edu/", 14));
        threads.add(new WebCrawler("https://www.ucla.edu/", 15));
        threads.add(new WebCrawler("https://www.columbia.edu/", 16));

        for(WebCrawler w : threads) {
            try {
                w.getThread().join();
            } catch (InterruptedException e) {
                System.out.println("THREAD " + w.getThreadNumber() + " INTERRUPTED");
                e.printStackTrace();
            }
        }

        // Print how many pages were visited by each thread and in total
        System.out.println("DONE");
        int total = 0;
        for(int i = 0; i < threads.size(); i++) {
            System.out.println("VISITED PAGES FOR THREAD " + i + ": " + threads.get(i).getVisited().size());
            total += threads.get(i).getVisited().size();
        }
        System.out.println("TOTAL VISITED PAGES: " + total);
    }
}
