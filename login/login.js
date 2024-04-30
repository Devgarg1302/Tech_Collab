function validateRollNumber() {
    var rollnoInput = document.getElementById('rollno');
    var rollnoError = document.getElementById('rollnoError');

    rollnoError.textContent = '';
   
    if (!/^\d+$/.test(rollnoInput.value)) {
      rollnoError.textContent = 'Invalid ID. Please enter only numeric characters.';
    }
  }

  function login() {
      window.location.href = '/TTC/index2.html';
  }


  document.body.addEventListener("keypress", (e)=>{
    if(e.key=='Enter') login();
  });