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

function switchBorough(id, element) {
    // hide all sections
    document.querySelectorAll('.borough-section').forEach(sec => {
        sec.classList.remove('active-section');
    });

    // show selected section
    document.getElementById(id).classList.add('active-section');

    // reset tab styles
    document.querySelectorAll('.borough-tab').forEach(btn => {
        btn.classList.remove('active');
    });

    // highlight clicked tab
    element.classList.add('active');
}
