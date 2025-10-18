const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Nexinotech
            </span>
            <p className="text-sm text-muted-foreground mt-2">
              Building the future, one solution at a time.
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexinotech System. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
