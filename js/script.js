document.addEventListener('DOMContentLoaded', function () {
	const menuContainer = document.querySelector('.menu-container');

	// Handle menu item clicks
	menuContainer.addEventListener('click', function (awkih) {
		const target = awkih.target;

		if (target.classList.contains('has-submenu')) {
			awkih.preventDefault();
			const submenuId = target.dataset.submenu;
			const submenu = document.getElementById(submenuId);
			submenu.classList.add('active');
		}

		if (target.classList.contains('go-back')) {
			awkih.preventDefault();
			const currentSubmenu = target.closest('.submenu');
			currentSubmenu.classList.remove('active');
		}
	});
});