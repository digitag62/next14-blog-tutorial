"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

export const MobileNav = () => {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" className="w-10 px-0 sm:hidden">
					<Menu className="w-5 h-5" />
					<span className="sr-only">Toggle Theme</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<MobileLink onOpenChange={setOpen} href="/" className="flex items-center">
					<Icons.logo className="h-4 w-4 mr-2" />
					<span className="font-bold">{siteConfig.name}</span>
				</MobileLink>
				<div className="flex flex-col gap-3 mt-5">
					<MobileLink onOpenChange={setOpen} href="/blog">
						Blog
					</MobileLink>
					<MobileLink onOpenChange={setOpen} href="/about">
						About
					</MobileLink>
					<Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
						GitHub
					</Link>
					<Link target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
						Twitter
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
};

interface MobileLinkProps extends LinkProps {
	children: React.ReactNode;
	onOpenChange?: (open: boolean) => void;
	className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={className}
			{...props}
		>
			{children}
		</Link>
	);
}
