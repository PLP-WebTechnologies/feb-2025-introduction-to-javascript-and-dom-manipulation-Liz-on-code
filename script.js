// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Button to change text and style of the paragraph
  const changeButton = document.getElementById('changeBtn');
  changeButton.addEventListener('click', function() {
    const introText = document.getElementById('intro');
    
    // Change the text content
    introText.textContent = 'The text has been changed!';

    // Modify the style of the paragraph
    introText.style.fontSize = '20px';
    introText.style.color = '#ff6347'; // Tomato color
    introText.style.fontWeight = 'bold';
  });

  // Button to add a new item to the list
  const addItemButton = document.getElementById('addItemBtn');
  addItemButton.addEventListener('click', function() {
    const itemList = document.getElementById('itemList');
    
    // Create a new list item
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    
    // Append the new item to the list
    itemList.appendChild(newItem);
  });
});
