import { useState } from 'react';
import './App.css'; 

// a) Un componente funcional simple.

function Encabezado() {
  return (
    <header style={{ borderBottom: '2px solid #646cff', paddingBottom: '10px' }}>
      <h1>MINI APP</h1>
      <p>panel de tareas e intregrante</p>
    </header>
  );
}

// b) Un componente que reciba y muestre props.

function TarjetaMiembro({ nombre, rol }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #444', borderRadius: '8px', margin: '8px 0' }}>
      <strong>{nombre}</strong>: <span style={{ color: '#888' }}>{rol}</span>
    </div>
  );
}

// c) Un componente que use estado (useState).

function ContadorTareas() {
  const [tareasCompletadas, setTareasCompletadas] = useState(0);

  return (
    <div style={{ padding: '15px', background: '#1a1a1a', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Progreso del desarrollo</h3>
      <p>Módulos terminados: <strong>{tareasCompletadas}</strong></p>
      
      {/* Al hacer clic, actualizamos el estado sumando 1 */}
      <button onClick={() => setTareasCompletadas(tareasCompletadas + 1)}>
        Completar módulo
      </button>
    </div>
  );
}

// d) Una lista renderizada dinámicamente a partir de un arreglo.

function ListaTecnologias() {
  const herramientas = ['React', 'Java', 'C#', 'Python', 'Docker'];

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Stack Tecnológico:</h3>
      <ul>
        {herramientas.map((tech, index) => (
          // El atributo "key" es obligatorio en React cuando renderizas listas
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

//MINI APP
// Aquí ensamblamos todas las piezas (componentes) para formar la mini app.
export default function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
      {}
      <Encabezado />

      <div style={{ marginTop: '20px' }}>
        <h3>Integrante</h3>
        {}
        <TarjetaMiembro nombre="Eduardo" rol="Frontend" />
  
      </div>

      {}
      <ListaTecnologias />
      
      {}
      <ContadorTareas />
    </div>
  );
}