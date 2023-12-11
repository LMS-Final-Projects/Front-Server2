import React from "react";
import {useLocation, Route, Routes, Navigate} from "react-router-dom";
// reactstrap components
import {Container} from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import sidebarRoutes from "../routes/sidebarRoutes.js";

const Main = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => (
            <Route path={prop.path} element={prop.component} key={key} exact/>
        ));
    };

    const getBrandText = (path) => {
        for (let i = 0; i < sidebarRoutes.length; i++) {
            if (
                props?.location?.pathname.indexOf(sidebarRoutes[i].layout + sidebarRoutes[i].path) !==
                -1
            ) {
                return sidebarRoutes[i].name;
            }
        }
        return "Brand";
    };

    const logoStyle = {
        // width: '5000x', // 원하는 너비
        // height: '5120px', // 높이 자동 조정 (비율 유지)
    }

    return (
        <>
            <Sidebar
                {...props}
                routes={sidebarRoutes}
                logo={{
                    innerLink: "/index",
                    imgSrc: require("../assets/img/brand/playdata.png"),
                    imgAlt: "...",
                    style: logoStyle
                }}
            />
            <div className="main-content" ref={mainContent}>
                <AdminNavbar
                    {...props}
                    brandText={getBrandText(props?.location?.pathname)}
                />
                <Routes>
                    {getRoutes(sidebarRoutes)}
                    <Route path="*" element={<Navigate to="/index" replace/>}/>
                </Routes>
                <Container fluid>
                    <AdminFooter/>
                </Container>
            </div>
        </>
    );
};

export default Main;
