import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function Login() {
  const { login, register, isAuthenticated, user} = useKindeAuth();


const handleLogIn = ():void => {
    login() 
}

const handleSignUp = ():void => {
    register() 
}


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1>Enzo's Insightt Full Stack Developer Technical Test</h1>
      <p className="mb-4 text-gray-600 text-sm">
        You will be redirected to a third-party service to authenticate
      </p>
      <div className="flex space-x-6">
        <button
          onClick={handleLogIn}
          className="hover:cursor-pointer px-6 py-2 rounded-lg bg-black text-white font-medium hover:opacity-80 transition"
        >
          Log in
        </button>
        <button
          onClick={handleSignUp}
          className="hover:cursor-pointer px-6 py-2 rounded-lg bg-black text-white font-medium hover:opacity-80 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
