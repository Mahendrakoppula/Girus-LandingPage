
    const themeToggle = document.querySelector('.tt-theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        const lightAsh = '#F5F5F5';
        const lightBlack = '#282c34';

        // Check if the body background color is currently the default gradient
        if (body.style.backgroundImage === 'linear-gradient(135deg, #ADD8E6, #FFFFE0)') {
            // Change the background color to light ash and light black
            body.style.backgroundImage = 'none';
            body.style.backgroundColor = lightAsh;
            themeToggle.style.color = lightBlack;
        } else {
            // Change the background color back to the default gradient
            body.style.backgroundImage = 'linear-gradient(135deg, #ADD8E6, #FFFFE0)';
            themeToggle.style.color = '';
        }
    });

