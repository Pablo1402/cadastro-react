import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";
import { useDrawerContext } from "../../contexts";

interface IMenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleDrawerOpen} = useDrawerContext();
    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary':'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} display="flex" flexDirection="column" height='100%'  >
                    <Box width="100%" height={theme.spacing(20)} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                        <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12)}} src="~\pablo-foto.jpeg"  />
                    </Box>
                    <Divider  />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon style={{ color: theme.palette.text.primary }} >home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página inicial"></ListItemText>
                            </ListItemButton>
                        </List>                        
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh"  marginLeft={smDown ? 0 :theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};