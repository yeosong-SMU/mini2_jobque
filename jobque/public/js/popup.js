// public/js/popup.js

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${value}; path=/; expires=${expires.toUTCString()}`;
}

function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name}=([^;]*)`
  ));
  return matches ? decodeURIComponent(matches[1]) : null;
}

function closePopup() {
  if (document.getElementById('noShow').checked) {
    setCookie('hidePopup', 'true', 7); // 7일간 안 보기
  }
  window.close(); // 팝업창 닫기
}
