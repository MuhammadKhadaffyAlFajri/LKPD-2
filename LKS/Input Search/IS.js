const searchBtn = document.getElementById('searchBtn');
const searchDateInput = document.getElementById('searchDate');
const resultsDiv = document.getElementById('results');

// Sample data to search from
const data = [
    { date: '2024-08-20', event: 'Meeting with team' },
    { date: '2024-08-21', event: 'Project deadline' },
    { date: '2024-08-22', event: 'Conference call' },
    { date: '2024-08-23', event: 'Client presentation' }
];

function searchByDate() {
    const selectedDate = searchDateInput.value;
    const result = data.filter(item => item.date === selectedDate);

    resultsDiv.innerHTML = '';
    
    if (result.length > 0) {
        result.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.date}: ${item.event}`;
            resultsDiv.appendChild(div);
        });
    } else {
        resultsDiv.textContent = 'No events found for this date.';
    }
}

searchBtn.addEventListener('click', searchByDate);