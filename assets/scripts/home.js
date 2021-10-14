const targets = document.querySelector('main section div#logo-wrapper').children;

// Intersection Observers
const lazyLoad = (targets, type) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log(entry);

      if (entry.isIntersecting) {
        switch (type) {
          case 'image':
            const img = entry.target;
            const src = img.dataset.lazy;
    
            img.setAttribute('src', src);
            img.classList.add('visible');
            break;
          case 'text':
            const span = entry.target;

            span.classList.add('visible');
        }
        

        observer.disconnect();
      }
    })
  })

  io.observe(targets);
}

lazyLoad(targets.item(0), 'image');
lazyLoad(targets.item(1), 'text');