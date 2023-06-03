import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IMenuLateralProps {
    children: React.ReactNode;
}

interface IListItemLinkProps {
    label: string;
    to: string;
    icon: string;
    click: (() => void | undefined);

}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, click }) => {

    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path: resolvedPath.pathname, end:false});

    const handleClick = () => {
        navigate(to);
        click?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label}></ListItemText>
        </ListItemButton>
    );
}


export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} display="flex" flexDirection="column" height='100%'  >
                    <Box width="100%" height={theme.spacing(20)} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src="~\pablo-foto.jpeg" />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemLink  icon="home" to="/pagina-inicial" label="Página inicial"  click={smDown? toggleDrawerOpen :toggleDrawerOpen } />
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};