function showTab(index) {
  var pageToHide = document.querySelector('div.page:not(.hidden)');
  var tabToUnfocus = document.querySelector('button.tab.active');

  pageToHide.classList.add('hidden');
  tabToUnfocus.classList.remove('active');

  document
    .querySelector('button.tab:nth-child(' + index + ')')
    .classList.add('active');
  document
    .querySelector('div.page:nth-child(' + index + ')')
    .classList.remove('hidden');
}
