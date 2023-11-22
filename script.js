function addStudy() {
    var institution = document.getElementById('institution').value;
    var datetime = new Date(document.getElementById('datetime').value);
    var description = document.getElementById('description').value;
    var name = document.getElementById('name').value;

    var formattedData = `CODE GREEN - ${institution} - ${description.toUpperCase()} - ${name} - Study Age is 1 hour, 15 minutes`;

    var futureTime = new Date(datetime.getTime() + (1 * 60 + 15) * 60 * 1000).toLocaleString();

    var outputDiv = document.getElementById('output');
    var newRow = document.createElement('div');
    newRow.className = 'row';
    newRow.innerHTML = `
        <div>${formattedData}</div>
        <div>${futureTime}</div>
        <button onclick="clearRow(this)">Clear</button>
    `;
    outputDiv.appendChild(newRow);

    // Clear the input fields
    document.getElementById('institution').value = '';
    document.getElementById('datetime').value = '';
    document.getElementById('description').value = '';
    document.getElementById('name').value = '';
}

function clearRow(button) {
    var row = button.parentNode;
    row.parentNode.removeChild(row);
}
