// Sidebar Toggle Logic
document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

$(document).on("click", ".nav-link", function (e) {
    e.preventDefault();
    const filePath = $(this).data("file");
    
    if (filePath) {
        $("#content").load(filePath, function (response, status, xhr) {
            if (status == "error") {
                $("#content").html("<h2>Error loading content</h2>");
            }
        });
    }
});
