import React from 'react'
import './App.scss'
import GreetingComponent from './greeting/Greeting.component'
import Clock from './clock/Clock.component'
import Header from './header/Header.component'

function App() {
  const [namesArray, setNamesArray] = React.useState(['Иван', 'Александр', 'Пётр', 'Афанасий', 'Игорь', 'Степан', 'Василий'])
  const [isNameChanged, setIsNameChanged] = React.useState(false)

  const randomName = () => {
    return namesArray[Math.floor(Math.random() * (namesArray.length))]
  }

  const [name, setName] = React.useState(randomName())

  const changingName = () => {
    setName(randomName())
    setIsNameChanged(true)
  }

  React.useEffect(() => {
    setInterval(() => changingName(), 10000)
  }, [])

  return (
    <>
      <div className='parent'>
        <Header />
        <GreetingComponent name={name} change={isNameChanged} />
        <Clock />
      </div>
    </>
  )
}

export default App
