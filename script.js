let faqs = document.querySelectorAll(".faq")
faqs.forEach(
    (item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active")
        })
    }
)