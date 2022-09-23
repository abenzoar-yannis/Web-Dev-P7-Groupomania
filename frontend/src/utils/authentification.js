const authentification = (res) => {
  const userId = res.data.userId;
  const userName = res.data.userName;
  const role = res.data.role;
  const accessToken = res.data.token;
  const userAuthLinea = { userId, userName, role, accessToken };
  const userAuthJSON = JSON.stringify(userAuthLinea);
  /* Je met pour l'instant l'ID et le TOKEN en sessionStorage (Où alors ? un state ?) */
  sessionStorage.setItem("groupomaniaId", userAuthJSON);

  return userAuthLinea;
};

export default authentification;
