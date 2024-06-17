const Tweet = ({ username, formalName, date, message }) => {
  return (
    <div>
      <ul>
        <li className="username">Username: {username} </li>
        <li className="formalName">Formal Name: {formalName} </li>
        <li className="date">Date: {date} </li>
        <li className="message">Message: {message} </li>
      </ul>
    </div>
  );
};
