window.dataLayer = window.dataLayer || [];

function addToCart(id) {
  const items = [{
    item_id: id,
    item_name: id.replace('-', ' '),
    price: 15.99,
    quantity: 1
  }];
  localStorage.setItem('carrito', JSON.stringify(items));
  dataLayer.push({ event: 'add_to_cart', ecommerce: { items } });
}

function renderCart() {
  const items = JSON.parse(localStorage.getItem('carrito') || '[]');
  const container = document.getElementById('cart-items');
  if (container) {
    container.innerHTML = items.map(i => `<li>${i.item_name} - ${i.price}€</li>`).join('');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const card = document.getElementById('card').value;
      if (name && address && card) {
        localStorage.setItem('compraValida', 'true');
        window.location.href = 'gracias.html';
      } else {
        alert('Completa todos los campos antes de continuar.');
      }
    });
  }
});
