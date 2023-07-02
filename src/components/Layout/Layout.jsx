import { Loader } from 'components/Loader/Loader';
import { Outlet  } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, HeaderLink } from './Layout.styled';

export const Layout = () => {
    return (
        <Container>
           <Header>  
                <nav>
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="/movies">Movies</HeaderLink>
                </nav>
            </Header>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
        </Container>
    )
}