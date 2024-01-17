import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alerta from "./Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState(false);
  const [validaEmail, setValidaEmail] = useState(true);
  const [mensajeDeAdvertencia, setMensajeDeAdvertencia] = useState("");
  const [estilo, setEstilo] = useState("");

  const validarDatos = () => {
    if (nombre === "" || email === "" || password1 === "") {
      setError(true);
      setMensajeDeAdvertencia("Todos los campos son obligatorios");
      setEstilo("warning")
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const compruebaEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setValidaEmail(isValid);

    if (!isValid) {
      setError(true);
      setMensajeDeAdvertencia("Introduce un mail válido");
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const validaPassword = () => {
    if (password1 === password2) {
      setError(false);
      return true;
    } else {
      setError(true);
      setMensajeDeAdvertencia("Las contraseñas no son iguales");
      setEstilo("danger")
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosValidos = validarDatos();
    const emailValido = compruebaEmail();
    const contrasenasValidas = validaPassword();

    if (datosValidos && emailValido && contrasenasValidas) {
      setEstilo("success")
      setMensajeDeAdvertencia("Registro realizado con éxito")
    } 
  };

  return (
    <>
      <Form className="formulario" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onSubmit={compruebaEmail}
        >
          <Form.Control
            type="email"
            placeholder="tuemail@ejemplo.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Control
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicConfirmPassword"
        >
          <Form.Control
            type="password"
            placeholder="Confirma tu contraseña"
            name="confirmPassword"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
      <Alerta color={error ? {estilo} : null} text={mensajeDeAdvertencia} />
    </>
  );
};

export default Formulario;
