const markAllEl = document.querySelector('.mark-read');
const notificationDivs = document.querySelectorAll('div.notification');
const quantityOfNotifications = document.querySelector('.number-notifications');
// let quantityNumber = document.querySelector('.number-notifications').textContent;

markAllEl.addEventListener('click', e => {
  for (let i = 0; i < notificationDivs.length; i++) {
    if (notificationDivs[i].classList.contains('unread')) {
      notificationDivs[i].classList.add('read');
      quantityOfNotifications.classList.add('d-none');
      // quantityOfNotifications.textContent = '0';
    }
  }
});
