const App = () => {
  return (
    <div>
      <Tweet
        username="monkeyman"
        formalName="Donkey Kong"
        date={new Date().toDateString()}
        message="I love bananas!"
      />
      <Tweet
        username="Dogman"
        formalName="Snoopy"
        date={new Date().toDateString()}
        message="I love Apples!"
      />
      <Tweet
        username="Aquaman"
        formalName="Arthur Curry"
        date={new Date().toDateString()}
        message="Why am I here!"
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
