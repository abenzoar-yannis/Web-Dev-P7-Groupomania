import { Link } from 'react-router-dom'

const NewAccountBtn = () => {
  return (
    <Link className='btn-nav' to="/signup">Créer nouveau compte ?</Link>
  )
}

export default NewAccountBtn