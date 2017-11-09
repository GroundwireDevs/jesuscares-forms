var form = document.getElementById('commitmentForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents form from being submitted
  document.getElementById('commitmentFormSubmit').disabled = true;

  // Send form data as JSON
  var data = {};
  for (var i = 0, ii = form.length; i < ii; ++i) {
    var input = form[i];
    if (input.name) {
      data[input.name] = input.value;
    }
  }

  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.send(JSON.stringify(data));

  xhr.onloadend = function() {
    // Done
    console.log('Form submit success');
  };
});
