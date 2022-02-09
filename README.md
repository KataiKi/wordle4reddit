Bookmarklet that will convert your Wordle Results into Reddit Formatted text.

# Installation

1. Create a New Bookmark
2. Add the following to the URL portion of the bookmark.

    ``javascript:void%20function(){(function(){var%20e,t;(t=document.querySelector(%22textarea%22))%3Fe=t.value.split(%22\n%22):(t=document.querySelector('span[data-text=%22true%22]'))%26%26(e=t.innerHTML.split(%22\n%22));var%20a=e.slice(0,2);for(i=2;i%3Ce.length;i++)a.push(e[i].match(/[^a-zA-Z]+/)[0].trim()+%22%20%3E!%22+(e[i].match(/[a-zA-Z]+/)||%22%22)[0].toUpperCase()+%22!%3C%22,%22%22);%22TEXTAREA%22==t.tagName%3Ft.value=a.join(%22\n%22):%22SPAN%22==t.tagName%26%26(t.innerHTML=a.join(%22\n%22))})()}();``

4. Name and save the Bookmark

# Usage

1. Copy and Paste your Wordle Results into the Reddit textbox.  
2. Add your Guesses to the right side of each line. 
3. Click the Bookmark.  The text should be replaced with properly formatted text.


[kofi](https://ko-fi.com/kataiki)
