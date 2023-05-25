import React, { useState } from "react";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDNI] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre && apellido && dni && email) {
      // Realizar aquí la lógica de envío de datos
      alert("Datos enviados");
      setNombre("");
      setApellido("");
      setDNI("");
      setEmail("");
    } else {
      alert("Por favor, completa todos los campos");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Formulario</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Nombre:
          <input
            type="text"
            className="input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            minLength={3}
            maxLength={100}
            required
          />
        </label>
        <br />
        <label className="label">
          Apellido:
          <input
            type="text"
            className="input"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            minLength={3}
            maxLength={100}
            required
          />
        </label>
        <br />
        <label className="label">
          DNI:
          <input
            type="number"
            className="input"
            value={dni}
            onChange={(e) => setDNI(e.target.value)}
            min={0}
            max={99999999}
            required
          />
        </label>
        <br />
        <label className="label">
          Email:
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            minLength={3}
            maxLength={100}
            required
          />
        </label>
        <br />
        <button type="submit" className="button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default App;
