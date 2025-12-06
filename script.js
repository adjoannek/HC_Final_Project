console.log("Hello, World!");
<!-- JS for Switching Tabs -->
<script>
    const buttons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;

            
            buttons.forEach(btn => btn.classList.remove('active'));
            // remove active from content
            sections.forEach(sec => sec.classList.remove('active'));

            // activate new ones
            button.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });
</script>
