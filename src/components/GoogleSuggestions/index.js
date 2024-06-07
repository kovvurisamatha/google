import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

const initialsuggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {searchinput: '', suggestionList: initialsuggestionsList}

  onchangesearchinput = event => {
    this.setState({searchinput: event.target.value})
  }
  deletesuggestion = id => {
    const filteredlist = suggestionsList.filter(eachsuggestion => 
      eachsuggestion.id !== id
    )
    this.setState({suggestionList: filteredlist})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchinput} = this.state
    const searchedlist = suggestionsList.filter(eachsuggestion =>
      eachsuggestion.suggestion
        .toLowerCae()
        .includes(searchinput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
        />
        <div className="searchcontainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            type="search"
            value={searchinput}
            placeholder="search google"
            onChange={this.onchangesearchinput}
          />
        </div>
        <ul>
          {searchedlist.map(eachsuggestion => (
            <SuggestionItem
              key={eachsuggestion.id}
              suggestiondetails={eachsuggestion}
              deletesuggestion={this.deletesuggestion}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
