import { Header } from './Header.js'
import { Content } from './Content.js'

export const Course = ({ name, parts }) => {
  return (
    <div className='Course'>
      <Header name={name} />
      <Content parts={parts} />
    </div>
  )
}
