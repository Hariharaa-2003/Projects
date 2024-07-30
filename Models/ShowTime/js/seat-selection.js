document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const movie = urlParams.get('movie');
    const date = urlParams.get('date');
    const time = urlParams.get('time');

    const seatMap = document.getElementById('seatMap');
    const proceedToPayment = document.getElementById('proceedToPayment');
    const errorMessage = document.getElementById('errorMessage');

    if (seatMap) {
        const rows = 20; // Total rows
        const columns = 20; // Total columns

        for (let row = 0; row < rows; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('seat-row');
            
            // Add vertical gap after the first 10 rows
            if (row === 10) {
                const gapRow = document.createElement('div');
                gapRow.classList.add('gap-row');
                seatMap.appendChild(gapRow);
            }

            for (let col = 0; col < columns; col++) {
                // Add horizontal gap after the first 4 columns and before the last 4 columns
                if (col === 4 || col === 15) {
                    const gap = document.createElement('div');
                    gap.classList.add('gap-column');
                    rowDiv.appendChild(gap);
                }

                const seat = document.createElement('div');
                seat.classList.add('seat');
                seat.textContent = `${String.fromCharCode(65 + row)}${col + 1}`;
                seat.addEventListener('click', function() {
                    if (!seat.classList.contains('occupied')) {
                        seat.classList.toggle('selected');
                    }
                });
                rowDiv.appendChild(seat);
            }
            seatMap.appendChild(rowDiv);
        }

        proceedToPayment.addEventListener('click', function() {
            const selectedSeats = document.querySelectorAll('.seat.selected').length;
            if (selectedSeats > 0) {
                let selectedSeatsString = '';
                document.querySelectorAll('.seat.selected').forEach(seat => {
                    selectedSeatsString += seat.textContent + ' ';
                });
                sessionStorage.setItem('selectedSeats', selectedSeatsString.trim());
                window.location.href = `payment.html?movie=${movie}&date=${date}&time=${time}`;
            } else {
                displayErrorMessage('Please select at least one seat.');
            }
        });
    }

    function displayErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideErrorMessage() {
        errorMessage.style.display = 'none';
    }
});
