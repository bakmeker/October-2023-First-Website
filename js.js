`use strict`;

const navLinks = document.getElementById(`navLinks`);
const exit = document.getElementById(`exit`);
const bar = document.getElementById(`bar`);

exit.addEventListener(`click`, function () {
  navLinks.style.right = `-200px`;
});

bar.addEventListener(`click`, function () {
  navLinks.style.right = `0px`;
});
