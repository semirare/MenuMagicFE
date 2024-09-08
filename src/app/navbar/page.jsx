import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import Link from "next/link";


export const NavBar = () => {
    return (
        <NavigationMenu className='h-[5vw]'>
            <NavigationMenuList className="bg-slate-500 w-[100vw] h-[5vw]">
                <NavigationMenuItem>
                    <Link href="/" className="bg-blue-500" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle() + "bg-blue-500"}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/recipes" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Recipes
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavBar;