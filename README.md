Bookmarklet that will convert your Wordle Results into Reddit Formatted text.

# Installation

1. Create a New Bookmark
2. Add the following to the URL portion of the bookmark.

    ``javascript:void%20function(){var%20a=document.getElementsByTagName(%22textarea%22)[0].value.split(%22\n%22),b=a.slice(0,2);for(i=2;i%3Ca.length;i++)b.push(a[i].match(/[^a-zA-Z]+/)[0].trim()+%22%20%3E!%22+a[i].match(/[a-zA-Z]+/)[0].toUpperCase()+%22!%3C%22,%22%22);document.getElementsByTagName(%22textarea%22)[0].value=b.join(%22\n%22)}();``

4. Name and save the Bookmark

# Usage

1. Copy and Paste your Wordle Results into the Reddit textbox.  
2. Add your Guesses to the right side of each line. 
3. Click the Bookmark.  The text should be replaced with properly formatted text.
