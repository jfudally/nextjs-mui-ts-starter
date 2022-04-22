import {Link, Typography} from "@mui/material";
import React from "react";


export const Footer = (props: any) => (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright ©'}
        <Link color="inherit" href="http://localhost:3000">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

export default Footer;