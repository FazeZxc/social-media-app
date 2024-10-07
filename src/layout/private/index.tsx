export const homepage = (props) => {
  const { ...rest } = props;
  const getRoute = () => {
    return window.location.pathname;
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapsedActiveRoute = getActiveRoute(routes[i].items);
        if (collapsedActiveRoute !== activeRoute) {
          return collapsedActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].items);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
};
