Bookmarklet that will convert your Wordle Results into Reddit Formatted text.

# Installation

1. Create a New Bookmark
2. Add the following to the URL portion of the bookmark.

    ``javascript:void%20function(){var%20a,b;(b=document.querySelector(%22textarea%22))%3Fa=b.value.split(%22\n%22):(b=document.querySelector(%22span[data-text=\%22true\%22]%22))%26%26(a=b.innerHTML.split(%22\n%22));var%20c=a.slice(0,2);for(i=2;i%3Ca.length;i++)c.push(a[i].split(%22%20%22)[0]+%22%20%3E!%22+(a[i].split(%22%20%22)[1]||%22%22)+%22!%3C%22,%22%22);%22TEXTAREA%22==b.tagName%3Fb.value=c.join(%22\n%22):%22SPAN%22==b.tagName%26%26(b.innerHTML=c.join(%22\n%22))}();``

4. Name and save the Bookmark

# Usage

1. Copy and Paste your Wordle Results into the Reddit textbox.  
2. Add your Guesses to the right side of each line. 
3. Click the Bookmark.  The text should be replaced with properly formatted text.


[kofi](https://ko-fi.com/kataiki)
