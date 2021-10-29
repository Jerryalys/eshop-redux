import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
//import Icons from "views/Icons.js";
import Cart from "views/Cart.js";
import Maps from "views/Maps.js";
import CustomerProfile from "views/CustomerProfile.js";
import Jackets from "views/Jackets.js"
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
    path: "/jackets",
    name: "Jackets",
    icon: "shopping_bag-16",
    component: Jackets,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "design_image",
  //   component: Icons,
  //   layout: "/admin",
  // },
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
    name: "Customer Profile",
    icon: "users_single-02",
    component: CustomerProfile,
    layout: "/admin",
  },
  {
    path: "/cart",
    name: "Cart",
    icon: "shopping_shop",
    component: Cart,
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
];
export default dashRoutes;
