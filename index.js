const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

/*
 - Add an event listener to the entryForm variable that prevents the page from
   reloading whenever the submit button is clicked.
*/
function addEntryToDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement('div');
  entryDiv.className = 'single-entry';
  entryDiv.innerText = entryTextbox.value;
  entryDiv.style.display = 'none';
  entriesSection.appendChild(entryDiv);
  entryTextbox.value = '';

  const displayEntryButton = document.createElement('button')
  displayEntryButton.className = 'display-entry-button';
  displayEntryButton.innerText = 1;
  entriesNav.appendChild(displayEntryButton);
}

entryForm.addEventListener('submit', addEntryToDom);
