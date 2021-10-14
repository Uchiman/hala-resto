// html
const body = document.body;
const header = body.querySelector('header');
const sections = body.querySelectorAll('main section');
const scrollTopButton = body.querySelector('button[title=\'scroll-top-button\']');

// scroll to top function
if (scrollTopButton != null) {
  scrollTopButton.onclick = () => {
    header.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}

// appearing scroll top button using IntersectionObserver
const scrollTopAppear = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return scrollTopButton.classList.replace('button-invisible', 'button-visible');
      }

      return scrollTopButton.classList.replace('button-visible', 'button-invisible')
    })
  });

  io.observe(target);
}

scrollTopAppear(header);