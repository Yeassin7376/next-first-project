import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from '@/components/ui/navigation-menu';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div>
          <Link href="/" className='text-xl font-bold'>News</Link>
        </div>
        {/* desktop menu */}
        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList className='space-x-2 '>
            <NavigationMenuItem>
              <NavigationMenuLink href='/news' className='hover:text-red-500'>News</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='hover:text-red-500'>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  <li>
                    <NavigationMenuLink>Web Development</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>MObile App</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>SEO</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/about' className='hover:text-red-500'>About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/contact' className='hover:text-red-500'>Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* theme switcher and login btn */}
        <div className='flex items-center gap-3'>
            <div className='flex items-center gap-1.5'>
                <span>Dark mode</span>
                <Switch />
            </div>
            <Button variant="default">Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
