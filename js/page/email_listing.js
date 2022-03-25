$(document).ready(function() {
    $('#emails_table').DataTable({
        "columns": [
            {orderable: false},
            {orderable: false},
            {orderable: false},
            {orderable: false},
            {orderable: false}
        ],
        "dom": '<"top"f>rt<"bottom"ilp><"clear">'
    });
});
