import './App.css'
import Mensaje from './Mensaje.js'

const Concat = (props) => {
  return (
    <div className='Concat'>
      <p>El resultado de la concatenación es: </p>
      {props.a + props.b}
    </div>
  )
}

const App = () => {
  const mensaje = 'Hola Mundo'

  return (
    <div className='App'>
      <h1>{mensaje}</h1>
      <Mensaje
        color='orange'
        message='Estamos trabajando en un curso de React bootstrap'
      />
      <Concat a='2' b='3' />
    </div>
  )
}

export default App
