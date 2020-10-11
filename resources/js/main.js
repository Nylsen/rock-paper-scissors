const selectBadge = id => {
  let selectedBadge = document.getElementById(id);
  let pickBackground = document.getElementById('pick-bg');
  if (selectedBadge.classList.contains('selected')) {
    selectedBadge.classList.remove('selected');
    pickBackground.classList.remove('hidden');
  } else {
    pickBackground.classList.add('hidden');
    let badges = document.getElementsByClassName('badge');
    [].forEach.call(badges, badge => {
      badge.classList.remove('selected');
    });
    selectedBadge.classList.add('selected');
  }
};
