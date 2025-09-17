import "./index.css";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import HeroSection from "./components/HeroSection";
import SectionsContent from "./components/SectionsContent";
import Examinations from "./components/Examinations";
import Teachers from "./components/Teachers";
import PrincipalMessage from "./components/PrincipalMessage";
import PaymentOptions from "./components/PaymentOptions";
import ClassSchedule from "./components/ClassSchedule";
import Admissions from "./components/Admissions";
import ServicesSection from "./components/ServicesSection";
import EventsSection from "./components/EventsSection";
import ContactSection from "./components/ContactSection";
import LibraryDonation from "./components/LibraryDonation";
import StudentForm from "./components/StudentForm";
import Footer from "./components/Footer";
function App() {
  const isRegistered = localStorage.getItem("registered");

  return (
    <>
      {isRegistered ? (
        <>
          <Navbar />
          <HeroSection />
         <SectionsContent />
         <Examinations />
         <Teachers />
         <PrincipalMessage />
         <PaymentOptions />
         <ClassSchedule/>
         <Admissions/>
         <ServicesSection/>
         <EventsSection/>
         <ContactSection/>
         <LibraryDonation/>
         <StudentForm/>
          <Footer/>
        </>
      ) : (
        <UserForm />
      )}
    </>
  );
}

export default App;
