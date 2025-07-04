const valideteUser = async (email) => {
  try {
    const result = await fetch(`https://mp-wallet-app-api.herokuapp.com/users?email=${email}`);
    const user = await result.json();
    return user;
  } catch (error) {
    return {error};
  }
}

const onClickLogin = async () => {
  const email = document.getElementById("input-email").value;

  if (email.length < 5 || !email.includes("@")) {
    alert("E-mail inválido!");
    return;
  }
  
  const result = await valideteUser(email);

  if (result.error) {
    alert("Falha ao validar o usuário!");
    return;
  }

  localStorage.setItem("@WalletApp:userEmail", result.email);
  localStorage.setItem("@WalletApp:userName", result.name);
  localStorage.setItem("@WalletApp:userId", result.id);


  window.open("./src/pages/home/index.html", "_self");
};