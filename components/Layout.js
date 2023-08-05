

// Font Import / settings
import { Sora } from "@next/font/google";
const sora = Sora ( {
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

// Local Imports
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftimg from '../components/TopLeftImg'

const Layout = ( {children }) => {
  return (
  <div>
    <TopLeftimg />
    <Nav />
    <Header />
    {children}
  </div>);
};

export default Layout;
