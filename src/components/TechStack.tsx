import { Badge } from "@/components/ui/badge";

const technologies = [
  "React", "Angular", "Vue.js", "TypeScript", "Node.js", 
  "Python", ".NET", "Java", "PHP", "Docker", 
  "Kubernetes", "AWS", "Azure", "Google Cloud", "DevOps",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "Microservices"
];

const TechStack = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background opacity-70" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Technologies We <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">Master</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Industry-leading technologies and frameworks powering enterprise solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="px-6 py-3 text-base border-2 border-primary/30 hover:border-primary hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-default crystal-effect font-medium animate-fade-in"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
