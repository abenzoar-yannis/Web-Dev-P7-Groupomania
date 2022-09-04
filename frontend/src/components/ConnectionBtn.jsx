import { Link } from "react-router-dom";

const ConnectionBtn = () => {
  return (
    <Link className="btn-nav" to="/login">
      Vous avez déjà un compte ?
    </Link>
  );
};

export default ConnectionBtn;
