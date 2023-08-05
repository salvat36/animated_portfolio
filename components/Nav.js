//  links
import { HiHome } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiRectangleGroup } from "react-icons/hi"
import { HiViewColumns } from "react-icons/hi"
import { HiChatBubbleBottomCenterText } from "react-icons/hi"
import { HiEnvelope } from "react-icons/hi"

const links = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  return <nav>nav</nav>;
};

export default Nav;
