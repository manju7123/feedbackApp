import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    feedback: false,
  }

  onFeedback = () => {
    this.setState({feedback: true})
  }

  render() {
    const {feedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {feedback ? (
          <div className="love-card">
            <img className="love-emoji" src={loveEmojiUrl} alt="Love emoji" />
            <h1 className="love-heading"> Thank You! </h1>
            <p className="love-paragraph">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="emoji-card">
            <h1 className="emoji-heading">
              How satisfied are you with our customer support performance?{' '}
            </h1>
            <ul className="inner-card">
              <li className="emoji-item">
                <button
                  type="button"
                  onClick={this.onFeedback}
                  className="emoji-button"
                >
                  <img
                    className="emoji"
                    src={emojis[0].imageUrl}
                    alt={emojis[0].name}
                  />
                </button>
                <p className="emoji-title">{emojis[0].name}</p>
              </li>
              <li className="emoji-item">
                <button
                  onClick={this.onFeedback}
                  type="button"
                  className="emoji-button"
                >
                  <img
                    className="emoji"
                    src={emojis[1].imageUrl}
                    alt={emojis[1].name}
                  />
                </button>
                <p className="emoji-title">{emojis[1].name}</p>
              </li>
              <li className="emoji-item">
                <button
                  onClick={this.onFeedback}
                  type="button"
                  className="emoji-button"
                >
                  <img
                    className="emoji"
                    src={emojis[2].imageUrl}
                    alt={emojis[2].name}
                  />
                </button>
                <p className="emoji-title">{emojis[2].name}</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
