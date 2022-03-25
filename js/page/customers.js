$(document).ready(function() {
    $('#customers_table').DataTable({
        "columns": [
            {orderable: false},
            {orderable: false},
            null,
            null,
            null,
            {orderable: false},
        ],
        order: [[2, 'asc']],
        "pageLength": 10,
        "dom": '<"top">rt<"bottom"ilp><"clear">',
        "scrollX": true
    });
});

$('#status').select2({
    minimumResultsForSearch: Infinity
});

$(document).delegate('#customers_table .form-check-input', 'change', function() {
    var check = this.checked;
    if (this.id === "select_all") {
        $("#customers_table").find(".form-check-input").map(function() {
            if (this.id !== "select_all") {
                this.checked = check;
            }
        });
    } else {
        if ($("#customers_table").find('tbody tr').length === $("#customers_table").find('tbody .form-check-input:checked').length) {
            $("#select_all")[0].checked = true;
        } else {
            $("#select_all")[0].checked = false;
        }
    }

    if ($("#customers_table").find('tbody .form-check-input:checked').length) {
        $("#more_actions").removeClass("d-none", );
        $("#main_actions").addClass("d-none");
    } else {
        $("#more_actions").addClass("d-none", );
        $("#main_actions").removeClass("d-none");
    }
});
