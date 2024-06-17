const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Josh" />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
