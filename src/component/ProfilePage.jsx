import React, { useState } from 'react';
import { TextField, Button, Typography, AppBar, Box,Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';



  const ProfilePage = () => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
  
    return (
      <div>


     <Box sx={{ flexGrow: 2 }}>
            <AppBar position="static" style={{background:"lightblue"}}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Settings</Typography>
                    <Button variant="contained" color="secondary"><Link to = {'/Add'} style = {{textDecoration:"none",color:"white"}}>HOME</Link></Button>
                    <Button variant="contained" color="warning" ><Link to = {'/'} style = {{textDecoration:"none",color:"white"}}>LOGOUT</Link></Button>
                    
                </Toolbar>

            </AppBar>
      
        </Box>



        <Typography variant="h4" color={"blue"}><b>Profile</b></Typography>
  
        
        <ul>
        <li><TextField label="Name:" /></li>
        <li><TextField label="Place:" /></li>
        <li><TextField label="Age:" /></li>
        <li><TextField label="Education:" /></li>
        <li><TextField label="Email-ID:" /></li>
        <li><TextField label="Phone-Number:" /></li>
        </ul>

        {/* Submit button */}
        <Button variant="contained" color="primary">Update Profile</Button>

        <ul>
       <li> <TextField
          label="Income"
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        /></li>
       <li> <TextField
          label="Expense"
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        /></li>

        </ul>
  


        {/* Button to calculate total */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Calculate total income and expense
            const total = parseInt(income) + parseInt(expense);
            alert(`Total: $${total}`);
          }}
        >
          Calculate Total
        </Button>

      </div>
    );
  };

  
  export default ProfilePage;
