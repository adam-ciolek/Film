const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const retypePassword = document.querySelector('#retype-password');
const btn =document.querySelector('.form-btn');

// show error
const showError = (input, palaceholder) => {
  const formBox = input.parentElement;
  const errorPlaceholder = formBox.querySelector('.sign__text')
  errorPlaceholder.textContent = palaceholder
  errorPlaceholder.style.color = 'rgb(240, 23, 23)'
  input.classList.add('error');
}

// clear error
 const clearError = input => {
  const formBox = input.parentElement;
  const errorPlaceholder = formBox.querySelector('.sign__text')
  errorPlaceholder.textContent = '';
  input.classList.remove('error');

 }

// check length input.value
 const checkLength = (input, min) => {
  if(input.value.length < min) {
    showError(input, `${input.previousElementSibling.innerText} składa się z min. ${min} znaków.`)
  }
 };

// chcek e-mail 
 const checkMail = el => {

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(email.value)) {
    clearError(el)
  }else {
    showError(el, 'E-mail jest niepoprawny')
  }

 };

// check password 
 const checkPassword = (password, retypePassword) => {
  if(password.value !== retypePassword.value){
    showError(retypePassword, 'Hasła do siebie nie pasują')
  }
 }

 const checkErrors = () => {
  const allInputs = document.querySelectorAll('.sign__input');
  let countErrors = 0

  allInputs.forEach( el => {
    if(el.classList.contains('error')){
      countErrors++
    }
  });

  if(countErrors === 0) {
    alert('Formularz został wysłany')
  }

 };

const form = input => {
  input.forEach( el => {
    if(el.value === ''){
      showError(el, el.placeholder);
    }else {
      clearError(el)
    }
  });

};

btn.addEventListener('click', e => {
  e.preventDefault();

  form([username,email,password,retypePassword]);
  checkLength(username, 3);
  checkLength(password, 8);
  checkPassword(password,retypePassword);
  checkMail(email);
  checkErrors();
});