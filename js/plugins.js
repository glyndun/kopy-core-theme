if (window.$) {
    if ($.fn.select2 !== undefined) {
        $('.select2').select2();
    }

    if ($.fn.dataTable !== undefined) {
        var previous_svg = '<svg xmlns="http://www.w3.org/2000/svg" class="prev_page_svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>';

        var next_svg = '<svg xmlns="http://www.w3.org/2000/svg" class="next_page_svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>';

        $.extend( true, $.fn.dataTable.defaults, {
            "stateSave": false,
            "autoWidth": false,
            "processing": true,
            "deferLoading": 57,
            "bInfo" : false,
            "language": {
                "paginate": {
                    "previous": previous_svg,
                    "next": next_svg
                },
                // "sLengthMenu": "_MENU_",
                "processing": "",
                "lengthMenu": "Items per page: _MENU_",
                "search": ""
            },
            "pageLength": 25,
            "lengthChange": false
        } );
    }

    $.map($('[data-toggle="tooltip"]'), function(elem, count) {
        var tooltip = new bootstrap.Tooltip(elem);
    });

    function genRand(min, max, decimalPlaces) {
        var rand = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);  // could be min or max or anything in between
        var power = Math.pow(10, decimalPlaces);
        return Math.floor(rand*power) / power;
    }

    function formError(form, errorObj) {
        var formClass = "form-with-error", controlClass = "form-control-with-error", messageClass = "form-error-message";
        if (form && form.length && $.isPlainObject(errorObj)) {
            $.map(errorObj, function(message, name) {
                form.hasClass(formClass) || form.addClass(formClass);
                var control = form.find('[name="'+name+'"]');
                control.hasClass(controlClass) || control.addClass(controlClass);
                control.after(function() {
                    return '<span class="'+messageClass+'">' + message + '</span>';
                });
            });
        }
    }

    if (window.Chart) {
        Chart.defaults.font.family = "'Rubik', 'Helvetica', 'Arial', sans-serif";
    }

    function activateCollapse(collapse) {
        var toggler = $('#navbar-menu').find('a[data-bs-target="#'+ collapse[0].id +'"]');
        if (toggler.hasClass('collapsed')) {
            toggler.removeClass('collapsed');
            toggler.addClass('active');
            toggler.attr('aria-expanded', true);
        }
        if (!collapse.hasClass('show')) {
            collapse.addClass('show');
        }

        var main = collapse.parents('.accordion-collapse');
        if (main.length) {
            activateCollapse(main);
        }
    }

    var link = $('#navbar-menu').find('[href="'+window.location.pathname+'"]');
    if (link.length) {
        if (!link.hasClass('active')) {
            link.addClass('active');
        }

        var collapse = link.parents('.accordion-collapse');
        if (collapse.length) {
            activateCollapse(collapse);
        }
    }
}
