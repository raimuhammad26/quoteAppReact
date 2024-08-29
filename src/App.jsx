function App() {
  return (
    <>
      <div className="container">
        <div id="quote-box">
          <div id="text">Quote Text</div>
          <div id="author">Quote Author</div>
          <button id="new-quote">Generate New Quote</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
        </div>
      </div>
    </>
  )
}

export default App