import { useState } from 'react';
import './App.css';

// a) Componente funcional simple (Encabezado)
function Encabezado() {
  return (
    <header className="app-header">
      <div className="badge-react">React 19 + Vite</div>
      <h1>Panel de Desarrollo</h1>
      <p>Gestión de proyectos y control de módulos académicos</p>
    </header>
  );
}

// b) Componente que recibe y muestra props (Tarjeta de Miembro)
function TarjetaMiembro({ nombre, rol, email }) {
  return (
    <div className="member-card">
      <div className="avatar-placeholder">{nombre.charAt(0)}</div>
      <div className="member-info">
        <h3>{nombre}</h3>
        <p className="member-role">{rol}</p>
        <span className="member-email">{email}</span>
      </div>
    </div>
  );
}

// c) Componente que usa estado (useState) para un contador interactivo
function ContadorProgreso() {
  const [modulosListos, setModulosListos] = useState(3);

  return (
    <div className="counter-box">
      <div className="counter-info">
        <h3>Progreso del Ciclo</h3>
        <p>Módulos completados con éxito</p>
      </div>
      <div className="counter-action">
        <span className="counter-display">{modulosListos}</span>
        <div className="counter-buttons">
          <button 
            className="btn-control" 
            onClick={() => setModulosListos(Math.max(0, modulosListos - 1))}
          >
            -
          </button>
          <button 
            className="btn-control primary" 
            onClick={() => setModulosListos(modulosListos + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

// d) Componente con lista renderizada dinámicamente usando .map()
function ListaStack() {
  const tecnologias = [
    { id: 1, name: 'React (Frontend UI)', level: 'Avanzado' },
    { id: 2, name: 'JavaScript ES6+', level: 'Intermedio' },
    { id: 3, name: 'Vite (Build Tool)', level: 'Configurado' },
    { id: 4, name: 'GitHub Pages (Deploy)', level: 'Publicado' }
  ];

  return (
    <div className="tech-section">
      <h3>Stack Tecnológico Implementado</h3>
      <ul className="tech-list">
        {tecnologias.map((tech) => (
          // El uso de key única es obligatorio para optimizar el Virtual DOM
          <li key={tech.id} className="tech-item">
            <span className="tech-bullet"></span>
            <span className="tech-name">{tech.name}</span>
            <span className="tech-badge">{tech.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente Principal que ensambla toda la Mini App
export default function App() {
  return (
    <main className="app-container">
      <div className="glass-panel">
        <Encabezado />
        
        <section className="section-block">
          <h2>Información del Estudiante</h2>
          <TarjetaMiembro 
            nombre="Eduardo Jimenez Mendoza" 
            rol="Ingeniero en sistemas/ Frontend" 
            email="evkaal@github.com" 
          />
        </section>

        <ListaStack />
        <ContadorProgreso />
      </div>
    </main>
  );
}