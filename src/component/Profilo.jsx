import React, { useState } from 'react';
import { Avatar, Typography, Grid, Paper, IconButton, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { Edit as EditIcon } from '@mui/icons-material';

 


// Custom styled components
const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2),
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
}));

const Profilo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Austle Jaison');
  const [place, setPlace] = useState('Kaliyar');
  const [age, setAge] = useState(20);
  const [education, setEducation] = useState('Bachelor\'s Degree');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
              <ProfilePaper elevation={3}>
                  <Grid container spacing={2} alignItems="center" justifyContent="center">
                      <Grid item>
                          <ProfileAvatar alt="Profile Picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7txNZdQjTR4hNdkAOC_BWFEqFLo0jQfOuq1lusXcFaA&usqp=CAU&ec=48665699.png" />
                      </Grid>
                      <Grid item>
                          <Typography variant="h4" gutterBottom>
                              {isEditing ? (
                                  <TextField
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                      fullWidth
                                      variant="standard" />
                              ) : (
                                  name
                              )}
                          </Typography>
                          <Typography variant="subtitle1" gutterBottom>
                              Place:{isEditing ? (
                                  <TextField
                                      value={place}
                                      onChange={(e) => setPlace(e.target.value)}
                                      fullWidth
                                      variant="standard" />
                              ) : (
                                  place
                              )}
                          </Typography>
                          <Typography variant="body1">
                              Age: {isEditing ? (
                                  <TextField
                                      value={age}
                                      onChange={(e) => setAge(e.target.value)}
                                      fullWidth
                                      variant="standard" />
                              ) : (
                                  age
                              )}
                          </Typography>
                          <Typography variant="body1">
                              Education: {isEditing ? (
                                  <TextField
                                      value={education}
                                      onChange={(e) => setEducation(e.target.value)}
                                      fullWidth
                                      variant="standard" />
                              ) : (
                                  education
                              )}
                          </Typography>
                          <Typography variant="body1">
                              Email: {isEditing ? (
                                  <TextField
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      fullWidth
                                      variant="standard" />
                              ) : (
                                  email
                              )}
                          </Typography>
                          <Typography variant="body1">
                              Phone Number: {isEditing ? (
                                  <TextField
                                      value={phoneNumber}
                                      onChange={(e) => setPhoneNumber(e.target.value)}
                                      fullWidth
                                      variant="standard" />
                              ) : (
                                  phoneNumber
                              )}
                          </Typography>
                      </Grid>
                      <Grid item>
                          {isEditing ? (
                              <IconButton onClick={handleSaveClick}>
                                  <Typography variant="srOnly">Save</Typography>
                                  <EditIcon />
                              </IconButton>
                          ) : (
                              <IconButton onClick={handleEditClick}>
                                  <Typography variant="srOnly">Edit</Typography>
                                  <EditIcon />
                              </IconButton>
                          )}
                      </Grid>
                  </Grid>
              </ProfilePaper>
          </Grid>
      </Grid>
      
  );
};

export default Profilo;
