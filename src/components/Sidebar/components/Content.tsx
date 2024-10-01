import { SidebarLinks } from "./Links";

export const SidebarContent = (props) => {
  const { routes } = props;
  return (
    <>
      <SidebarLinks routes={routes} />
    </>
  );
};
