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

var $EnableTwoFactorModal = $('#enableTwoFactorModal'),
$AuthenticatorTwoStepModal = $('#authenticatorTwoStepAuthModal'),
$SmsTwoStepModal = $('#smsTwoStepAuthModal');
$('#enableTwoFactorBtn').on('click', function() {
    $EnableTwoFactorModal.modal('hide');
    var method = $('[name="method"]:checked').val();
    if (method === 'app') {
        $AuthenticatorTwoStepModal.modal('show');
    } else {
        $SmsTwoStepModal.modal('show');
    }
});

$('#verifySmsStep').on('click', function() {
    $SmsTwoStepModal.modal('hide');
});

$('#cancelSmsStep').on('click', function() {
    $SmsTwoStepModal.modal('hide');
    $EnableTwoFactorModal.modal('show');
});

$('#verifyAuthStep').on('click', function() {
    $AuthenticatorTwoStepModal.modal('hide');
});
$('#cancelAuthStep').on('click', function() {
    $AuthenticatorTwoStepModal.modal('hide');
    $EnableTwoFactorModal.modal('show');
});

$('#saveChanges').on('click', function() {
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
    }, 3000);
});
