console.log("Sceret message for cool people");

    const buttons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;

            
            buttons.forEach(btn => btn.classList.remove('active'));
            
            sections.forEach(sec => sec.classList.remove('active'));

            
            button.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});
