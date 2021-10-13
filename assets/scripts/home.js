// constantas
const REM = 16;

// html
const body = document.body;
const header = body.querySelector('header');
const sections = body.querySelectorAll('main.home-sections-wrapper section');
const scrollTopButton = body.querySelector('button[title=\'scroll-top-button\']');
const limitBeforeScrollTopButtonAppear = sections[0].getBoundingClientRect().height;

if (scrollTopButton != null) {
  scrollTopButton.onclick = function () {
    header.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }
}

// scroll listener
function scrollListener() {
  if (window.scrollY >= limitBeforeScrollTopButtonAppear) {
    return scrollTopButton.classList.replace('button-invisible', 'button-visible');
  }

  return scrollTopButton.classList.replace('button-visible', 'button-invisible');
}

window.addEventListener('scroll', scrollListener);