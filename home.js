

function changeaboutmetexta() {
    const aboutmetext = ["Tech Enthusiast", "Data Scientist", "Web Developer"];
    const typingSpeed = 200;   // Typing speed in milliseconds
    const erasingSpeed = 100;   // Erasing speed in milliseconds
    const pauseTime = 1500;    // Pause between words in milliseconds
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutmetext[textIndex];

        // Clear the content of aboutMeElement each time the typing starts over
        aboutMeElement.textContent = currentText.substring(0, charIndex);

        if (!isDeleting && charIndex < currentText.length) {
            // Typing: Add one character at a time
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            // Deleting: Remove one character at a time
            charIndex--;
            setTimeout(type, erasingSpeed);
        } else {
            // Switch between typing and deleting modes
            isDeleting = !isDeleting;

            if (!isDeleting) {
                // Move to the next word in the array
                textIndex = (textIndex + 1) % aboutmetext.length;
                setTimeout(type, pauseTime);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
}




document.addEventListener('DOMContentLoaded' , function() {
    const darkmodetoggle = document.getElementById('dark-mode-toggle');
    const body =document.body;

    darkmodetoggle.addEventListener('click' ,   () =>{
        body.classList.toggle('dark-mode');
        const currentmode = body.classList.contains('dark-mode') ? 'Dark' : 'light';
        darkmodetoggle.querySelector('i').classList.toggle('fa-sun');
        darkmodetoggle.querySelector('i').classList.toggle('fa-moon');
        darkmodetoggle.querySelector('i').classList.toggle('light-mode');
        
    });
});

changeaboutmetexta();


document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.getAttribute('data-progress'); // Get the data-progress value
                progressBar.style.width = `${progress}%`; // Set the width dynamically
                progressBar.classList.add('animated');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    });

    const skills = document.querySelectorAll('#prog-lang .skill');
    skills.forEach(skill => observer.observe(skill));
});
