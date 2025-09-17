import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(33, 150, 243, 0.8), rgba(76, 175, 80, 0.8)), url('/src/assets/hero-education.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce">
          <GraduationCap className="w-12 h-12 text-white/30" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <BookOpen className="w-10 h-10 text-white/20" />
        </div>
        <div
          className="absolute bottom-40 left-20 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <Users className="w-14 h-14 text-white/25" />
        </div>
        <div
          className="absolute bottom-20 right-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <Award className="w-16 h-16 text-white/20" />
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            F.G.P.H.S.T.C
          </span>
        </h1>
        <p
          className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Excellence in Education, Innovation in Learning
        </p>
        <p
          className="text-md sm:text-lg mb-10 text-gray-300 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          Discover a world of knowledge with our comprehensive educational
          programs, expert faculty, and cutting-edge learning resources designed
          to shape future leaders.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <button className="h-11 rounded-md bg-white text-blue-400 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold shadow-elegant">
            Get Started Today
          </button>
          <button className="h-11 rounded-md border border-white text-white hover:bg-blue-400 hover:text-education-blue transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold">
            Explore Services
          </button>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-in"
          style={{ animationDelay: "2s" }}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">1000+</div>
            <div className="text-sm sm:text-base text-gray-300">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
            <div className="text-sm sm:text-base text-gray-300">
              Expert Teachers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">20+</div>
            <div className="text-sm sm:text-base text-gray-300">Programs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">98%</div>
            <div className="text-sm sm:text-base text-gray-300">
              Success Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
