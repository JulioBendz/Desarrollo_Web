// Espera a que se cargue el contenido HTML antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos con la clase "accordion"
    const accordions = document.querySelectorAll(".accordion");

    // Obtiene la casilla de verificación con el id "multiselect"
    const multiSelectCheckbox = document.getElementById("multiselect");

    // Selecciona todos los elementos con la clase "description"
    const descriptionElements = document.querySelectorAll(".description");

    // Expande el primer elemento por defecto
    // Agrega la clase "expanded" al primer acordeón para expandirlo por defecto
    accordions[0].classList.add("expanded");

    // Oculta todas las descripciones de acordeones excepto la primera
    // Esto asegura que solo la descripción del primer acordeón esté visible inicialmente
    descriptionElements[1].style.display = "none";
    descriptionElements[2].style.display = "none";
    descriptionElements[3].style.display = "none";
    descriptionElements[4].style.display = "none";
    descriptionElements[5].style.display = "none";

    function toggleAccordion(accordion) {
        if (!multiSelectCheckbox.checked) {
            // Si no se permite la selección múltiple, colapsa otros elementos
            accordions.forEach((acc) => {
                if (acc !== accordion) {
                    // Quita la clase "expanded" para colapsar el elemento
                    acc.classList.remove("expanded");
                    // Muestra el ícono de expansión
                    acc.querySelector(".expand-icon").style.display = "block";
                    // Oculta el ícono de colapso
                    acc.querySelector(".collapse-icon").style.display = "none";
                    // Oculta todas las descripciones de acordeones
                    descriptionElements[0].style.display = "none";
                    descriptionElements[1].style.display = "none";
                    descriptionElements[2].style.display = "none";
                    descriptionElements[3].style.display = "none";
                    descriptionElements[4].style.display = "none";
                    descriptionElements[5].style.display = "none";
                }
            });
        }

        if (accordion.classList.contains("expanded")) {
            // Colapsa el elemento si ya está expandido
            accordion.classList.remove("expanded");
            // Muestra el ícono de expansión
            accordion.querySelector(".expand-icon").style.display = "block";
            // Oculta el ícono de colapso
            accordion.querySelector(".collapse-icon").style.display = "none";
        } else {
            // Expande el elemento si está colapsado
            accordion.classList.add("expanded");
            // Oculta el ícono de expansión
            accordion.querySelector(".expand-icon").style.display = "none";
            // Muestra el ícono de colapso
            accordion.querySelector(".collapse-icon").style.display = "block";
        }
    }

    // Agrega un evento de clic a cada título de acordeón
    accordions.forEach((accordion) => {
        const titleSection = accordion.querySelector(".title-section");
        const description = accordion.querySelector(".description");
        titleSection.addEventListener("click", () => {
            // Activa la función para alternar el estado del acordeón
            toggleAccordion(accordion);

            // Oculta o muestra el texto según el estado del acordeón
            if (accordion.classList.contains("expanded")) {
                // Muestra el texto
                description.style.display = "block";
            } else {
                // Oculta el texto
                description.style.display = "none";
            }
        });
    });
});