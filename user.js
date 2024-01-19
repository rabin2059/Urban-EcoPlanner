document.getElementById('abc').addEventListener('click', function() {
    var userContainer = document.getElementById('userContainer');
    userContainer.style.display = (userContainer.style.display === 'none' || userContainer.style.display === '') ? 'flex' : 'none';
  });
  