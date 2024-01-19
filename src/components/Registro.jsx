import SocialButton from "./SocialButton.jsx";
import Formulario from "./Formulario.jsx";


const Registro = () => {

  return (
    <div className="container">
      <h1 className="titulo">Crea una cuenta</h1>
      <SocialButton icono="fa-brands fa-facebook"/>
      <SocialButton icono="fa-brands fa-github" />
      <SocialButton icono="fa-brands fa-linkedin-in" />
<p>O usa tu mail para registrarte</p>
      <Formulario/>
    </div>
  );
};

export default Registro;
