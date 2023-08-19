var ready = (callback) => {
  if (document.readyState != 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
};

var imgSun = 'img/sun.svg';
var imgMoon = 'img/moon.svg';

ready(() => {
  imgMode = document.getElementById('imgMode');
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    imgMode.src = imgMoon;
    imgMode.dataset.mode = 'dark';
  }

  imgMode.onclick = (e) => {
    ele = e.target;
    if(ele.dataset.mode === 'dark') {
      ele.src = imgSun;
      ele.dataset.mode = 'light';
      document.body.classList.remove('dark');
    } else {
      ele.src = imgMoon;
      ele.dataset.mode = 'dark';
      document.body.classList.add('dark');
    }
  }
})
