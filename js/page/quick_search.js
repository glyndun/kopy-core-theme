$(document).ready(function() {
    var docs = [
        {
            title: 'Account overview',
            tags: ['Page'],
            url: '/src/pages/account/overview.html'
        },
        {
            title: 'Account followers',
            tags: ['Page'],
            url: '/src/pages/account/followers.html'
        },
        {
            title: 'Activity feed',
            tags: ['Page'],
            url: '/src/pages/account/activity.html'
        },
        {
            title: 'Account logs',
            tags: ['Page'],
            url: '/src/pages/account/logs.html'
        },
        {
            title: 'Feeds',
            tags: ['Page'],
            url: '/src/pages/feeds.html'
        },
        {
            title: 'User list',
            tags: ['App'],
            url: '/src/pages/user/overview.html'
        },
        {
            title: 'Roles',
            tags: ['App'],
            url: '/src/pages/user/roles.html'
        },
        {
            title: 'Subscriptions',
            tags: ['App'],
            url: '/src/pages/subscription/listing.html'
        },
        {
            title: 'Subscription details',
            tags: ['App'],
            url: '/src/pages/subscription/details.html'
        },
        {
            title: 'Projects',
            tags: ['App'],
            url: '/src/pages/projects/list.html'
        }
    ],
    $result = $('#quick-search-result'),
    $noResult = $('#quick-search-no-result'),
    $recent = $('#recent-searchs');

    $('#quick-search-form').on('submit', function(e) {
        e.preventDefault();
        var $this = $(this);

        var searchString = $this.find('#docsearch-input').val();
        if (!searchString) {
            $recent.removeClass('d-none');
            $noResult.addClass('d-none');
            $result.addClass('d-none');
            return;
        }

        searchStringLower = searchString.toLowerCase();

        $this.addClass('searching');

        var items = docs.filter(item => {
            var i = item.title.toLowerCase().search(searchStringLower);
            if (i !== -1) {
                return item;
            }
        });

        setTimeout(function() {
            $recent.addClass('d-none');
            $this.removeClass('searching');
            $result.find('#quick-search-result-list').html('');
            if (items.length) {
                $result.removeClass('d-none');
                for (let index = 0; index < items.length; index++) {
                    const item = items[index];
                    var html = '<a href="'+item.url+'" class="list-group-item list-group-item-action py-3 px-4">';
                    html += '<div class="d-flex justify-content-between align-items-center">';
                    html += '<div class="d-flex flex-column align-items-start">';
                    html += '<h6 class="mb-2">'+item.title+'</h6>';
                    html += '<div class="d-flex gx-2">';
                    for (let index = 0; index < item.tags.length; index++) {
                        const tag = item.tags[index];
                        html += '<span class="badge bg-light-primary py-1 px-2">'+tag+'</span>';
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" ="currentColor">';
                    html += '<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />';
                    html += '</svg>';
                    html += '</div>'
                    html += '</a>';
                    $result.find('#quick-search-result-list').append(html);
                }
            } else {
                $noResult.removeClass('d-none');
                $result.addClass('d-none');
                $noResult.find('.quick-search-no-result-label').html(searchString);
            }
        }, 3000);
    });
});
