document.addEventListener('DOMContentLoaded', function() {
    // Retrieve movie information from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const movie = urlParams.get('movie');
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    const selectedSeats = sessionStorage.getItem('selectedSeats') || 'No seats selected';

    const paymentOptions = document.getElementById('paymentOptions');
    const paymentForm = document.getElementById('paymentForm');
    const creditCardForm = document.getElementById('creditCardForm');
    const gpayForm = document.getElementById('gpayForm');
    const phonepeForm = document.getElementById('phonepeForm');
    const paytmForm = document.getElementById('paytmForm');
    const bill = document.getElementById('bill');
    const ticket = document.getElementById('ticket');
    const ticketDetails = document.getElementById('ticketDetails');
    const qrCodeCanvas = document.getElementById('qrCodeCanvas');
    const totalCost = document.getElementById('totalCost');

    // Display bill details before payment process
    function displayBillDetails() {
        const billDetails = document.getElementById('billDetails');
        const seatPrices = calculateSeatPrices();
        const totalPrice = calculateTotalPrice();
        billDetails.innerHTML = `
            <p>Movie: ${movie}</p>
            <p>Date: ${date}</p>
            <p>Time: ${time}</p>
            <p>Seats: ${selectedSeats}</p>
            <div class="seat-prices">
                ${seatPrices}
            </div>
            <p class="total-price">Total Price: ₹${totalPrice}</p>
        `;
        totalCost.innerText = `Total Cost: ₹${totalPrice}`;
    }

    // Display selected payment method form
    const paymentMethodButtons = document.querySelectorAll('.payment-method');
    paymentMethodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const method = this.dataset.method;
            paymentForm.style.display = 'block';
            creditCardForm.style.display = method === 'credit-card' ? 'block' : 'none';
            gpayForm.style.display = method === 'gpay' ? 'block' : 'none';
            phonepeForm.style.display = method === 'phonepe' ? 'block' : 'none';
            paytmForm.style.display = method === 'paytm' ? 'block' : 'none';
        });
    });

    // Calculate seat prices
    function calculateSeatPrices() {
        const seats = selectedSeats.split(', ');
        let seatPricesHtml = '';
        seats.forEach(seat => {
            const row = seat.charAt(0);
            const price = (row >= 'A' && row <= 'O') ? 150 : 100;
            seatPricesHtml += `<p>Seat ${seat}: ₹${price}</p>`;
        });
        return seatPricesHtml;
    }

    // Calculate total price
    function calculateTotalPrice() {
        const seats = selectedSeats.split(', ');
        let totalPrice = 0;
        seats.forEach(seat => {
            const row = seat.charAt(0);
            totalPrice += (row >= 'A' && row <= 'O') ? 150 : 100;
        });
        return totalPrice;
    }

    // Generate QR code for ticket
    function generateQRCode() {
        const qr = new QRious({
            element: qrCodeCanvas,
            value: `Movie: ${movie}\nDate: ${date}\nTime: ${time}\nSeats: ${selectedSeats}`
        });
    }

    // Show ticket details
    function showTicket() {
        ticketDetails.innerHTML = `
            <p>Movie: ${movie}</p>
            <p>Date: ${date}</p>
            <p>Time: ${time}</p>
            <p>Seats: ${selectedSeats}</p>
        `;
        generateQRCode();
        bill.style.display = 'none';
        ticket.style.display = 'block';
    }
    document.addEventListener('DOMContentLoaded', function() {
        // Retrieve movie information from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const movie = urlParams.get('movie');
        const date = urlParams.get('date');
        const time = urlParams.get('time');
        const selectedSeats = sessionStorage.getItem('selectedSeats') || 'No seats selected';
    
        const paymentOptions = document.getElementById('paymentOptions');
        const paymentForm = document.getElementById('paymentForm');
        const creditCardForm = document.getElementById('creditCardForm');
        const gpayForm = document.getElementById('gpayForm');
        const phonepeForm = document.getElementById('phonepeForm');
        const paytmForm = document.getElementById('paytmForm');
        const bill = document.getElementById('bill');
        const ticket = document.getElementById('ticket');
        const ticketDetails = document.getElementById('ticketDetails');
        const qrCodeCanvas = document.getElementById('qrCodeCanvas');
        const totalCost = document.getElementById('totalCost');
    
        // Display bill details before payment process
        function displayBillDetails() {
            const billDetails = document.getElementById('billDetails');
            const seatPrices = calculateSeatPrices();
            const totalPrice = calculateTotalPrice();
            billDetails.innerHTML = `
                <p>Movie: ${movie}</p>
                <p>Date: ${date}</p>
                <p>Time: ${time}</p>
                <p>Seats: ${selectedSeats}</p>
                <div class="seat-prices">
                    ${seatPrices}
                </div>
                <p class="total-price">Total Price: ₹${totalPrice}</p>
            `;
            totalCost.innerText = `Total Cost: ₹${totalPrice}`;
        }
    
        // Display selected payment method form
        const paymentMethodButtons = document.querySelectorAll('.payment-method');
        paymentMethodButtons.forEach(button => {
            button.addEventListener('click', function() {
                const method = this.dataset.method;
                paymentForm.style.display = 'block';
                creditCardForm.style.display = method === 'credit-card' ? 'block' : 'none';
                gpayForm.style.display = method === 'gpay' ? 'block' : 'none';
                phonepeForm.style.display = method === 'phonepe' ? 'block' : 'none';
                paytmForm.style.display = method === 'paytm' ? 'block' : 'none';
            });
        });
    
        // Calculate seat prices
        function calculateSeatPrices() {
            const seats = selectedSeats.split(', ');
            let seatPricesHtml = '';
            seats.forEach(seat => {
                const row = seat.charAt(0);
                const price = (row >= 'A' && row <= 'O') ? 150 : 100;
                seatPricesHtml += `<p>Seat ${seat}: ₹${price}</p>`;
            });
            return seatPricesHtml;
        }
    
        // Calculate total price
        function calculateTotalPrice() {
            const seats = selectedSeats.split(', ');
            let totalPrice = 0;
            seats.forEach(seat => {
                const row = seat.charAt(0);
                totalPrice += (row >= 'A' && row <= 'O') ? 150 : 100;
            });
            return totalPrice;
        }
    
        // Generate QR code for ticket
        function generateQRCode() {
            const qr = new QRious({
                element: qrCodeCanvas,
                value: `Movie: ${movie}\nDate: ${date}\nTime: ${time}\nSeats: ${selectedSeats}`
            });
        }
    
        // Show ticket details
        function showTicket() {
            ticketDetails.innerHTML = `
                <p>Movie: ${movie}</p>
                <p>Date: ${date}</p>
                <p>Time: ${time}</p>
                <p>Seats: ${selectedSeats}</p>
            `;
            generateQRCode();
            bill.style.display = 'none';
            ticket.style.display = 'block';
        }
    
        // Handle payment
        document.getElementById('payWithCard').addEventListener('click', function() {
            showTicket();
        });
    
        document.getElementById('payWithGpay').addEventListener('click', function() {
            showTicket();
        });
    
        document.getElementById('payWithPhonepe').addEventListener('click', function() {
            showTicket();
        });
    
        document.getElementById('payWithPaytm').addEventListener('click', function() {
            showTicket();
        });
    
        // Display initial bill details
        displayBillDetails();
    });
    
    document.getElementById('payWithCard').addEventListener('click', function() {
        showTicket();
    });

    document.getElementById('payWithGpay').addEventListener('click', function() {
        showTicket();
    });

    document.getElementById('payWithPhonepe').addEventListener('click', function() {
        showTicket();
    });

    document.getElementById('payWithPaytm').addEventListener('click', function() {
        showTicket();
    });

    // Display initial bill details
    displayBillDetails();
});
