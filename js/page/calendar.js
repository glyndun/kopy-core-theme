document.addEventListener('DOMContentLoaded', function() {
    // Event start date
    var startDate = moment();

    function cbStartDate(start, end) {
        $('#start_date_datepicker .date_value').html(start.format('MMM D, YYYY'));
    }

    $('#start_date_datepicker').daterangepicker({
        startDate: startDate,
        locale: {format: 'YYYY-MM-DD'},
        singleDatePicker: true,
    }, cbStartDate);

    cbStartDate(startDate);

    $('#start_date_datepicker').on('apply.daterangepicker', function(ev, picker) {
        cbStartDate(picker.startDate);
    });

    // Event end date
    var startDate = moment();

    function cbEndDate(start) {
        $('#end_date_datepicker .date_value').html(start.format('MMM D, YYYY'));
    }

    $('#end_date_datepicker').daterangepicker({
        startDate: startDate,
        locale: {format: 'YYYY-MM-DD'},
        singleDatePicker: true

    }, cbEndDate);

    cbEndDate(startDate);

    $('#end_date_datepicker').on('apply.daterangepicker', function(ev, picker) {
        cbEndDate(picker.startDate);
    });

    // Event start time
    var startTimePicker = $("#startTimepicker").timepicker();

    // Event end time
    var endTimePicker = $("#endTimepicker").timepicker();

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2022-02-07',
        dayMaxEvents: true,
        headerToolbar: {
            right: 'today prev,next',
            left: 'dayGridMonth,timeGridWeek,timeGridDay,title'
        },
        events: [
            {
                title: 'All Day Event',
                start: '2022-02-01'
            },
            {
                title: 'Long Event',
                start: '2022-02-07',
                end: '2022-02-10'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2022-02-09T16:00:00'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2022-02-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2022-02-11',
                end: '2022-02-13'
            },
            {
                title: 'Meeting',
                start: '2022-02-12T10:30:00',
                end: '2022-02-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2022-02-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2022-02-12T14:30:00'
            },
            {
                title: 'Birthday Party',
                start: '2022-02-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2022-02-28'
            }
        ],
        eventClick: function(info) {
            var eventObj = info.event;

            if (eventObj.url) {
                window.open(eventObj.url);

                info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
            } else {
                $('#showEventModal').modal('show');
                $('#showEventModal').find('.modal-title').html(eventObj.title);
                $('#showEventModal').find('.start-date').html(moment(eventObj.start).format('MMMM Do YYYY, h:mm:ss a'));
                var end = moment(eventObj.end || eventObj.start).format('MMMM Do YYYY, h:mm:ss a');
                if (eventObj.allDay) {
                    end = moment(eventObj.start).endOf('day').format('MMMM Do YYYY, h:mm:ss a');
                }
                $('#showEventModal').find('.end-date').html(end);
            }
        },
        dateClick: function(info) {
            var modal = $('#addNewEvent');
            modal.modal('show');
            if (info.allDay) {
                $('#all_day_event').attr('checked', true).trigger('change');
            } else {
                $('#all_day_event').attr('checked', false).trigger('change');
                $("#startTimepicker").timepicker('setTime', moment(info.date).format('LT'));
                $("#endTimepicker").timepicker('setTime', moment(info.date).format('LT'));
            }

            $('#start_date_datepicker').data('daterangepicker').setStartDate(moment(info.date));
            $('#start_date_datepicker').data('daterangepicker').setEndDate(moment(info.date).endOf('day'));
            $('#start_date_datepicker').data('daterangepicker').clickApply();

            $('#end_date_datepicker').data('daterangepicker').setStartDate(moment(info.date));
            $('#end_date_datepicker').data('daterangepicker').setEndDate(moment(info.date).endOf('day'));
            $('#end_date_datepicker').data('daterangepicker').clickApply();
        }
    });

    calendar.render();

    $('#all_day_event').on('change', function() {
        $('.event-time').toggleClass('d-none', this.checked);
    });
});
