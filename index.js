const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');

/*
 - Add an event listener to the entryForm variable that prevents the page from
   reloading whenever the submit button is clicked.
*/
function addEntryToDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement('div');
  entryDiv.className = 'single-entry';
  entryDiv.innerText = entryTextbox[0].value;
  entriesSection.appendChild(entryDiv);
}

entryForm.addEventListener('submit', addEntryToDom);
