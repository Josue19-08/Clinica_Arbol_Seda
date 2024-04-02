document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById('medicosTable');
    var tbody = table.getElementsByTagName('tbody')[0];
    var rowsPerPage = 5; // Número de filas por página
    var currentPage = 1;

    function showPage(page) {
        var startIndex = (page - 1) * rowsPerPage;
        var endIndex = startIndex + rowsPerPage;
        var rows = tbody.rows;

        for (var i = 0; i < rows.length; i++) {
            rows[i].style.display = (i >= startIndex && i < endIndex) ? '' : 'none';
        }
    }

    function updatePagination() {
        var totalPages = Math.ceil(tbody.rows.length / rowsPerPage);
        var pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        for (var i = 1; i <= totalPages; i++) {
            var link = document.createElement('a');
            link.href = '#';
            link.textContent = i;

            if (i === currentPage) {
                link.className = 'active';
            }

            link.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = parseInt(this.textContent);
                showPage(currentPage);
                updatePagination();
            });

            pagination.appendChild(link);
        }
    }

    showPage(currentPage);
    updatePagination();
});
