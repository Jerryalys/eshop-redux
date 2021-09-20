import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import Products from "views/Products.js";
import Maps from "views/Maps.js";
// import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Jeans from "views/Jeans.js";
import Shirts from "views/Shirts.js";
import Sweatshirts from "views/Sweatshirts.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "Products",
    icon: "shopping_shop",
    component: Products,
    layout: "/admin",
  },
   {
    path: "/jeans",
    name: "Jeans",
    icon: "shopping_bag-16",
    component: Jeans,
    layout: "/admin",
  },
  {
    path: "/shirts",
    name: "Shirts",
    icon: "shopping_basket",
    component: Shirts,
    layout: "/admin",
  },
  {
    path: "/sweatshirts",
    name: "Sweatshirts",
    icon: "shopping_box",
    component: Sweatshirts,
    layout: "/admin",
  },
  // {
  //   path: "/sweatshirts",
  //   name: "Sweatshirts",
  //   icon: "shopping_box",
  //   component: Sweatshirts,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
];
export default dashRoutes;
