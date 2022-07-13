// Run.java
// Runs Crawler.java to crawl the web given seed URLs as threads
// Supports any (reasonable) amount of threads

package webcrawler;

// Imports
import java.util.ArrayList;
import java.util.Collections;

public class Run {
    public static void main(String[] args) {
        // ArrayList of threads
        ArrayList<Crawler> threads = new ArrayList<>();

        // ArrayList of space-themed websites
        ArrayList<String> space = new ArrayList<>();
        Collections.addAll(space, "http://www.seasky.org/", "https://www.spacex.com/", "https://www.space.com/", "https://www.astronomy.com/",
                "https://www.space.commerce.gov/", "https://www.americaspace.com/", "https://www.supercluster.com/", "https://spacenews.com/",
                "https://spaceweather.com/", "https://viewspace.org/", "https://spaceflightnow.com/", "https://astronomynow.com/",
                "https://www.spaceflightinsider.com/", "https://www.nasaspaceflight.com/",
                "https://www.youtube.com/c/NASA", "https://www.youtube.com/c/SpaceX"); // YouTube

        // Crawl with each thread
        System.out.println("SPACE.SIZE(): " + space.size());
        for(int i = 0; i < space.size(); i++) {
            threads.add(new Crawler(space.get(i), i + 1));
        }

        for(Crawler w : threads) {
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
            System.out.println("VISITED PAGES FOR THREAD " + (i + 1) + ": " + threads.get(i).getVisited().size());
            total += threads.get(i).getVisited().size();
        }
        System.out.println("TOTAL VISITED PAGES: " + total);
    }
}