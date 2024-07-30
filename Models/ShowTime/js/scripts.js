document.addEventListener('DOMContentLoaded', function() {
    const bookNowButtons = document.querySelectorAll('.book-now');

    bookNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const movie = this.getAttribute('data-movie');
            window.location.href = `booking.html?movie=${movie}`;
        });
    });
});
