import React, { Component } from 'react'
import './App.css'

// J'importe le fichier sampleText qui gèrera le contenu par défaut du textarea
import { sampleText } from './sampleText'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <textarea rows='35' className='form-control' value={ sampleText } />
          </div>
          <div className='col-sm-6'>
            <h1>Résultat</h1>
            <div>{ sampleText }</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
