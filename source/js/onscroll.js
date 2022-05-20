const navItems = [aboutNavItem, instructionNavItem, technologyNavItem, faqNavItem, contactsNavItem];
const headerWrapper = document.querySelector('.page-header__wrapper');
const headerElement = document.querySelector('.page-header');
const pageMainElement = document.querySelector('.page-main');
const pageFooterElement = document.querySelector('.page-footer');


window.onscroll = () => {
  if (window.scrollY >= headerWrapper.offsetHeight) {
    headerWrapper.classList.add('page-header__wrapper--scrolled');
    console.log('header');
  } else {
    headerWrapper.classList.remove('page-header__wrapper--scrolled');
  }

  if (window.pageYOffset < 768) {
    for (const item of navItems) {
      if (item.classList.contains('nav-item--active')) {
        item.classList.remove('nav-item--active');
      }
    }
  }

  if (window.pageYOffset > 767) {
    for (const item of navItems) {
      if (item.classList.contains('nav-item--active')) {
        item.classList.remove('nav-item--active');
      }
    }
    aboutNavItem.classList.add('nav-item--active');
  }

  if (window.pageYOffset > 1534) {
    for (const item of navItems) {
      if (item.classList.contains('nav-item--active')) {
        item.classList.remove('nav-item--active');
      }
    }
    instructionNavItem.classList.add('nav-item--active');
  }

  if (window.pageYOffset > 2301) {
    for (const item of navItems) {
      if (item.classList.contains('nav-item--active')) {
        item.classList.remove('nav-item--active');
      }
    }
    technologyNavItem.classList.add('nav-item--active');
  }

  if (window.pageYOffset > 3068) {
    for (const item of navItems) {
      if (item.classList.contains('nav-item--active')) {
        item.classList.remove('nav-item--active');
      }
    }
    faqNavItem.classList.add('nav-item--active');
  }

  if (window.pageYOffset > 3500) {
    for (const item of navItems) {
      if (item.classList.contains('nav-item--active')) {
        item.classList.remove('nav-item--active');
      }
    }
    contactsNavItem.classList.add('nav-item--active');
  }
}

const aboutScroll = () => {
  if (headerElement.classList.contains('page-header--opened-nav')) {
    headerElement.classList.remove('page-header--opened-nav');
    pageMainElement.classList.remove('page-main--opened-nav');
    pageFooterElement.classList.remove('page-footer--opened-nav');
    nav.classList.remove('nav--opened');
    navToggle.classList.remove('page-header__nav-toggle--close');
    window.scrollTo(0, 568);
  } else {
    window.scrollTo(0, 768);
  }
}

const instructionScroll = () => {
  // window.scrollTo(0, 1536);
  if (headerElement.classList.contains('page-header--opened-nav')) {
    headerElement.classList.remove('page-header--opened-nav');
    pageMainElement.classList.remove('page-main--opened-nav');
    pageFooterElement.classList.remove('page-footer--opened-nav');
    nav.classList.remove('nav--opened');
    navToggle.classList.remove('page-header__nav-toggle--close');
    window.scrollTo(0, 1530);
  } else {
    window.scrollTo(0, 1536);
  }
}

const technologyScroll = () => {
  // window.scrollTo(0, 2304);
  if (headerElement.classList.contains('page-header--opened-nav')) {
    headerElement.classList.remove('page-header--opened-nav');
    pageMainElement.classList.remove('page-main--opened-nav');
    pageFooterElement.classList.remove('page-footer--opened-nav');
    nav.classList.remove('nav--opened');
    navToggle.classList.remove('page-header__nav-toggle--close');
    window.scrollTo(0, 2070);
  } else {
    window.scrollTo(0, 2304);
  }
}

const faqScroll = () => {
  // window.scrollTo(0, 3072);
  if (headerElement.classList.contains('page-header--opened-nav')) {
    headerElement.classList.remove('page-header--opened-nav');
    pageMainElement.classList.remove('page-main--opened-nav');
    pageFooterElement.classList.remove('page-footer--opened-nav');
    nav.classList.remove('nav--opened');
    navToggle.classList.remove('page-header__nav-toggle--close');
    window.scrollTo(0, 2800);
  } else {
    window.scrollTo(0, 3072);
  }
}

const contactsScroll = () => {
  // window.scrollTo(0, 3840);
  if (headerElement.classList.contains('page-header--opened-nav')) {
    headerElement.classList.remove('page-header--opened-nav');
    pageMainElement.classList.remove('page-main--opened-nav');
    pageFooterElement.classList.remove('page-footer--opened-nav');
    nav.classList.remove('nav--opened');
    navToggle.classList.remove('page-header__nav-toggle--close');
    window.scrollTo(0, 3700);
  } else {
    window.scrollTo(0, 3840);
  }
}
