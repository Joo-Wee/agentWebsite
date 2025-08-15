import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import alphaLogo from "@/assets/Alpha.jpg";
// ... existing code ...

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/#features", isRoute: true },
        { name: "Signals", href: "/signals", isRoute: true }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/#how-it-works", isRoute: true },
        { name: "Contact", href: "mailto:alphaalith@gmail.com", isRoute: false }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs", isRoute: false },
        { name: "Community", href: "https://t.me/alphaalith", isRoute: false }
      ]
    }
  ];

  const socialLinks = [
    { name: "X", icon: X, href: "https://x.com/AlphaAlith" },
    { name: "Email", icon: Mail, href: "mailto:alphaalith@gmail.com" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
            <Image 
            src={alphaLogo}
            alt="Alpha Alith" 
            width={96}
            height={96}
            className="w-24 h-24 mx-1 mb-6 rounded-full"
          />
              <span className="text-xl font-bold text-primary">Alpha Alith</span>
            </div>
            <p className="text-muted-foreground mb-6">
              AI-curated intelligence for the Hyperion ecosystem. Cut through the chaos, get pure alpha.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-md hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.isRoute ? (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Alpha Alith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;