 const toggleBtn = document.getElementById('toggleSidebar');
 const navbartoggleBtn = document.getElementById('toggleNavbar');
 const sidebar = document.querySelector('.sidebar');
 const sidebarHeader = document.querySelector('.sidebar-header');
 const sidebarToggle = document.querySelector('.sidebar-toggle');
 const navbarToggle = document.querySelector('.navbar-toggle-btn');
 const mainContent = document.querySelector('.main-content');
 const navbar = document.querySelector('.navbar');
 const dropdownIcon = document.getElementById('dropdownIcon');
 const dropdownContent = document.getElementById('dropdownContent');

 toggleBtn.addEventListener('click', () => {
     sidebar.classList.toggle('collapsed');
     sidebarHeader.classList.toggle('collapsed');
     sidebarToggle.classList.toggle('collapsed');
     navbarToggle.classList.toggle('collapsed');
     navbarToggle.classList.toggle('expanded');
     mainContent.classList.toggle('expanded');
     navbar.classList.toggle('expanded');
 });

 navbartoggleBtn.addEventListener('click', () => {
     sidebar.classList.toggle('collapsed');
     sidebarHeader.classList.toggle('collapsed');
     sidebarToggle.classList.toggle('collapsed');
     navbarToggle.classList.toggle('collapsed');
     navbarToggle.classList.toggle('expanded');
     mainContent.classList.toggle('expanded');
     navbar.classList.toggle('expanded');
 });

 // Add a click event to toggle the dropdown
 document.querySelector('.dropbtn').addEventListener('click', function () {
     document.querySelector('.dropdown-content').classList.toggle('show');
 });

 // Close the dropdown if the user clicks outside of it
 window.onclick = function (event) {
     if (!event.target.matches('.dropbtn')) {
         var dropdowns = document.getElementsByClassName("dropdown-content");
         for (var i = 0; i < dropdowns.length; i++) {
             var openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) {
                 openDropdown.classList.remove('show');
             }
         }
     }
 };

 document.addEventListener('DOMContentLoaded', () => {
    // Click dropdown
    const clickDropdowns = document.querySelectorAll('.click-dropdown .dropbtn');
    clickDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const dropdownContent = dropdown.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Animated dropdown
    const animatedDropdowns = document.querySelectorAll('.animated-dropdown .dropbtn');
    animatedDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const dropdownContent = dropdown.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    };
});