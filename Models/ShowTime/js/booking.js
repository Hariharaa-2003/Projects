document.addEventListener('DOMContentLoaded', function() {
    const schedule = {
        "2024-07-31": [
            { movie: "Raayan", timings: { screen1: "10:00 AM", screen2: "10:15 AM", screen3: "10:30 AM", screen4: "10:45 AM" } },
            { movie: "Deadpool", timings: { screen1: "12:00 PM", screen2: "12:15 PM", screen3: "12:30 PM", screen4: "12:45 PM" } },
            { movie: "Indian 2", timings: { screen1: "2:00 PM", screen2: "2:15 PM", screen3: "2:30 PM", screen4: "2:45 PM" } },
            { movie: "Raayan", timings: { screen1: "4:00 PM", screen2: "4:15 PM", screen3: "4:30 PM", screen4: "4:45 PM" } },
            { movie: "kalki 2898 AD", timings: { screen1: "6:00 PM", screen2: "6:15 PM", screen3: "6:30 PM", screen4: "6:45 PM" } },
            { movie: "Teenz", timings: { screen1: "8:00 PM", screen2: "8:15 PM", screen3: "8:30 PM", screen4: "8:45 PM" } }
        ],
        "2024-08-01": [
            { movie: "Raayan", timings: { screen1: "10:00 AM", screen2: "10:15 AM", screen3: "10:30 AM", screen4: "10:45 AM" } },
            { movie: "Indian 2", timings: { screen1: "12:00 PM", screen2: "12:15 PM", screen3: "12:30 PM", screen4: "12:45 PM" } },
            { movie: "kalki 2898 AD", timings: { screen1: "2:00 PM", screen2: "2:15 PM", screen3: "2:30 PM", screen4: "2:45 PM" } },
            { movie: "Raayan", timings: { screen1: "4:00 PM", screen2: "4:15 PM", screen3: "4:30 PM", screen4: "4:45 PM" } },
            { movie: "Deadpool", timings: { screen1: "6:00 PM", screen2: "6:15 PM", screen3: "6:30 PM", screen4: "6:45 PM" } },
            { movie: "Teenz", timings: { screen1: "8:00 PM", screen2: "8:15 PM", screen3: "8:30 PM", screen4: "8:45 PM" } }
        ],
        "2024-08-02": [
            { movie: "Deadpool", timings: { screen1: "10:00 AM", screen2: "10:15 AM", screen3: "10:30 AM", screen4: "10:45 AM" } },
            { movie: "Teenz", timings: { screen1: "12:00 PM", screen2: "12:15 PM", screen3: "12:30 PM", screen4: "12:45 PM" } },
            { movie: "Raayan", timings: { screen1: "2:00 PM", screen2: "2:15 PM", screen3: "2:30 PM", screen4: "2:45 PM" } },
            { movie: "kalki 2898 AD", timings: { screen1: "4:00 PM", screen2: "4:15 PM", screen3: "4:30 PM", screen4: "4:45 PM" } },
            { movie: "Deadpool", timings: { screen1: "6:00 PM", screen2: "6:15 PM", screen3: "6:30 PM", screen4: "6:45 PM" } },
            { movie: "Indian 2", timings: { screen1: "8:00 PM", screen2: "8:15 PM", screen3: "8:30 PM", screen4: "8:45 PM" } }
        ]
    };

    const dateButtons = document.querySelectorAll('.date-btn');
    const scheduleContainer = document.getElementById('schedule');
    const proceedButton = document.getElementById('proceedToSeats');
    let selectedMovie, selectedTime, selectedDate;

    // Existing date and time selection code
    dateButtons.forEach(button => {
        button.addEventListener('click', function() {
            dateButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedDate = this.dataset.date;
            const daySchedule = schedule[selectedDate];
            displaySchedule(daySchedule);
            proceedButton.disabled = true; // Disable proceed button until a time is selected
        });
    });

    function displaySchedule(daySchedule) {
        scheduleContainer.innerHTML = '';
        daySchedule.forEach(entry => {
            const row = document.createElement('div');
            row.classList.add('schedule-row');
            row.innerHTML = `
                <div class="movie">${entry.movie}</div>
                <div class="timings">
                    <div class="time-slot" data-time="${entry.timings.screen1}" data-movie="${entry.movie}" data-screen="Screen 1">${entry.timings.screen1}</div>
                    <div class="time-slot" data-time="${entry.timings.screen2}" data-movie="${entry.movie}" data-screen="Screen 2">${entry.timings.screen2}</div>
                    <div class="time-slot" data-time="${entry.timings.screen3}" data-movie="${entry.movie}" data-screen="Screen 3">${entry.timings.screen3}</div>
                    <div class="time-slot" data-time="${entry.timings.screen4}" data-movie="${entry.movie}" data-screen="Screen 4">${entry.timings.screen4}</div>
                </div>
            `;
            scheduleContainer.appendChild(row);
        });

        const timeSlots = document.querySelectorAll('.time-slot');
        timeSlots.forEach(slot => {
            slot.addEventListener('click', function() {
                selectTime(this);
            });
        });
    }

    function selectTime(slot) {
        const previouslySelected = document.querySelector('.time-slot.selected');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }

        slot.classList.add('selected');

        selectedTime = slot.dataset.time;
        selectedMovie = slot.dataset.movie;
        proceedButton.disabled = false;
    }

    proceedButton.addEventListener('click', function() {
        if (selectedDate && selectedTime && selectedMovie) {
            window.location.href = `seat-selection.html?movie=${selectedMovie}&date=${selectedDate}&time=${selectedTime}`;
        } else {
            alert('Please select a date and time.');
        }
    });

    // New location and cinema selection code
    const locationSelection = document.getElementById('locationSelection');
    const cinemaSelection = document.getElementById('cinemaSelection');
    const cinemaDivs = document.querySelectorAll('#cinemaSelection > div');
    const dateTimeSelection = document.getElementById('dateTimeSelection');

    locationSelection.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            cinemaSelection.style.display = 'block';
            dateTimeSelection.style.display = 'none';
            cinemaDivs.forEach(div => div.style.display = 'none');

            const selectedLocation = event.target.dataset.location;
            document.getElementById(`${selectedLocation}Cinemas`).style.display = 'block';
        }
    });

    cinemaSelection.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            dateTimeSelection.style.display = 'block';
            cinemaSelection.style.display = 'none';
        }
    });
});
