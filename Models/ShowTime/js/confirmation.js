document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const movie = urlParams.get('movie');
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    const seats = urlParams.get('seats');
    const total = urlParams.get('total');

    document.getElementById('movieName').textContent = movie;
    document.getElementById('seatNumbers').textContent = seats;
    document.getElementById('showDate').textContent = date;
    document.getElementById('showTime').textContent = time;
});
