'use strict;'

function find_selected_ids() {
    var checkboxes = document.querySelectorAll('input.cidercms_multi_selector');
    var ids = [];
    [].forEach.call(checkboxes, function (checkbox) {
        if (checkbox.checked)
            ids.push(checkbox.getAttribute('data-id'));
    });
    return ids;
}

function cut(id) {
    var selected = find_selected_ids();
    if (selected.length)
        id = selected.join(',')
    document.cookie = 'id=' + id + '; path=/'
    return;
}

function paste(link, after) {
    var ids = document.cookie.match(/\bid=(\d+(,\d+)*)/)[1].split(',');

    var href = link.href;
    ids.forEach(function(id) {
        href += ';id=' + id;
    });
    if (after)
        href += ';after=' + after;
    location.href = href;
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    var edit_object_form = document.getElementById('edit_object_form');
    if (edit_object_form) {
        edit_object_form.onsubmit = function() {
            var password = edit_object_form.querySelector('label.password input');
            var repeat   = edit_object_form.querySelector('label.password_repeat input');
            if (password && repeat) {
                var repeat_error = repeat.parentNode.querySelector('.repeat_error');
                if (password.value == repeat.value) {
                    repeat_error.style.display = '';
                    return true;
                }
                else {
                    repeat_error.style.display = 'block';
                    alert(false);
                    return false;
                }
            }
        }
    }
}, false);
