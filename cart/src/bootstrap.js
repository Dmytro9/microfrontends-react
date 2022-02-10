import faker from "faker";

const mount = (el) => {
  let cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  // to run app in asolation assuming that container doesn't have an element with id 'dev-products'
  if (el) {
    mount(el);
  }
}

export { mount };
