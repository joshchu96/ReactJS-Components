const Person = ({ name, age, hobbies }) => {
  let reply = age >= 18 ? <h3>please go vote!</h3> : <h3>you must be 18</h3>;
  let nameRes = name;

  if (name.length > 8) {
    let nameArr = name.split("");
    nameRes = nameArr.slice(0, 6).join("");
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <p>{nameRes}</p>
      <p>{age}</p>
      <p>{reply}</p>
      <p>
        <b>List of Hobbies</b>
      </p>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
