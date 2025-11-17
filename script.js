// Scroll navigation active link
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 80;
    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (
            section && 
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Smooth scroll for nav
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if(target){
                window.scrollTo({
                    top: target.offsetTop - 55,
                    behavior: "smooth"
                });
            }
        }
    });
});

// Animate skill bars on scroll into view
function animateSkills(){
    const skillSection = document.getElementById('skills');
    if(skillSection.getBoundingClientRect().top < window.innerHeight-60){
        document.querySelector('.bar.html').style.width = "90%";
        document.querySelector('.bar.css').style.width = "85%";
        document.querySelector('.bar.js').style.width = "70%";
        document.querySelector('.bar.php').style.width = "65%";
        document.querySelector('.bar.mysql').style.width = "55%";
        window.removeEventListener('scroll', animateSkills); // animate once
    }
}
window.addEventListener('scroll', animateSkills);

// Contact form validation (dummy send)
document.getElementById('contactForm').onsubmit = function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msgDiv = document.getElementById('formMsg');

    if(name === '' || email === '' || message === ''){
        msgDiv.style.color = "red";
        msgDiv.textContent = "Semua kolom wajib diisi!";
        return;
    }
    // Simple validation email
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        msgDiv.style.color = "red";
        msgDiv.textContent = "Email tidak valid!";
        return;
    }
    msgDiv.style.color = "green";
    msgDiv.textContent = "Pesan terkirim (simulasi)! Terima kasih.";
    setTimeout(()=>{msgDiv.textContent='';}, 4000);
    this.reset();
}