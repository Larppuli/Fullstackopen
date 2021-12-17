import React, { useState } from 'react'

const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

const NoStatistics = (props) => {
  if (props.pisteet.length === 0) {
    return (
      <div>
        Ei vielä palautetta
      </div>
    )
  }
    else {
      return (
        <div></div>
      )
    }
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.määrä}
      {props.merkki}
    </div>
  )
}

const Table = (props) => {
  if (props.pisteet.length !== 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td>Hyvä</td>
            <td><StatisticLine määrä={props.määrä1}></StatisticLine></td>
          </tr>
          <tr>
            <td>Neutraali</td>
            <td><StatisticLine määrä={props.määrä2}></StatisticLine></td>
          </tr>
          <tr>
            <td>Huono</td>
            <td><StatisticLine määrä={props.määrä3}></StatisticLine></td>
          </tr>
          <tr>
            <td>Kaikki</td>
            <td><StatisticLine määrä={props.määrä4}></StatisticLine></td>
          </tr>
          <tr>
            <td>Keskiarvo</td>
            <td><StatisticLine määrä={props.määrä5}></StatisticLine></td>
          </tr>
          <tr>
            <td>Positiiviset</td>
            <td><StatisticLine määrä={props.määrä6} merkki=' %'></StatisticLine></td>
          </tr>
      </tbody>
    </table>
    )
  }
  else {
    return (
      <div>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.otsikko}
      </h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [Hyvämäärä, setHyvä] = useState(0)
  const [Neutraalimäärä, setNeutraali] = useState(0)
  const [Huonomäärä, setHuono] = useState(0)
  const [Pisteet, setPisteet] = useState([])
  const [Kaikki, setKaikki] = useState([])
  const otsikko = 'Unicafe palauteboxi'
  const otsikko2 = 'Vastaukset'

  const handleHyvä = () => {
    setKaikki(Kaikki.concat('Hyvä'))
    setHyvä(Hyvämäärä + 1)
    setPisteet(Pisteet.concat(1))
  }
  console.log(Kaikki)
  const handleNeutraali = () => {
    setKaikki(Kaikki.concat('Neutraali'))
    setNeutraali(Neutraalimäärä + 1)
    setPisteet(Pisteet.concat(0))
  }

  const handleHuono = () => {
    setKaikki(Kaikki.concat('Huono'))
    setHuono(Huonomäärä + 1)
    setPisteet(Pisteet.concat(-1))
  }

  return (
    <div>
      <div>
        <Header otsikko = {otsikko}></Header>
        <Button handleClick={handleHyvä} text='hyvä' />
        <Button handleClick={handleNeutraali} text='neutraali' />
        <Button handleClick={handleHuono} text='huono' />
        <Header otsikko = {otsikko2}></Header>
        <NoStatistics pisteet = {Pisteet}></NoStatistics>
        <Table
          määrä1={Hyvämäärä} määrä2={Neutraalimäärä} määrä3={Huonomäärä}
          määrä4={Kaikki.length} määrä5={average(Pisteet).toFixed(2)} 
          määrä6 = {(Hyvämäärä/Kaikki.length*100).toFixed(2)} pisteet = {Pisteet}>
        </Table >
      </div>
    </div>
  )
}

export default App