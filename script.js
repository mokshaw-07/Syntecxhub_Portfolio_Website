document.addEventListener('DOMContentLoaded', () => {
    // set year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // theme toggle (persists in localStorage)
    const themeToggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('dark');
    if (themeToggle) {
        themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
        });
    }

    // smooth scrolling for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // contact button ripple (if present)
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const circle = document.createElement('span');
            circle.className = 'ripple';
            circle.style.left = (e.clientX - rect.left) + 'px';
            circle.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(circle);
            setTimeout(() => circle.remove(), 700);
        });
    });
});
