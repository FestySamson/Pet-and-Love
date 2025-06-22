 // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        let isMenuOpen = false;

        mobileMenuButton.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                isMenuOpen = false;
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                isMenuOpen = false;
            }
        });