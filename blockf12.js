(function () {
  'use strict';

  // 1. Chặn chuột phải & các phím tắt
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('keydown', e => {
    if (
      e.key === 'F12' || e.keyCode === 123 ||
      (e.ctrlKey && e.shiftKey && ['I','i','J','j','C','c'].includes(e.key)) ||
      (e.ctrlKey && ['u','U','s','S'].includes(e.key))
    ) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  // 2. Thông báo trong Console
  console.log(
    "%c F12 CÁI CON CẶC! %c", 
    'font-family: sans-serif; font-size: 22px; color: #ff2a7a; font-weight: bold;', 
    "font-size: 12px; color: #888;"
  );

  // 3. Treo tab DevTools bằng vòng lặp Debugger (có ngắt nhịp để máy không bị lag)
  function freezeDevTools() {
    (function () {
      (function a() {
        try {
          (function b(i) {
            if (('' + (i / i)).length !== 1 || i % 20 === 0) {
              (function () {}).constructor('debugger')();
            } else {
              debugger;
            }
            b(++i);
          })(0);
        } catch (e) {
          setTimeout(a, 1000);
        }
      })();
    })();
  }

  freezeDevTools();
})();