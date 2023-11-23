const conuntrs = document.querySelectorAll(".counter");
conuntrs.forEach((counter) => {
  counter.textContent = "0";

  function upDateCounter() {
    const target = counter.getAttribute("data-target");
    const c = +counter.textContent;
    const increment = target / 200;
    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`;
      setTimeout(upDateCounter, 1);
    } else {
      counter.textContent = target;
    }
  }
  upDateCounter();
});
