const EventsSection = () => {
  const events = [
    {
      title: "Swimming Competition",
      description:
        "Dive into excellence with our annual swimming competitions.",
      image: "/src/assets/swimming.jpg",
    },
    {
      title: "Hockey Tournament",
      description:
        "Showcase your skills in our inter-school hockey tournament.",
      image: "/src/assets/hockey.webp",
    },
    {
      title: "Tennis Championship",
      description:
        "Smash your way to victory in the school tennis championship.",
      image: "/src/assets/tennis.jpg",
    },
    {
      title: "Dance Festival",
      description:
        "Celebrate creativity and talent in our annual dance festival.",
      image: "/src/assets/dance.jpg",
    },
    {
      title: "Football Tournament",
      description: "Kick off the excitement in our school football tournament.",
      image: "/src/assets/football.jpg",
    },
    {
      title: "marathon competition",
      description: "race to the finish line in our thrilling marathon event.",
      image: "/src/assets/racing.jpg",
    },
  ];

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black/80">
            School Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore exciting extracurricular activities and sports events
            organized throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-card border-0 overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6 pt-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-education-blue transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {event.description}
                </p>

                <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-education-blue to-education-green text-white font-medium shadow-md transition-transform duration-300 hover:scale-105 hover:from-education-blue/90 hover:to-education-green/90">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
