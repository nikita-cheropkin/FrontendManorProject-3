        const mobileMenuBtn = document.getElementById("mobileMenu");
        const closeMenuBtn = document.getElementById("closeMenuBtn");
        const textLink = document.getElementById("textLink");
        const companyLink = document.getElementById("company-link");
        const sidebar = document.querySelector(".sidebar");
        const overlay = document.getElementById("overlay");
        const divlink = document.querySelector(".text-link");
        const divlink2 = document.querySelector(".company-links");

        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });

        closeMenuBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        textLink.addEventListener("click", () => {
            divlink.classList.toggle("open")
        });

        companyLink.addEventListener("click", () => {
            divlink2.classList.toggle("open2")
        });