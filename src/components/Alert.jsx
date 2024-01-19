import Alert from 'react-bootstrap/Alert';

const Alerta = ({color, text}) => {

console.log(color)
console.log(text)

    return (
  <Alert key={color} variant={color}>
          {text}
        </Alert>
    );
}
  export default Alerta;

  