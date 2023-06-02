import React from 'react'
import {AppBar, Typography } from '@mui/material';
const Navbar = () => {
  return (
    <div>
            <AppBar>
                <toolbar>
                    <Typography color={"black"}>
                        Atom
                    </Typography>
                    <button>Click here</button>
                </toolbar>
                </AppBar>  

    </div>
  )
}
export default Navbar