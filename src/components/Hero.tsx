import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg-crystal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Crystal Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Animated Crystal Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full crystal-effect mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">Leading Software & IT Solutions</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-glow">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Nexinotech
          </span>
          <br />
          <span className="text-foreground">Software Solutions</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Transforming businesses through cutting-edge software development, IT consulting,
          and digital transformation services. Your trusted technology partner.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="group">
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="crystal" size="lg">
            View Our Services
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
          <div className="crystal-effect p-6 rounded-lg shine-effect">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
          </div>
          <div className="crystal-effect p-6 rounded-lg shine-effect">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
          </div>
          <div className="crystal-effect p-6 rounded-lg shine-effect">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground font-medium">Technical Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
