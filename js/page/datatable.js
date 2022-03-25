$(document).ready(function() {
    $('#datatable-1').DataTable({
        "lengthChange": true,
        "bInfo" : true,
        "language": {
            "lengthMenu": "Per page: _MENU_",
        },
    });

    $('#datatable-2').DataTable({
        "dom": '<"top">rt<"bottom"ilp><"clear">',
        "pageLength": 15,
    });

    $('#datatable-3').DataTable({
        "dom": '<"top">rt<"bottom"ilp><"clear">',
        "lengthChange": true
    });
} );
