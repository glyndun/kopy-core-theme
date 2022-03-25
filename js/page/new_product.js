tinymce.init({
    selector: '#description',
    menubar:false,
    statusbar: false,
    plugins: 'image code',
    toolbar: 'styleselect bold italic underline image code',
    branding: false
});

var variantCount = 1;

// The dropzone method is added to jQuery elements and can
// be invoked with an (optional) configuration object.
$("#media").dropzone({
    url: "/file/post",
    autoProcessQueue: false,
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
});

$('#physical_product').on('change', function() {
    $('.weight').toggleClass('d-none', !this.checked);
});

$(document).delegate('.remove-variant', 'click', function() {
    var el = $('#product_variants').find('li[data-id="'+this.dataset.id+'"]');
    el.length && el.remove();
});

$('#add_variant').click(function() {
    var id = variantCount + 1;

    var html = '<li data-id="'+id+'" class="mt-2"><div class="d-flex align-items-center">';
    html += '<div class="d-flex align-items-center flex-1 me-3">';
    html += '<select name="variant-option-1" id="variant-option-'+id+'" class="form-control select2">';
    html += '<option value="color">Color</option>';
    html += '<option value="size">Size</option>';
    html += '<option value="style">Style</option>';
    html += '<option value="material">Material</option></select>';
    html += '<input type="text" class="form-control ms-2" name="variant-value-'+id+'" /></div>';
    html += '<button type="button" class="btn btn-danger remove-variant" data-id="'+id+'">';
    html += '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">';
    html += '<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />';
    html += '</svg></button></div></li>';
    $('#product_variants').append(html);

    $('#variant-option-'+id).select2();
    variantCount++;
});
