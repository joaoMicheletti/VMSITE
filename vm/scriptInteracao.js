document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.conteudo');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove 'active' class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add 'active' class to the clicked tab and its content
            tab.classList.add('active');
            document.querySelector(tab.dataset.target).classList.add('active');
        });
    });
});
