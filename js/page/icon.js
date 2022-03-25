function addIcon(e, svg) {
    var html = '<div class="d-flex align-items-center justify-content-center">';
    html += '<div class="d-flex flex-column justify-content-center align-items-center">';
    html += '<button type="button" class="btn btn-link border d-flex flex-column align-items-center justify-content-center text-dark text-opacity-75 h-24r w-40r copyToClipboard svg-icon">';
    html += svg.icon;
    html += '</button>';
    html += '<span class="mt-2 line-clamp-1">'+svg.name+'</span>';
    html += '</div></div>';
    e.append(html);
}

$('#iconSearchInput').on('change input', function(e) {
    var search = this.value;
    var filteredIcons = this.value ? icons.filter(function(item) {
        var name = item.name.toLowerCase();
        return name.includes(search);
    }) : icons;
    var list = $('#iconList');
    list.html('');
    if (filteredIcons.length) {
        for (let index = 0; index < filteredIcons.length; index++) {
            const element = filteredIcons[index];
            addIcon(list, element);
        }
    } else {
        var html = '<div class="d-flex flex-column justify-content-center align-items-center h-52r fs-9 font-bold" style="width: 100%; flex: 0 0 auto;">';
        html += 'Sorry! There are no icons for “'+search+'”.';
        html += '</div>'
        list.append(html);
    }
});

$('#iconSearchInput').trigger('change');

$(document).on('click', '.copyToClipboard', function() {
    var svg = this.innerHTML;
    $(this).append('<span class="text-primary label">copied</span>');
    setTimeout(function() {
        $('.copyToClipboard').find('span.label').remove();
    }, 2000);
    navigator.clipboard.writeText(svg);
});
