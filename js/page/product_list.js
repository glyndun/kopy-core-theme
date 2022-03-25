$(document).ready(function() {
    $('#products_table').DataTable({
        "columns": [
            {orderable: false},
            {orderable: false},
            null,
            null,
            null,
            null,
            null,
            {orderable: false},
        ],
        order: [[2, 'asc']],
        "pageLength": 10,
        "dom": '<"top">rt<"bottom"ilp><"clear">'
    });
});

$('#status').select2({
    minimumResultsForSearch: Infinity
});

$('[name="sort"]').select2({
    minimumResultsForSearch: Infinity
});

// The dropzone method is added to jQuery elements and can
// be invoked with an (optional) configuration object.
$("#file").dropzone({
    url: "/file/post",
    autoProcessQueue: false,
    addRemoveLinks: true,
    acceptedFiles: 'xlsx,xls',
    maxFiles: 1
});

$(document).delegate('#products_table .form-check-input', 'change', function() {
    var check = this.checked;
    if (this.id === "select_all") {
        $("#products_table").find(".form-check-input").map(function() {
            if (this.id !== "select_all") {
                this.checked = check;
            }
        });
    } else {
        if ($("#products_table").find('tbody tr').length === $("#products_table").find('tbody .form-check-input:checked').length) {
            $("#select_all")[0].checked = true;
        } else {
            $("#select_all")[0].checked = false;
        }
    }

    if ($("#products_table").find('tbody .form-check-input:checked').length) {
        $("#more_actions").removeClass("d-none", );
        $("#main_actions").addClass("d-none");
    } else {
        $("#more_actions").addClass("d-none", );
        $("#main_actions").removeClass("d-none");
    }
});
