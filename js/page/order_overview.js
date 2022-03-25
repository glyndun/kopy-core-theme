$(document).ready(function() {
    $('#orders_table').DataTable({
        "columns": [
            {orderable: false},
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            {orderable: false}
        ],
        order: [[2, 'asc']],
        "dom": '<"top">rt<"bottom"ilp><"clear">',
        "scrollX": true
    });
});

$(document).delegate('#orders_table .form-check-input', 'change', function() {
    var check = this.checked;
    if (this.id === "select_all") {
        $("#orders_table").find(".form-check-input").map(function() {
            if (this.id !== "select_all") {
                this.checked = check;
            }
        });
    } else {
        if ($("#orders_table").find('tbody tr').length === $("#orders_table").find('tbody .form-check-input:checked').length) {
            $("#select_all")[0].checked = true;
        } else {
            $("#select_all")[0].checked = false;
        }
    }

    if ($("#orders_table").find('tbody .form-check-input:checked').length) {
        $("#more_actions").removeClass("d-none", );
        $("#main_actions").addClass("d-none");
    } else {
        $("#more_actions").addClass("d-none", );
        $("#main_actions").removeClass("d-none");
    }
});
