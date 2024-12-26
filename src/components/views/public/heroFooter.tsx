import { useNavigate } from "react-router-dom";

export const HeroFooter = () => {
  const navLinks = [
    {
      title: "About",
      link: "/about",
      clickable: true,
    },
    {
      title: "Download the App",
      link: "/download",
      clickable: true,
    },
    {
      title: "Help Center",
      link: "/help",
      clickable: true,
    },
    {
      title: "Terms of Service",
      link: "/tos",
      clickable: true,
    },
    {
      title: "Privacy Policy",
      link: "/legal",
      clickable: true,
    },
    {
      title: "Cookie Policy",
      link: "/cookies",
      clickable: true,
    },
    {
      title: "Accessibility",
      link: "/accessibility",
      clickable: true,
    },
    {
      title: "Ads Info",
      link: "/ads",
      clickable: true,
    },
    {
      title: "Blog",
      link: "/blog",
      clickable: true,
    },
    {
      title: "Careers",
      link: "/careers",
      clickable: true,
    },
    {
      title: "Brand Resources",
      link: "/brand",
      clickable: true,
    },
    {
      title: "Advertising",
      link: "/adver",
      clickable: true,
    },
    {
      title: "Marketing",
      link: "/marketing",
      clickable: true,
    },
    {
      title: "Developers",
      link: "/dev",
      clickable: true,
    },
    {
      title: "Directory",
      link: "/direc",
      clickable: true,
    },
    {
      title: "Settings",
      link: "/settings",
      clickable: true,
    },
    {
      title: "© 2024-25 Abhinav Mishra",
      clickable: false,
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      {navLinks.map((items) => {
        if (items.clickable) {
          return (
            <small
              onClick={() => navigate(`${items.link}`)}
              className="text-white text-sm font-medium leading-none cursor-pointer"
            >
              <span className="px-3">{items.title}</span>
            </small>
          );
        } else {
          return (
            <small className="text-white text-sm font-medium leading-none">
              {items.title}
            </small>
          );
        }
      })}
    </>
  );
};
