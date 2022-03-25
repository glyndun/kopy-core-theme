var mediaDropzone = $("#media").dropzone({
    url: "/file/post",
    autoProcessQueue: false,
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
});

tinymce.init({
    selector: '#description',
    menubar:false,
    statusbar: false,
    plugins: 'image code',
    toolbar: 'styleselect bold italic underline image code',
    branding: false
});

// $('#physical_product').on('change', function() {
//     $('.dimension').toggleClass('d-none', !this.checked);
// });
