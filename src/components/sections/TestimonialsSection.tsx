import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quotes } from 'phosphor-react';
gsap.registerPlugin(ScrollTrigger);
const clients = [{
  id: 1,
  logo: "/assets/NotLuc logo.jpg",
  name: "NotLuc",
  subscribers: "836K"
}, {
  id: 2,
  logo: "/assets/Bobicraft logo.jpg",
  name: "Bobicraft",
  subscribers: "8.8M"
}, {
  id: 3,
  logo: "/assets/Mahad Khan logo.jpg",
  name: "Mahad Khan",
  subscribers: "345K"
}];
const testimonials = [{
  id: 1,
  image: "/assets/testimonial-1.jpeg",
  client: "Content Creator",
  text: "yo i love the editing bro"
}, {
  id: 3,
  image: "/assets/testimonial-3.jpeg",
  client: "YouTuber",
  text: "Wow, it looks so amazing! Just as I imagined, thank you so much!"
}];
export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo('.section-title', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 85%'
      }
    });

    gsap.fromTo('.client-logo', {
      opacity: 0,
      y: 40,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.clients-grid',
        start: 'top 80%'
      }
    });

    gsap.fromTo('.testimonial-card', {
      opacity: 0,
      y: 60,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.testimonials-grid',
        start: 'top 80%'
      }
    });

    gsap.fromTo('.results-section', {
      opacity: 0,
      y: 60
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.results-section',
        start: 'top 80%'
      }
    });
  }, []);
  return <section id="testimonials" ref={sectionRef} className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Trusted By Section */}
        <div className="text-center mb-20">
          <h2 className="section-title text-3xl md:text-5xl font-light mb-12">
            <span className="gradient-text text-glow">Trusted by</span>
          </h2>
          <div className="clients-grid flex flex-wrap justify-center items-start gap-12 md:gap-16 max-w-4xl mx-auto">
            {clients.map((client) => <div key={client.id} className="client-logo flex flex-col items-center group">
                <div className="w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-2 border-glass-border/30 group-hover:border-primary transition-all duration-300 hover-glow">
                  <img src={client.logo} alt={`${client.name} logo`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
                  {client.name}
                </h3>
                <p className="text-sm md:text-base text-foreground-muted">
                  {client.subscribers} subscribers
                </p>
              </div>)}
          </div>
        </div>

        {/* What My Clients Say Section */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-5xl font-light mb-6">
            <span className="gradient-text text-glow">What My Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-12">
            Real feedback from creators who trust me with their content
          </p>
        </div>

        {/* Testimonials Grid - Centered */}
        <div className="testimonials-grid flex flex-wrap justify-center gap-8 mb-24 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => <div key={testimonial.id} className="testimonial-card group w-full md:w-[calc(50%-1rem)] lg:w-[400px]">
              <div className="glass-intense rounded-xl p-6 hover:scale-105 transition-all duration-500 hover-glow h-full">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quotes size={32} className="text-primary opacity-60" weight="fill" />
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground-muted leading-relaxed mb-6 text-sm">
                  "{testimonial.text}"
                </p>

                {/* Screenshot Image */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden border border-glass-border/30">
                    <img src={testimonial.image} alt={`Testimonial from ${testimonial.client}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg pointer-events-none" />
                </div>
              </div>
            </div>)}
        </div>

        {/* Results Section */}
        <div className="results-section text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-12">
            <span className="gradient-text text-glow">Results I can bring</span>
          </h2>
          <div className="flex justify-center">
            <div className="max-w-2xl w-full glass-intense rounded-xl p-4 hover-glow">
              <img src="/assets/Result.jpg" alt="YouTube metrics showing improved results" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-foreground-muted mb-6 text-lg">
            Ready to join these satisfied clients?
          </p>
          <button className="glass-intense px-8 py-4 rounded-lg text-primary border border-glass-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 font-medium" onClick={() => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            Start Your Project
          </button>
        </div>
      </div>
    </section>;
}