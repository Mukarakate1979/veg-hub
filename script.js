let order = [];

function addToOrder(name, price) {
  order.push({ name, price });
  alert(name + " added to order");
  localStorage.setItem("order", JSON.stringify(order));
}

function sendOrder(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const items = JSON.parse(localStorage.getItem("order")) || [];

  let message = `Veg Hub Order\nName: ${name}\nPhone: ${phone}\n\nItems:\n`;
  let total = 0;

  items.forEach(i => {
    message += `- ${i.name}: $${i.price}\n`;
    total += i.price;
  });

  message += `\nTotal: $${total}`;

  window.open(`https://wa.me/263714893191?text=${encodeURIComponent(message)}`);
}
