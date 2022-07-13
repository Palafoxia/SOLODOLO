// HomeView.java
// Uses Vaadin to build a UI for the Java web application
// This view is the homepage for the SOLODOLO search engine
// Includes functionality for a search box and buttons

package application.UI;

// Vaadin Imports
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

// Lucene Imports
import org.apache.lucene.document.Document;
import org.apache.lucene.queryparser.classic.ParseException;

// Other Imports
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import static application.backend.SearchIndex.searchIndex;

@PageTitle("SOLODOLO | Home")
@Route(value = "")
public class HomeView extends VerticalLayout {

    // Child Layouts
    VerticalLayout results = new VerticalLayout(); // Results of search
    VerticalLayout messageLayout = new VerticalLayout(); // Message for search
    HorizontalLayout buttons1 = new HorizontalLayout(); // Previous/Next Buttons
    HorizontalLayout buttons2 = new HorizontalLayout(); // Clear Button

    int pageNum = 1;
    final int DOCS_PER_PAGE = 5;

    public HomeView() { // Parent (Vertical) Layout
        // Child Layout Settings
        results.setSizeFull();
        results.setSpacing(false);
        results.setJustifyContentMode(JustifyContentMode.CENTER);
        results.setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        messageLayout.setSizeFull();
        messageLayout.setSpacing(false);
        messageLayout.setDefaultHorizontalComponentAlignment(Alignment.CENTER);

        // Title and Image
        setSpacing(false);
        H1 header = new H1("SOLODOLO");
        Paragraph description = new Paragraph("Search for Aliens \uD83D\uDC7D");
        Image astronaut = new Image("images/Astronaut.png", "Astronaut");
        astronaut.setWidth("200px");
        add(header, astronaut, description);

        // Search Box
        TextField searchBox = new TextField("");
        searchBox.setPlaceholder("search");
        searchBox.setClearButtonVisible(true);
        searchBox.setMaxLength(20);

        // Search when searchButton is clicked or ENTER is pressed
        Button searchButton = new Button("Search");
        searchButton.addClickShortcut(Key.ENTER);
        searchButton.addClickListener(event -> {
            try {
                search(searchBox.getValue());
            } catch (ParseException | IOException e) {
                throw new RuntimeException(e);
            }
        });

        // Add searchButton and searchBox to layout
        HorizontalLayout searchLayout = new HorizontalLayout(searchBox, searchButton);
        searchLayout.setDefaultVerticalComponentAlignment(Alignment.BASELINE);
        add(searchLayout);

        // Parent Layout Settings
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");

    }

    // Searches index when search button is clicked
    public void search(String query) throws ParseException, IOException {
        // Check if query is empty or too long
        if(query.trim().equals("")) {
            Notification.show("Nothing in the search box");
            return;
        } else if(query.length() > 20) {
            Notification.show("Query is too long, max length 20");
            return;
        }  else {
            Notification.show("Searching for " + query + "....");
        }

        // Get search results
        Date start = new Date();
        final ArrayList<Document> hitDocs = searchIndex(query);
        Date end = new Date();

        assert hitDocs != null : "Results list is empty";
        if(hitDocs.size() == 0 || hitDocs.size() == 1) {
            Notification.show("No results");
            return;
        }

        // Reset
        reset();

        // Make buttons layout
        Button clearButton = new Button("Clear");
        clearButton.addThemeVariants(ButtonVariant.LUMO_ERROR);

        Button previousButton = new Button("Previous");
        previousButton.addThemeVariants(ButtonVariant.LUMO_CONTRAST);

        Button nextButton = new Button("Next");
        nextButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        buttons1.add(previousButton, nextButton);
        buttons2.add(clearButton);
        add(buttons1, buttons2);

        // Put top results on screen and print message
        Paragraph message = new Paragraph();
        Text messageText;

        if(hitDocs.size() == 500) {
            messageText = new Text((hitDocs.size() + " (max) results returned in "
                    + (end.getTime() - start.getTime()) + " milliseconds"));
        } else {
            messageText = new Text((hitDocs.size() + " results returned in "
                    + (end.getTime() - start.getTime()) + " milliseconds"));
        }

        message.add(messageText);
        messageLayout.add(message);
        add(messageLayout);

        generatePage(hitDocs);

        // BUTTON FUNCTIONALITY
        // Clear button clears results and hitDocs ArrayList
        clearButton.addClickListener(event -> {
            reset();
            hitDocs.clear();
        });

        // Previous button goes to previous page of results
        previousButton.addClickListener(event -> {
            if(pageNum > 1) {
                pageNum--;
                generatePage(hitDocs);
            } else {
                Notification.show("Cannot go to previous page");
            }
        });

        // Next button goes to next page of results
        nextButton.addClickListener(event -> {
            if((pageNum * DOCS_PER_PAGE) < hitDocs.size()) {
                pageNum++;
                generatePage(hitDocs);
            } else {
                Notification.show("Cannot go to next page");
            }
        });
    }

    // Generate a page of results
    private void generatePage(ArrayList<Document> hitDocs) {
        remove(results);
        results.removeAll();

        for(int rank = (pageNum * DOCS_PER_PAGE) - DOCS_PER_PAGE; rank < (pageNum * DOCS_PER_PAGE); rank++) {
            // End of results
            if(rank >= hitDocs.size()) {
                break;
            }

            String title = hitDocs.get(rank).get("title");
            String url = hitDocs.get(rank).get("url");
            //String contents = hitDocs.get(rank).get("contents");
            String score = hitDocs.get(rank).get("score");
            Text rankText = new Text((rank + 1) + ". (Score: " + score + ") ");
            Anchor hyperLink = new Anchor(url, title);
            H4 titleLink = new H4(rankText, hyperLink);

            results.add(titleLink);
            results.add(new Paragraph(url));
        }
        add(results);
    }

    // Reset layouts whenever search or clear buttons are clicked
    private void reset() {
        pageNum = 1;
        // Remove from parent layout
        remove(results, messageLayout, buttons1, buttons2);

        // Remove data from each layout
        results.removeAll();
        messageLayout.removeAll();
        buttons1.removeAll();
        buttons2.removeAll();
    }
}
