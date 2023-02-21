import { Link, useNavigate } from "react-router-dom";

const NotFound = (props) => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div className={props.spacings + " d-flex justify-content-around"}>
      <h2>404 - Pagina non trovata</h2>
      <div>
        <p>
          La risorsa richiesta non esiste, <Link to="/">torna indietro</Link>.
        </p>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Torna indietro
        </button>
      </div>
    </div>
  );
};

export default NotFound;
