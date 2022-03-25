$('#country-edit').select2({
    dropdownParent: $('#editAddressModal')
});

$(document).delegate('.btn-edit-address', 'click', function() {
    $('#editAddressModal').modal('show');
});

$('#profile-image').on('change', function() {
    if (this.value) {
        var files = this.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /image.*/;
            if (!file.type.match(imageType)) {
                continue;
            }
            var img=document.getElementById("profile-preview");
            img.file = file;
            var reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    aImg.src = e.target.result;
                };
            })(img);
            reader.readAsDataURL(file);
        }
    } else {
        $('#profile-preview').attr('src', '/src/img/profile.jpg');
    }
});

$('#btnRemoveProfile').on('click', function() {
    $('#profile-image').val('').trigger('change');
});

$('#btn-save-customer-info').on('click', function() {
    var $btn = $(this);
    $btn.addClass('disabled btn-progress');
    setTimeout(function() {
        $btn.removeClass('disabled btn-progress');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Changes had been saved',
            showConfirmButton: false,
            timer: 1500
        });
    },3000);
});

$('.btn-remove-address').on('click', function() {
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
                'Payment removed',
                'success'
            )
        }
    });
});

$('#credit-card-number').on('input', function () {

  $(this).val(function (index, value) {

    // Store cursor position

    let cursor = $(this).get(0).selectionStart;

    // Filter characters and shorten CC (expanded for later use)

    const filterSpace = value.replace(/\s+/g, '');
    const filtered = filterSpace.replace(/[^0-9]/g, '');

    const cardNum = filtered.substr(0, 16);

    // Handle alternate segment length for American Express

    const partitions = cardNum.startsWith('34') || cardNum.startsWith('37') ? [4,6,5] : [4,4,4,4];

    // Loop through the validated partition, pushing each segment into cardNumUpdated

    const cardNumUpdated = [];
    let position = 0;

    partitions.forEach(expandCard => {

      const segment = cardNum.substr(position, expandCard);
      if (segment) cardNumUpdated.push(segment);
      position += expandCard;

    });

    // Combine segment array with spaces

    const cardNumFormatted = cardNumUpdated.join(' ');

    // Handle cursor position if user edits the number later

    if (cursor < cardNumFormatted.length - 1) {

      // Determine if the new value entered was valid, and set cursor progression

        cursor = filterSpace !== filtered ? cursor - 1 : cursor;

      setTimeout(() => {

        $(this).get(0).setSelectionRange(cursor, cursor, 'none');

      });

    }

    return cardNumFormatted;

  })

});
