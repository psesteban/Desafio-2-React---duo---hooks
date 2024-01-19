import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alerta from "./Alert";

const Formulario = () => {


    const [user, setUser] = useState({
      nombre: "",
      email: "",
      password1: "",
      password2: "",
    });

  const [mensajeDeAdvertencia, setMensajeDeAdvertencia] = useState("");
  const [estilo, setEstilo] = useState("");

  const validarDatos = () => {
    if (user.nombre === "" || user.email === "" || user.password1 === "") {
      setMensajeDeAdvertencia("Todos los campos son obligatorios");
      setEstilo("warning");
      return false;
    } else {
      return true;
    }
  };

  const compruebaEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(user.email);

    if (!isValid) {
      setMensajeDeAdvertencia("Introduce un mail válido");
      return false;
    } else {
      return true;
    }
  };

  const validaPassword = () => {
    if (user.password1 === user.password2) {
      return true;
    } else {
      setMensajeDeAdvertencia("Las contraseñas no son iguales");
      setEstilo("danger");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosValidos = validarDatos();
    const emailValido = compruebaEmail();
    const passValidos = validaPassword();

    if (datosValidos && emailValido && passValidos) {
      setEstilo("success");
      setMensajeDeAdvertencia("Registro realizado con éxito");
    }
  };


const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value})

  return (
    <>
      <Form className="formulario" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={handleChange}
            value={user.nombre}
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
            onChange={handleChange}
            value={user.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            name="password1"
            onChange={handleChange}
            value={user.password1}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirma tu contraseña"
            name="password2"
            onChange={handleChange}
            value={user.password2}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
      <Alerta color={estilo} text={mensajeDeAdvertencia} />


    </>
  );
};

export default Formulario;
