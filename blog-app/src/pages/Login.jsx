const Login = () => {
  const loginHandler = () => {
    localStorage.setItem("user", "admin");
    alert("Logged in");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
