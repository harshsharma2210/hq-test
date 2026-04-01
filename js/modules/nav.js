/* AgentQA — nav module
   Handles mobile navigation toggle. */

/**
 * Initialise the mobile navigation toggle.
 * Toggles the `.open` class on the nav-links list and keeps the
 * aria-expanded attribute in sync.  Closes the menu when any link
 * inside it is clicked.
 */
export function initNav() {
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
