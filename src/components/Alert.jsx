import Alert from 'react-bootstrap/Alert';

const Alerta = ({color, text}) => {


    return (
  <Alert key={color} variant={color}>
          {text}
        </Alert>
    );
}
  export default Alerta;