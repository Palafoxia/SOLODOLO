// SearchIndex.java
// Searches an index given a query from the path "index/"
// Returns results in an array of documents sorted by Lucene score

package application.backend;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.StringField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

import java.io.IOException;
import java.nio.file.Path;
import java.util.ArrayList;

public class SearchIndex {
    // SEARCH INDEX
    public static ArrayList<Document> searchIndex(String queryString) throws ParseException, IOException {
        // Initialize Analyzer, DirectoryReader, and IndexSearcher
        Analyzer analyzer = new StandardAnalyzer();
        Directory directory = FSDirectory.open(Path.of("index/"));
        DirectoryReader directoryReader = DirectoryReader.open(directory);
        IndexSearcher indexSearcher = new IndexSearcher(directoryReader);

        // Clean queryString
        queryString = queryString.trim();
        if(queryString.length() == 0) { // If only whitespace
            System.out.println("Empty query");
            return null;
        }

        // Parse a query that searches for "contents"
        QueryParser parser = new QueryParser("contents", analyzer);
        Query query = parser.parse(queryString);

        System.out.println("Searching for: " + query.toString("contents"));

        // Maximum Documents that can be hit
        int topHitCount = 500;

        // Search for Documents from query and score
        TopDocs results = indexSearcher.search(query, topHitCount);
        ScoreDoc[] hits = results.scoreDocs;
        int numTotalHits = Math.toIntExact(results.totalHits.value);
        System.out.println(numTotalHits + " total matching documents");

        ArrayList<Document> hitDocs = new ArrayList<>();

        // Iterate through the results and add to hitDocs ArrayList
        for (ScoreDoc hit : hits) {
            Document hitDoc = indexSearcher.doc(hit.doc);
            hitDoc.add(new StringField("score", String.valueOf(hit.score), Field.Store.YES));
            hitDocs.add(hitDoc);
        }
        return hitDocs;
    }
}