
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        // Set the correct initial height
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            if (isActive) {
                // Close the accordion
                content.style.maxHeight = content.scrollHeight + 'px';

                requestAnimationFrame(() => {
                    item.classList.remove('active');
                    content.style.maxHeight = '0px';
                });
            } else {
                // Open the accordion to its full content height
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Recalculate open accordion heights if the window is resized
    window.addEventListener('resize', () => {
        accordionItems.forEach(item => {
            if (item.classList.contains('active')) {
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
