import { Instagram, MessageCircle, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">Support via Telegram account and bot</p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm text-muted-foreground">
              Keywords: Hackathon Ethiopia, Web3 Ethiopia, Venturemeda, Developer Community Ethiopia
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              © 2024 Venturemeda. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}