# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-pkureq24?file=index.html)

# Solution Code

## Project 01 : Color Theme Switcher

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});

```
## Project 02 : BMI Calculator

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    // Show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```