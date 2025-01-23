import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  import { Separator } from "@/components/ui/separator";
  
  import Image from "next/image";
  import Link from "next/link";

export function Header(){
    return (
        <>
        <Menubar className="sticky top-0 z-50 flex items-center px-4 shadow-md">
        <div className="flex items-center space-x-2">
        <Link href="/" passHref>
            <Image
              src="/icon.png"
              alt="Site Logo"
              width={45}
              height={45}
              className="h-[45px] w-[45px]"
              quality={100}
            />
          </Link>
        </div>
        &nbsp;

        <Separator orientation="vertical"/>

        <MenubarMenu className="sticky top-0 shadow-md rounded-none">
          <MenubarTrigger>Apps</MenubarTrigger>
          <MenubarContent>
            <Link href="/proxy" passHref>
              <MenubarItem asChild>
                <div>
                  <i className="bi bi-hdd-network"></i>
                  &nbsp;
                  <h6>Web Proxy</h6>
                </div>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
              <Link href="/ai" passHref>
                <MenubarItem asChild>
                  <div>
                    <i className="bi bi-stars"></i>
                    &nbsp;
                    <h6>A.I</h6>
                  </div>
                </MenubarItem>
              </Link>
            <MenubarSeparator />
            {/*<Link href="/player" passHref>
              <MenubarItem asChild>
                <div>
                  <i className="bi bi-stars"></i> //UN-COMMENT WHEN PLAYER PAGE IS DONE
                  &nbsp;
                  <h6>A.I</h6>
                </div>
              </MenubarItem>
            </Link>*/}
            <MenubarItem disabled>
              <i className="bi bi-play-btn-fill"></i>
              &nbsp;
              <h6>Video Player</h6>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Separator className="bg-red-950"/>
      </>
    )
}