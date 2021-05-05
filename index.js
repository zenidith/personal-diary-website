/*
 - Create a variable named "entryForm" and use the document.getElementById method
   to make its value the entryForm from our HTML document.
*/

const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementByClass('entry-textbox');

/*
 - Add an event listener to the entryForm variable that prevents the page from
   reloading whenever the submit button is clicked.
*/

function addEntryToDom(event) {
    event.preventDefault();
}

entryForm.addEventListener('submit', addEntryToDom)