/**
 * Anti-F12, Anti-Inspect Element & Anti-Copy
 * Khóa F12, chuột phải, bôi đen, sao chép (copy) và các phím tắt Developer Tools
 */
(function () {
  'use strict';

  // 1. Chặn click chuột phải (Context Menu)
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  // 2. Chặn sao chép (Copy), Cắt (Cut), Bôi đen (Select) và Kéo thả (Drag)
  document.addEventListener('copy', function (e) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || (e.target.closest && e.target.closest('input, textarea, .settings-modal, .mini-music-bar')))) return true;
    e.preventDefault();
    return false;
  });

  document.addEventListener('cut', function (e) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || (e.target.closest && e.target.closest('input, textarea, .settings-modal, .mini-music-bar')))) return true;
    e.preventDefault();
    return false;
  });

  document.addEventListener('selectstart', function (e) {
    if (window.isDraggingSlider) return true;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || (e.target.closest && e.target.closest('input, textarea, .settings-modal, .mini-music-bar')))) return true;
    e.preventDefault();
    return false;
  });

  document.addEventListener('dragstart', function (e) {
    if (window.isDraggingSlider) return true;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || (e.target.closest && e.target.closest('input, textarea, .settings-modal, .mini-music-bar')))) return true;
    e.preventDefault();
    return false;
  });

  // 3. Chặn các tổ hợp phím tắt DevTools, Copy & xem mã nguồn
  document.addEventListener('keydown', function (e) {
    // Chặn F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Chặn Ctrl + Shift + I (Inspect), Ctrl + Shift + J (Console), Ctrl + Shift + C (Select Element)
    if (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Chặn Ctrl + U (Xem mã nguồn trang)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Chặn Ctrl + S (Lưu trang), Ctrl + P (In trang)
    if (e.ctrlKey && ['s', 'S', 'p', 'P'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Chặn Ctrl + A (Chọn tất cả), Ctrl + C (Sao chép), Ctrl + X (Cắt)
    if (e.ctrlKey && ['a', 'A', 'c', 'C', 'x', 'X'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  // 4. Tự động xóa Console định kỳ
  setInterval(function () {
    console.clear();
  }, 1000);
})();
