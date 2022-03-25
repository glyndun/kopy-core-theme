$(document).ready(function() {
    $('select').select2({
        placeholder: 'Select option',
        allowClear: true
    });

    $('#subscriptions_table').DataTable({
        "columns": [
            {orderable: false},
            null,
            null,
            null,
            null,
            null,
            {orderable: false}
        ],
        order: [[1, 'asc']],
        "dom": '<"top">rt<"bottom"ilp><"clear">',
        "lengthChange": true
    });

    $(document).delegate('#subscriptions_table .form-check-input', 'change', function() {
        var check = this.checked;
        if (this.id === "select_all") {
            $("#subscriptions_table").find(".form-check-input").map(function() {
                if (this.id !== "select_all") {
                    this.checked = check;
                }
            });
        } else {
            if ($("#subscriptions_table").find('tbody tr').length === $("#subscriptions_table").find('tbody .form-check-input:checked').length) {
                $("#select_all")[0].checked = true;
            } else {
                $("#select_all")[0].checked = false;
            }
        }

        if ($("#subscriptions_table").find('tbody .form-check-input:checked').length) {
            $("#more_actions").removeClass("d-none", );
            $("#main_actions").addClass("d-none");
        } else {
            $("#more_actions").addClass("d-none", );
            $("#main_actions").removeClass("d-none");
        }
    });

});
