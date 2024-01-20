document.getElementById('abc').addEventListener('click', function(event) {
  var userContainer = document.getElementById('userContainer');
  userContainer.style.display = (userContainer.style.display === 'none' || userContainer.style.display === '') ? 'flex' : 'none';
  event.stopPropagation();
});

document.addEventListener('click', function(event) {
  var userContainer = document.getElementById('userContainer');
  if (event.target !== userContainer && !userContainer.contains(event.target)) {
    userContainer.style.display = 'none';
  }
});
