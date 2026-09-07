import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import SignupForm from "@/components/Home/SignupForm";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import PillarsGrid from "@/components/CorporateEvents/PillarsGrid";
import EventsInPractice from "@/components/CorporateEvents/EventsInPractice";
import WantToKnowMore from "@/components/CorporateEvents/WantToKnowMore";
import DiscoverCosaEvents from "@/components/CorporateEvents/DiscoverCosaEvents";



export default function CorporateEventsPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Corporate Events"
        title="Corporate events"
        subtitle="Organisation of team incentives and tours"
        image="/corporateevents/hero.jpg"
      />

      <main className="bg-[#f8f7f4]">
        <IntroText>
          Let&apos;s be honest. As much as anyone loves their job, a little
          extra motivation can usually work wonders, in the boardroom as much
          as on the office floor. At Cosa, we know how to create business
          events packed with moments no one will ever forget, from rewarding
          hard work with an incentive trip to showcasing your company to the
          world. Our attention to detail provides a hassle-free experience,
          while our international network gives you VIP access to
          attractions, cultural immersions or adventurous activities.
        </IntroText>
       

        <PillarsGrid />
        <EventsInPractice />
        <WantToKnowMore />
        <DiscoverCosaEvents />

        <SignupForm />
      </main>

      <Footer />
    </>
  );
}