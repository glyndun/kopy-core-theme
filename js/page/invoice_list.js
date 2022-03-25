$(document).ready(function() {
    $('#invoices_table').DataTable({
        "columns": [
            {orderable: false},
            null,
            null,
            null,
            null,
            null,
            {orderable: false}
        ],
        order: [[2, 'asc']],
        "dom": '<"top">rt<"bottom"ilp><"clear">',
        "lengthChange": true
    });
});
