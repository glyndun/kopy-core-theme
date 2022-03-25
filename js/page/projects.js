$(document).ready(function() {
    // The dropzone method is added to jQuery elements and can
    // be invoked with an (optional) configuration object.
    $("#files").dropzone({
        url: "/file/post",
        autoProcessQueue: false,
        addRemoveLinks: true
    });

    $('#projects_table').DataTable({
        "columns": [
            {orderable: false},
            {orderable: false},
            {orderable: false},
            {orderable: false},
            {orderable: false},
            {orderable: false},
            {orderable: false}
        ],
        "dom": '<"top">rt<"bottom"ilp><"clear">',
        "pageLength": 15,
    });

    if(jQuery().daterangepicker) {
        var startDate = moment().add(1, 'days');

        function cb(start) {
            $('#due_date_datepicker .due_date_value').html(start.format('MMM D, YYYY'));
        }

        if($("#due_date_datepicker").length) {
            $('#due_date_datepicker').daterangepicker({
                startDate: startDate,
                locale: {format: 'YYYY-MM-DD'},
                singleDatePicker: true,
                minDate: moment(),

            }, cb);

            cb(startDate);

            // $('#due_date_datepicker').on('apply.daterangepicker', function(ev, picker) {
            //     $(picker.element).find('.due_date_value').html(picker.startDate.format('MMM D, YYYY'));
            // });
        }
    }
});
