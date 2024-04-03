import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

export const SiteFooter = () => {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href="mailto:ranggadpermadi@gmail.com">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Mail</span>
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
            <Icons.twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <Icons.gitHub className="h-6 w-6" />
            <span className="sr-only">Github</span>
          </a>
        </div>

        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a target="_blank" href={siteConfig.links.personalSite}>{siteConfig.author}</a>
        </div>
      </div>
    </footer>
  );
};
