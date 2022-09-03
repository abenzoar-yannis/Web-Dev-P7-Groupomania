const userApiRequest = async (email, password, action) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log(email);
    console.log(password);
    
    let raw = JSON.stringify({
      "email": `${email}`,
      "password": `${password}`
    });
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3000/api/auth/${action}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  export default userApiRequest