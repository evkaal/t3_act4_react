##Preguntas

**a) ¿Qué diferencia hay entre props y state en React?**
* los props Son las "propiedades" que un componente recibe desde su padre. Son inmutables (el componente hijo no debe modificarlas) y sirven para pasar información hacia abajo en el árbol de componentes.
* EL State Es el "estado" interno de un componente. Es mutable y gestionado por el mismo componente mediante `useState`. Cuando el estado cambia, React vuelve a renderizar automáticamente el componente para reflejar el cambio en pantalla.

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
* Las keys son identificadores únicos (como un ID) que le permiten a React saber exactamente qué elemento de la lista cambió, fue añadido o eliminado. Esto ayuda a React a optimizar el renderizado y evitar errores de actualización en el DOM real.

**c) Explica con tus propias palabras qué hace la función `useState`:**
* `useState` Nos devuelve un arreglo con dos elementos: el valor actual del estado y una función para actualizarlo. Cuando usamos esa función, le indicamos a React: *"actualiza este dato y vuelve a dibujar este componente"*.
