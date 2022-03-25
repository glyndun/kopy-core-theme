$(document).ready(function() {
    $('[name="paymentMethod"]').on('change', function() {
        $('#card-details').toggleClass('d-none', this.value !== 'card');
    });
});
