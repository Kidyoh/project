import { Instagram, MessageCircle, Linkedin, Twitter, Send } from "lucide-react";
import Head from 'next/head';

export function Footer() {
  return (
    <>
      <Head>
        <meta name="keywords" content="Hackathon Ethiopia, Web3 Ethiopia, Venturemeda, Developer Community Ethiopia" />
      </Head>
      <footer className="bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <a href="#" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110">
                <Send className="h-5 w-5" />
              </a>
              <p className="text-muted-foreground">Support via Telegram account and bot</p>
            </div>
          </div>
          <hr className="my-8 border-t border-muted-foreground" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Venturemeda. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}