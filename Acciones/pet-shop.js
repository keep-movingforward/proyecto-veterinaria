const cartItems = {}; // objeto que contiene los productos agregados al carrito

// obtener los elementos del DOM
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.querySelector('#cart-total');
const checkoutBtn = document.querySelector('.btn-checkout');

// agregar escuchador de eventos a los botones "Agregar al carrito"
const addToCartBtns = document.querySelectorAll('.btn-add-to-cart');

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.parentElement;
    const title = product.querySelector('.product-title').textContent;
    const price = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));

    // verificar si el producto ya existe en el carrito
    if (title in cartItems) {
      cartItems[title].quantity++;
    } else {
      cartItems[title] = { price, quantity: 1 };
    }

     // actualizar la tabla de elementos del carrito
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    th1.textContent = 'Artículo';
    th2.textContent = 'Cantidad';
    th3.textContent = '$ x Ud';
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    for (const [title, item] of Object.entries(cartItems)) {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      td1.textContent = title;
      td2.innerHTML = `
        <div>
          <button class="btn-decrease-quantity">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="btn-increase-quantity">+</button>
          <button class="btn-remove-item">x</button>
        </div>
      `;
      td3.textContent = `$${item.price.toFixed(2)}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tbody.appendChild(tr);
      totalPrice += item.price * item.quantity;
    }
    table.appendChild(tbody);
    cartItemsList.appendChild(table);

    // mostrar el precio total a pagar
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    const notification = document.querySelector('.notification');
    notification.textContent = 'Agregado al carrito';
    notification.classList.add('show');
    
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2000);
  });
 

});

// agregar escuchadores de eventos a los botones "Eliminar" de cada producto en el carrito
document.addEventListener('click', event => {
  if (event.target.classList.contains('btn-remove-item')) {
    const productTitle = event.target.parentElement.parentElement.parentElement.querySelector('td:first-child').textContent;
    delete cartItems[productTitle];
    event.target.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
  }
});

// agregar escuchadores de eventos a los botones "+" y "-" de cada producto en el carrito

document.addEventListener('click', event => {
  if (event.target.classList.contains('btn-increase-quantity')) {
    const productTitle = event.target.closest('tr').querySelector('td:first-child').textContent;
    cartItems[productTitle].quantity++;
    event.target.parentElement.querySelector('span').textContent = cartItems[productTitle].quantity;
    updateCartTotal();
  } else if (event.target.classList.contains('btn-decrease-quantity')) {
    const productTitle = event.target.closest('tr').querySelector('td:first-child').textContent;
    if (cartItems[productTitle].quantity > 1) {
      cartItems[productTitle].quantity--;
      event.target.parentElement.querySelector('span').textContent = cartItems[productTitle].quantity;
    } else {
      delete cartItems[productTitle];
      event.target.parentElement.parentElement.parentElement.remove();
    }
    updateCartTotal();
  }
});


// función para actualizar el precio total a pagar en el carrito
function updateCartTotal() {
  let totalPrice = 0;
  for (const [title, item] of Object.entries(cartItems)) {
    totalPrice += item.price * item.quantity;
  }
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}



// agregar escuchador de eventos al botón "Proceder al pago"

const modalContainer = document.querySelector('#modal-container');
const modal = document.querySelector('#modal');
const modalTotal = document.querySelector('#modal-total');
const paymentForm = document.querySelector('#payment-form');

checkoutBtn.addEventListener('click', () => {
  modalTotal.textContent = cartTotal.textContent;
  modalContainer.style.display = 'block';
});

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // aquí puedes agregar la lógica para procesar el pago
  modalContainer.style.display = 'none';
  alert('Pago procesado correctamente');
});

const modalCloseBtn = document.querySelector('#modal-close-btn');
modalCloseBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
