import { Badge } from "@/components/ui/badge";

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "TensorFlow",
  "Docker", "Kubernetes", "AWS", "Azure", "GraphQL",
  "PostgreSQL", "Redis", "MongoDB", "Blockchain", "WebGL"
];

const TechStack = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leveraging the latest and most powerful technologies to build exceptional solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="px-6 py-3 text-base border-primary/30 hover:border-primary hover:shadow-glow-cyan transition-all duration-300 cursor-default glass-effect"
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
