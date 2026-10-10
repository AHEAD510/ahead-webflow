(() => {
  document.documentElement.classList.add('has-hero-intro');

  const heroLogo = document.querySelector('.logomain');
  if (heroLogo) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => heroLogo.classList.add('is-logo-visible'));
    });

    let parallaxFrame = 0;
    const updateLogoParallax = () => {
      parallaxFrame = 0;
      const isMobile = window.matchMedia('(max-width: 479px)').matches;
      const distance = Math.min(window.scrollY * (isMobile ? 0.1 : 0.16), isMobile ? 44 : 78);
      heroLogo.style.setProperty('--logo-parallax-y', `${distance}px`);
    };

    window.addEventListener('scroll', () => {
      if (parallaxFrame) return;
      parallaxFrame = requestAnimationFrame(updateLogoParallax);
    }, { passive: true });
    window.addEventListener('resize', updateLogoParallax);
    updateLogoParallax();
  }

  const serviceCards = [...document.querySelectorAll('.card-trigger--service')];
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    serviceCards.forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
        card.style.setProperty('--tilt-y', `${(x - 0.5) * 5}deg`);
        card.style.setProperty('--image-x', `${(x - 0.5) * -8}px`);
        card.style.setProperty('--image-y', `${(y - 0.5) * -8}px`);
        card.style.setProperty('--pointer-x', `${x * 100}%`);
        card.style.setProperty('--pointer-y', `${y * 100}%`);
      });

      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
        card.style.setProperty('--image-x', '0px');
        card.style.setProperty('--image-y', '0px');
      });
    });
  }

  const overlay = document.querySelector('.modal-overlay7');
  const drawer = overlay?.querySelector('.modal-s01');
  const closeButton = overlay?.querySelector('.modal-close');
  const triggers = [...document.querySelectorAll('.card-trigger--service')];
  const panels = [...document.querySelectorAll('.modal-content-wrap > [class*="modal-content-is-"]')];

  if (!overlay || !drawer || !closeButton || !triggers.length || !panels.length) return;

  let activeTrigger = null;

  const activatePanel = (index) => {
    panels.forEach((panel, panelIndex) => {
      const isActive = panelIndex === index;
      panel.classList.toggle('is-active', isActive);
      panel.setAttribute('aria-hidden', String(!isActive));
    });

    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('has-open-drawer');
    activeTrigger = triggers[index];
    closeButton.focus({ preventScroll: true });
  };

  const closeDrawer = () => {
    if (!overlay.classList.contains('is-open')) return;

    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-open-drawer');
    activeTrigger?.focus({ preventScroll: true });
  };

  triggers.forEach((trigger, index) => {
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-haspopup', 'dialog');

    const open = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      activatePanel(index);
    };

    trigger.addEventListener('click', open, true);
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') open(event);
    }, true);
  });

  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    closeDrawer();
  }, true);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeDrawer();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDrawer();
  });

  panels.forEach((panel) => panel.setAttribute('aria-hidden', 'true'));
})();
