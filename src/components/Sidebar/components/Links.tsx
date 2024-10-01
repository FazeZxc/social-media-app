import { NavLink, useLocation } from "react-router-dom";
export const SidebarLinks = (props) => {
  const { routes } = props;

  let location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        return <>{createLinks(route.items)}</>;
      } else if (route.layout === "/admin" || route.layout === "/auth") {
        return (
          <NavLink key={index} to={route.layout + route.path}>
            {route.icon ? <>{route.name}</> : <>{route.name}</>}
          </NavLink>
        );
      }
    });
  };
  return createLinks(routes);
};
