import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import PhoneMockup from "@/components/phone-mockup"
import AppScreen from "@/components/app-screen"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Dev</span>Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="hidden md:flex">
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    React Native Expert
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                    Building beautiful, performant mobile experiences
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Crafting exceptional cross-platform applications with React Native
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#projects" className="gap-2">
                      View my work <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">Contact me</Link>
                  </Button>
                </div>
              </div>
              <PhoneMockup className="mt-8 lg:mt-0">
                <AppScreen />
              </PhoneMockup>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 scroll-mt-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About me</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Passionate about creating exceptional mobile experiences
              </h2>
              <p className="text-muted-foreground">
                I'm a React Native developer with a focus on building high-performance, user-friendly mobile
                applications. With expertise in both iOS and Android development, I create seamless cross-platform
                experiences that feel native on every device.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical excellence with a keen eye for design, ensuring that every app I build is
                not only functional but also visually appealing and intuitive to use.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/0"></div>
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20">
                Your Photo Here
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 scroll-mt-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Projects</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Featured Work</h2>
              <p className="text-muted-foreground max-w-3xl">
                A selection of my recent React Native projects, showcasing various techniques and solutions for mobile
                development challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Fitness Tracker App"
                description="A comprehensive fitness tracking application with real-time workout monitoring, custom routines, and progress analytics."
                tags={["React Native", "Firebase", "Redux"]}
                image="/placeholder.svg?height=300&width=400"
              />
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured shopping app with product catalog, cart management, secure payments, and order tracking."
                tags={["React Native", "GraphQL", "Stripe"]}
                image="/placeholder.svg?height=300&width=400"
              />
              <ProjectCard
                title="Social Media App"
                description="A social networking platform with real-time messaging, media sharing, and personalized content feeds."
                tags={["React Native", "Socket.io", "AWS"]}
                image="/placeholder.svg?height=300&width=400"
              />
              <ProjectCard
                title="Travel Companion"
                description="An all-in-one travel app featuring itinerary planning, location-based recommendations, and offline maps."
                tags={["React Native", "MapBox", "Context API"]}
                image="/placeholder.svg?height=300&width=400"
              />
              <ProjectCard
                title="Task Management"
                description="A productivity app with task organization, reminders, and team collaboration features."
                tags={["React Native", "Realm", "Push Notifications"]}
                image="/placeholder.svg?height=300&width=400"
              />
              <ProjectCard
                title="Music Streaming App"
                description="A music player with streaming capabilities, playlist management, and audio visualization."
                tags={["React Native", "Audio API", "Animation"]}
                image="/placeholder.svg?height=300&width=400"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 scroll-mt-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Skills</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Technical Expertise</h2>
              <p className="text-muted-foreground max-w-3xl">
                My technical toolkit includes a wide range of technologies and methodologies for building exceptional
                mobile applications.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="React Native" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="TypeScript" />
                  <SkillBadge name="Redux" />
                  <SkillBadge name="Context API" />
                  <SkillBadge name="React Navigation" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">UI/UX & Animation</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Reanimated" />
                  <SkillBadge name="Gesture Handler" />
                  <SkillBadge name="Styled Components" />
                  <SkillBadge name="UI Kitten" />
                  <SkillBadge name="Lottie" />
                  <SkillBadge name="Figma" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Backend & APIs</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Firebase" />
                  <SkillBadge name="GraphQL" />
                  <SkillBadge name="REST APIs" />
                  <SkillBadge name="AWS Amplify" />
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="MongoDB" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Git" />
                  <SkillBadge name="CI/CD" />
                  <SkillBadge name="Jest" />
                  <SkillBadge name="Detox" />
                  <SkillBadge name="Fastlane" />
                  <SkillBadge name="App Center" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Let's work together</h2>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and open to discussing new opportunities. If you have a
                project in mind or just want to chat about mobile development, feel free to reach out.
              </p>
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  your.email@example.com
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  github.com/yourusername
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  linkedin.com/in/yourusername
                </a>
              </div>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <form className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

