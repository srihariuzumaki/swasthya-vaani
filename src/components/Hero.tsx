import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Languages, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/30 to-green-50/30" />

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary/10 text-secondary border-secondary/20">
              <Heart className="w-4 h-4" />
              Healthcare for Everyone, Everywhere
            </Badge>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Don't type,</span>
              <span className="block text-gradient-primary">just speak</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              AI-powered voice assistant providing medicine information, symptom guidance, and healthcare support in <span className="text-secondary font-semibold">10+ Indian languages</span>.
            </p>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Mic className="w-4 h-4" />
                <span className="text-sm font-medium">Voice-Enabled</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium">Multilingual Support</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Verified Medicine Info</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                <a href="/app-debug.apk" download="swasthya-vaani.apk">
                  Download for Android
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full font-semibold">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicator */}
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">50,000+ users</span> across India
            </p>
          </div>

          {/* Right Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={heroImage}
              alt="Diverse users accessing Swasthya Vaani healthcare app through voice assistance"
              className="relative rounded-3xl shadow-2xl w-full"
            />
            {/* Voice Wave Animation Overlay */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary rounded-full animate-pulse"
                  style={{
                    height: `${20 + i * 8}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
