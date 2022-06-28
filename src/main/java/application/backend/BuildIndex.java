// BuildIndex.java
// Uses Lucene to build an index from .html files
// Each Lucene document has multiple fields defined in indexDoc()

package application.backend;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.jsoup.Jsoup;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.Date;

public class BuildIndex {

    // Run to build index
    public static void main(String[] args) throws Exception {
        BufferedReader in = new BufferedReader (new InputStreamReader(System.in));

        // Get document path
        System.out.println("What is the path to the documents? (Press Enter for Default)");
        String docsPath = in.readLine();
        if(docsPath.trim().equals("")) { // Enter is pressed
            docsPath = "output/";
        } else if (!docsPath.endsWith("/")) { // Clean
            docsPath = docsPath + "/";
        }
        System.out.println("docsPath = " + docsPath);

        // Build index
        buildIndex(Path.of(docsPath), Path.of("index/"));
    }

    // BUILD INDEX
    public static void buildIndex(Path docsPath, Path indexPath) throws Exception {
        // Initialize Analyzer and DirectoryReader
        Analyzer analyzer = new StandardAnalyzer();
        Directory directory = FSDirectory.open(indexPath);
        DirectoryReader directoryReader = DirectoryReader.open(directory);

        // Exit if files aren't readable
        if(!Files.isReadable(docsPath)) {
            System.out.println("Document directory '" + docsPath.toAbsolutePath() + "' is not readable");
            System.exit(1);
        }

        // Record start time
        Date start = new Date();

        // Create new config and increase RAM buffer
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        config.setOpenMode(IndexWriterConfig.OpenMode.CREATE); // Create new index if one already exists in indexPath
        config.setRAMBufferSizeMB(256.0);

        // Create IndexWriter
        IndexWriter indexWriter = new IndexWriter(directory, config);

        // Index all Documents from docsPath
        indexDocs(indexWriter, docsPath);

        // Call forceMerge (static index)
        indexWriter.forceMerge(1);

        // Close IndexWriter
        indexWriter.close();

        // Record end time
        Date end = new Date();

        // Print time it took to index # of Documents
        System.out.println("Indexed " + directoryReader.numDocs() + " documents in " +
                (end.getTime() - start.getTime()) + " milliseconds");

        directoryReader.close();
    }

    // Traverse through docsPath to find readable Documents to index
    private static void indexDocs(IndexWriter writer, Path docsPath) throws IOException {
        if (Files.isDirectory(docsPath)) { // File in directory path
            // Visit every file in path
            Files.walkFileTree(docsPath, new SimpleFileVisitor<>() {
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
                    try { // Index Documents
                        indexDoc(writer, file, attrs.lastModifiedTime().toMillis());
                    } catch (IOException ignore) { // Don't index files that can't be read
                        System.out.println(file + " cannot be read");
                    }
                    return FileVisitResult.CONTINUE;
                }
            });
        } else { // File not in directory path
            indexDoc(writer, docsPath, Files.getLastModifiedTime(docsPath).toMillis());
        }
    }

    // Index a single Document with multiple fields
    private static void indexDoc(IndexWriter writer, Path file, long lastModified) throws IOException {
        try (InputStream stream = Files.newInputStream(file)) {
            // Create empty (Lucene) Document
            Document doc = new Document();

            // Create a jsoup Document from file
            File input = new File(file.toString());
            org.jsoup.nodes.Document jsoupDoc = Jsoup.parse(input, "UTF-8", "");

            // Decode fileName to extract url
            String fileName = file.getFileName().toString();
            String url = decodeURL(fileName);
            BufferedReader contents = new BufferedReader(new InputStreamReader(stream, StandardCharsets.UTF_8));

            // Add Fields to Document
            doc.add(new StringField("path", file.toString(), Field.Store.YES));
            doc.add(new StringField("filename", fileName, Field.Store.YES));
            doc.add(new StringField("title", jsoupDoc.title(), Field.Store.YES));
            doc.add(new StringField("url", url, Field.Store.YES));
            doc.add(new TextField("contents", contents));
            doc.add(new StringField ("lastModified", String.valueOf(lastModified), Field.Store.YES));

            // Add Document to Index
            System.out.println("Adding " + fileName);
            writer.addDocument(doc);
        }
    }

    // Decodes URL from fileName to use as Document field
    private static String decodeURL(String fileName) {
        String url = fileName.replaceAll("%col%", ":");
        url = url.replaceAll("%sl%", "/");
        url = url.replaceAll("%que%", "?");
        url = url.replaceAll("%ast%", "*");
        url = url.replaceAll(".html", "");
        //url = "http://" + url;

        return url;
    }
}
