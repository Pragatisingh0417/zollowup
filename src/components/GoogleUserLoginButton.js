const GoogleUserLoginButton = () => {
  const handleGoogleLogin = () => {
      localStorage.removeItem("token"); // ✅ clear old token
    window.location.href = "http://localhost:5000/api/users/google"; 
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50 transition mt-4"
    >
      <img
        src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
        alt="Google"
        className="w-5 h-5"
      />
      <span className="text-gray-700 font-medium">Sign in with Google</span>
    </button>
  );
};

export default GoogleUserLoginButton;
