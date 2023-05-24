const signup = async (req, res) => {
    const { username, password } = req.body;
  
    // Check if username or password contain SQL queries
    const isUsernameSafe = !containsSQLQuery(username);
    const isPasswordSafe = !containsSQLQuery(password);
  
    if (!isUsernameSafe || !isPasswordSafe) {
      return res.status(400).json({ error: 'Invalid input.' });
    }
  
    // Check if the username already exists in the database
    db.get("SELECT id FROM userlist WHERE username = ?", [username], (err, row) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Database error.' });
      }
  
      if (row) {
        return res.status(409).json({ error: 'Username already exists.' });
      }
  
      // Insert the new user into the database
      db.run("INSERT INTO userlist (username, password) VALUES (?, ?)", [username, password], function (err) {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: 'Database error.' });
        }
  
        // Return a success response
        return res.status(200).json({ message: 'Signup successful.' });
      });
    });
  };
  
  // Helper function to check if a string contains potential SQL queries
  function containsSQLQuery(text) {
    const sqlKeywords = ['SELECT', 'UPDATE', 'DELETE', 'INSERT', 'DROP', 'CREATE'];
    const regex = new RegExp(`\\b(${sqlKeywords.join('|')})\\b`, 'i');
    return regex.test(text);
  }


const login = async (req,res)=>{
    db.get("SELECT * FROM userlist WHERE username=? && password=?",[username,password],(err,row)=>{
        if (!row){
            return res.status(404).json({message: "wrong authentication"});
        }
        //Return appropriate response here
        return res.status(200).json({message: "authentication successful"});
    });
}
