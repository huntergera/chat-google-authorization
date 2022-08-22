import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);

    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent="flex-end" alignItems={"center"} spacing={2}>
                    {user ?
                        <Button onClick={() => signOut(auth)} variant={"contained"}>Logout</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button
                                variant={"contained"}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;