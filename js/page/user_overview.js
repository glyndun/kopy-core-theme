$(document).ready(function() {
    $('#users_table').DataTable({
        "columns": [
            {orderable: false},
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
});

$(document).delegate('.btnDeleteUser', 'click', function() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f43f5e',
        cancelButtonColor: '#0ea5e9',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire(
        'Deleted!',
        'User has been deleted',
        'success'
        )
    }
    })
});
