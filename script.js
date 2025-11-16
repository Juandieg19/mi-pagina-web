const formatCOP = (value) =>
    new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
    }).format(value);

document.addEventListener("DOMContentLoaded", () => {
    const cart = { count: 0, total: 0 };
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    const updateCart = () => {
        if (cartCount) {
            cartCount.textContent = cart.count.toString();
        }
        if (cartTotal) {
            cartTotal.textContent = formatCOP(cart.total);
        }
    };

    document.querySelectorAll(".add-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const price = Number(button.getAttribute("data-price")) || 0;
            cart.count += 1;
            cart.total += price;
            updateCart();

            const originalText = button.textContent;
            button.textContent = "Agregado";
            button.disabled = true;
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1200);
        });
    });

    document.querySelectorAll("[data-scroll]").forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
            const targetSelector = trigger.getAttribute("data-scroll");
            const target = document.querySelector(targetSelector ?? "");
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    const form = document.querySelector(".contact__form");
    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        form.reset();
        alert("Gracias por escribirnos. Este demo no almacena informacion real.");
    });

    updateCart();
});
