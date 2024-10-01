import { SidebarContent } from "./components/Content";

export const Sidebar = (props) => {
  const { routes } = props;
  return (
    <>
      <SidebarContent routes={routes} />
    </>
  );
};
