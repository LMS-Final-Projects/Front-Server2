
import Index from "../pages/Index.js";
import Profile from "../pages/Profile.js";
import Maps from "../pages/Maps.js";
import Register from "../pages/Register.js";
import Login from "../pages/Login.js";
import Tables from "../pages/Tables.js";
import Icons from "../pages/Icons.js";

const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "",
  },
  {
    path: "/index2",
    name: "Dashboard2",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "",
    main : "/index"
  },
  {
    path: "/index3",
    name: "Dashboard2",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "",
    main : "/index"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "",
  },
  {
    path: "/icons2",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "",
    main : "/icons"
  },
  {
    path: "/icons3",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "",
    main : "/icons"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
