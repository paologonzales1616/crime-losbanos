const Functions = {
 

  logout: function() {
    localStorage.removeItem("page");
    localStorage.removeItem("access_token");
  }
};

export default Functions;
