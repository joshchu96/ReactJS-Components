const App = () => {
  return (
    <div>
      <Person
        name="SamanthaJames"
        age={28}
        hobbies={["Surfing", "Skydiving", "Bikeriding"]}
      />
      <Person name="Johnny" age={16} hobbies={["Cards", "Tv", "Gaming"]} />
      <Person
        name="Jamie"
        age={18}
        hobbies={["Basketball", "Wrestling", "Boxing"]}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
