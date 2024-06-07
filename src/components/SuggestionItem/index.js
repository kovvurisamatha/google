import './index.css'

const SuggestionItem = props => {
  const {suggestiondetails, deletesuggestion} = props
  const {id, suggestion} = suggestiondetails
  const ondeletesuggestion = () => {
    deletesuggestion(id)
  }
  return (
    <li className="googlecontainer">
      <p>{suggestion}</p>

      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={ondeletesuggestion}
        />
      </button>
    </li>
  )
}
export default SuggestionItem
