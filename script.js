// Get the left container
var leftContainer = document.getElementById('left-container');

// Add the 'dragstart' event listener to each item in the left container
var items = leftContainer.getElementsByClassName('item');
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('dragstart', function (event) {
        // Set the data being dragged (in this case, the HTML content of the item)
        event.dataTransfer.setData('text/plain', event.target.innerHTML);

        // Change the appearance of the dragged item
        event.target.classList.add('dragging');
    });

    items[i].addEventListener('dragend', function (event) {
        // Remove the dragging class from the dragged item
        event.target.classList.remove('dragging');
    });
}

// Get the right container
var rightContainer = document.getElementById('right-container');

// Add the 'dragover' event listener to the right container
rightContainer.addEventListener('dragover', function (event) {
    // Prevent default to allow drop
    event.preventDefault();
});

// Add the 'drop' event listener to the right container
rightContainer.addEventListener('drop', function (event) {
    // Prevent default to avoid browser handling of the data
    event.preventDefault();

    // Get the data being dragged (in this case, the HTML content of the item)
    var data = event.dataTransfer.getData('text/plain');

    // Create a new element with the dragged item's content
    var newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = data;

    // Append the new item to the right container
    rightContainer.appendChild(newItem);

    // Display a success message
    var message = document.createElement('p');
    message.textContent = 'Item dropped successfully!';
    rightContainer.appendChild(message);
});

// Get the reset button
var resetButton = document.getElementById('reset-button');

// Add the 'click' event listener to the reset button
resetButton.addEventListener('click', function () {
    // Clear the right container
    rightContainer.innerHTML = '<p>Drop items here</p>';
});
