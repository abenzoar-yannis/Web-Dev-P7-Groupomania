import { Link } from "react-router-dom";

const NewAccountBtn = () => {
  return (
    <Link className="btn pad1 valid" to="/signup">
      Créer un nouveau compte ?
    </Link>
  );
};

export default NewAccountBtn;
