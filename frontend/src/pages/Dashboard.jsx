const DashBoard = ({ user }) => {
  return (
    <div className="login">
    <h1 className="loginTitle">Welcome</h1>
    <div className="wrapper">
      <div className="left">
        <div className="loginButton google" >
         {user.displayName}
        </div>
   
      </div>
  
    </div>
  </div>
  );
};

export default DashBoard;
