import React, { Component } from 'react'
import './App.css'

// J'importe le fichier sampleText qui gèrera le contenu par défaut du textarea
import { sampleText } from './sampleText'

// J'importe markedJS pour générer l'éditeur de Mardown
import marked from 'marked'

class App extends Component {

  state = {
    text: sampleText
  }

  // Capture l'event sur le textearea
  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  // Paramétrage de Markdown
  renderText = text => {   
    const __html = marked(text, { sanitize: true })
    return { __html }
  }
  

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <textarea
             onChange={ this.handleChange }
             rows='35' className='form-control'
             value={ this.state.text } />
          </div>
          <div className='col-sm-6'>
            <div 
              dangerouslySetInnerHTML={ this.renderText(this.state.text)}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
