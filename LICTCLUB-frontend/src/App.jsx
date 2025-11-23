import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Details from './components/Details';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import DayOneSchedule  from './components/DayOneSchedule';
import DayTwoSchedule from './components/DayTwoSchedule';
import DayThreeSchedule from './components/DayThreeSchedule';
import Themes from './components/Themes';
import Countdown from './components/Countdown';
import HackathonInfoSection from './components/HackathonInfoSection';

function App() {
  return (
    
            <>
              <Header />
              <HeroSection />
              <About />
              <Details />
              <Themes />
              <Prizes />
              <Sponsors />
              <Timeline />
              <DayOneSchedule />
              <DayTwoSchedule />
              <DayThreeSchedule />
              <Team />
              <Countdown deadline="2025-08-17T23:59:59" />
              <HackathonInfoSection />
              <RegistrationForm />
              <FAQ />
              <BackToTop />
              <Footer />
            </>
  );
}

export default App;
