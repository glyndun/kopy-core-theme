$(document).ready(function() {
    $('#contacts_table').DataTable({
        "columns": [
            {orderable: false},
            {orderable: false},
            {orderable: false},
            {orderable: false},
            {orderable: false}
        ],
        "dom": '<"top">rt<"bottom"ilp><"clear">',
        "pageLength": 15,
    });

    var myDropzone = $("#profile").dropzone({
        url: "/file/post",
        autoProcessQueue: false,
        addRemoveLinks: true,
        acceptedFiles: 'jpg,png,jpeg',
        maxFiles: 1
    });

    myDropzone.on("maxfilesexceeded", function (file) {
        myDropzone.removeAllFiles();
        myDropzone.addFile(file);
    });
});
