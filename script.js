document.getElementById("toggle-sidebar").addEventListener('click', function () {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
})