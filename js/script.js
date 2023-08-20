var ready = (callback) => {
  if (document.readyState != 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
};

var imgSun = 'img/sun.svg#sun';
var imgMoon = 'img/moon.svg#moon';

ready(() => {
  imgMode = document.getElementById('imgMode');
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    imgMode.children[0].href.baseVal = imgMoon;
    imgMode.dataset.mode = 'dark';
  }

  imgMode.onclick = () => {
    ele = document.getElementById('imgMode');
    if(ele.dataset.mode === 'dark') {
      ele.children[0].href.baseVal = imgSun;
      ele.dataset.mode = 'light';
      document.body.classList.remove('dark');
    } else {
      ele.children[0].href.baseVal = imgMoon;
      ele.dataset.mode = 'dark';
      document.body.classList.add('dark');
    }
  }
})
