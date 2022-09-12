import { Link } from "react-router-dom";

const ConnectionBtn = () => {
  return (
    <Link className="btn pad1 valid" to="/">
      Vous avez déjà un compte ?
    </Link>
  );
};

export default ConnectionBtn;
