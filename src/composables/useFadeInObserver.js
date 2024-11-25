//Funcion para cargar imagenes a medida que estan sobre los elementos
export function useFadeInObserver() {
  const observeElement = (element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target); // Deja de observar una vez que la imagen es visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (element) observer.observe(element);
  };

  return { observeElement };
}
