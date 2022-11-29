// Set default app colors
const colors = [
    '#fafa6e',
    '#c4ec74',
    '#92dc7e',
    '#64c987',
    '#39b48e',
    '#089f8f',
    '#00898a',
    '#08737f',
    '#215d6e',
    '#2a4858',
  ];
// const getQuoteData = () => {
//     fetch('quote.json',{
//         headers : { 
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//          }
//       }).then(function(response){
//         return response.json();
//       })
//       .then(function(myJson) {
//        let quotesRecords = myJson.quotes;
//        let quotesIndex = Math.floor(Math.random() * quotesRecords.length);
//         document.getElementById('text').innerText = quotesRecords[quotesIndex].quote;
//         document.getElementById('author').innerText = quotesRecords[quotesIndex].author;
//       });
// };
// getQuoteData();

// get quote record from json file
class QuoteRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorCode: "#333",
            quoteRecords:[],
            quote:"Life isn’t about getting and having, it’s about giving and being.",
            author:"Kevin Kruse"
        };
        this.handleClick = () => {
            var color = Math.floor(Math.random() * colors.length);
            this.setState({ colorCode: colors[color] });
            let quotesRecords = this.state.quoteRecords.quotes;
            let quotesIndex = Math.floor(Math.random() * quotesRecords.length);
            this.state.quote = quotesRecords[quotesIndex].quote;
            this.state.author = quotesRecords[quotesIndex].author;
            // console.log(this.state.quote);
            // console.log(this.state.author);
            document.querySelector('body').style.backgroundColor = colors[color];
        }
    }
    componentDidMount() { 
        fetch('quote.json') // from the application
        // fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json") // from the third party
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                quoteRecords: result,
              });
            })
      };
    render() {
        return (
            <div id="quote-box">
                <div className="quoteTextLayout">
                    <span id="text" style={{color: this.state.colorCode}}>{this.state.quote}</span>
                </div>
                <div className="quoteAuthorLayout" style={{color: this.state.colorCode}}>
                    - <span id="author">{this.state.author}</span>
                </div>
                <div className="quoteActionLayout">
                    <div className="quoteActionLink" style={{backgroundColor: this.state.colorCode}}>
                        <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22When%20everything%20seems%20to%20be%20going%20against%20you%2C%20remember%20that%20the%20airplane%20takes%20off%20against%20the%20wind%2C%20not%20with%20it.%22%20Henry%20Ford" id="tweet-quote" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="newQuoteActionLink">
                        <button type="button" id="new-quote" onClick={this.handleClick} style={{backgroundColor: this.state.colorCode}}>New Quote</button>
                    </div>
                </div>
            </div>
        );
    }
};
const root = ReactDOM.createRoot(document.getElementById('randomQuoteWrapper'));
root.render(<QuoteRecord />);