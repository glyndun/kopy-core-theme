tinymce.init({
    selector: '#message',
    menubar:false,
    statusbar: false,
    plugins: 'image code',
    toolbar: 'styleselect bold italic underline image code',
    branding: false
});

$('select').select2({
    placeholder: 'Select option',
    allowClear: true
});
