import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg-crystal.jpg";
import TypewriterText from "./TypewriterText";

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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDuration: '4s' }} />
      <div className="absolute top-40 right-32 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full crystal-effect mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">Leading Software & IT Solutions</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow inline-block animate-slide-up">
            Nexinotech
          </span>
          <br />
          <span className="text-foreground inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <TypewriterText 
              texts={[
                "Software Solutions",
                "IT Infrastructure",
                "Cloud Services",
                "Digital Innovation"
              ]}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Transforming businesses through cutting-edge software development, IT consulting,
          and digital transformation services. Your trusted technology partner.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
          <div className="crystal-effect p-6 rounded-lg shine-effect hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 animate-pulse-glow">500+</div>
            <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
          </div>
          <div className="crystal-effect p-6 rounded-lg shine-effect hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 animate-pulse-glow">98%</div>
            <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
          </div>
          <div className="crystal-effect p-6 rounded-lg shine-effect hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 animate-pulse-glow">24/7</div>
            <div className="text-sm text-muted-foreground font-medium">Technical Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
