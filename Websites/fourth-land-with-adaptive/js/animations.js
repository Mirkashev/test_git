function fadeByLetters(tagname) {
  const tag = document.querySelector(`${tagname}`);
  tag.removeAttribute('data-scroll');
  tag.removeAttribute('data-scroll-call');
  const text = tag.innerText;
  const promiseArr = [];
  tag.innerHTML = '';
  // console.log(tag.style.letterSpacing)
  for (let i = 0; i < text.split('').length; i++) {
    if (tagname === '._webvsign' && text.split('')[i-1] === '_' && window.innerWidth < 1276) {
      const br = document.createElement('br');
      tag.append(br);
    }
    let span = document.createElement('span');
    // span.setAttribute('data-aos', 'fade-up');
    span.classList.add('fade-by-letters');
    // span.setAttribute('data-aos', 'fade-up');
    // span.style.display = 'inline-block';
    // span.style.transform = 'translateY(150%)';
    // span.style.transition = 'transform 0.5s ease';
    span.innerHTML = text.split('')[i];
    tag.append(span);
  }

  for (let i = 0; i < tag.children.length; i++) {
    let element = tag.children[i];
    if (element.tagName !== 'WBR') {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          // element.setAttribute('data-aos', 'fade-up');
          // element.classList.remove('fade-by-letters');
          element.setAttribute('data-aos', 'fade-up');
          element.classList.add('aos-animate');
          // element.style.transform = 'translate(0%,0%)';
          // element.style.transition = 'transform 0.5s ease';
          resolve();
        }, i*150);
      });
    }
  }
}

function animate() {
  const cube = document.querySelector('.content_aboutMe_item_thumb');
  const photo = document.querySelector('.content_aboutMe_item_photo');

  if (!cube.classList.contains('cube')) return 0;

  photo.classList.add('opacity');

  cube.classList.add('scale-up-ver-top');
  setTimeout(() => {
    cube.classList.add('scale-up-ver-bottom');
    photo.classList.remove('opacity');
    cube.classList.remove('cube');
  },800);
}

function pulsar() {
  const circles = document.querySelector('.circles').children;

  for (let i = 0; i < circles.length; i++) {
    setTimeout(() => {
          circles[i].classList.add('pulsar');
        }, i*0);
  }
}

function goArrow() {
  const arrowDiv = document.querySelector('.arrow_wrapper').children;

  arrowDiv[0].classList.add('arrowAnim');
  setTimeout(() => arrowDiv[1].classList.add('arrowAnim'), 1500)
}
