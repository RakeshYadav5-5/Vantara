import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import EventTypesGrid from "@/components/EventCreators/EventTypesGrid";
import WhyChooseUsGrid from "@/components/EventCreators/WhyChooseUsGrid";
import SpecialSection from "@/components/EventCreators/SpecialSection";
import InActionGrid from "@/components/EventCreators/InActionGrid";
import Testimonial from "@/components/EventCreators/Testimonial";
import CSRSection from "@/components/EventCreators/CSRSection";
import TeamGrid from "@/components/EventCreators/TeamGrid";
import InspireGrid from "@/components/EventCreators/InspireGrid";
import EventContactForm from "@/components/EventCreators/EventContactForm";

export default function EventCreatorsPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Event creators"
        title="Cosa events"
        subtitle="Celebrating & travelling together is more fun"
        image="https://picsum.photos/seed/cosa-ec-hero/1600/900"
      />

      <main className="bg-[#f8f7f4]">
        <IntroText>
          Imagine a candlelit dinner for 100 friends in magical Marrakech.
          Or maybe a wildlife safari for 25 senior managers in the Rockies.
          However big or small, wherever you want to go, whoever is invited,
          Cosa can organise it for you. Our events are even more memorable
          because they always include at least one overnight stay and can be
          abroad or in Switzerland. With many years of experience in
          creating both private and business events, we are full of ideas to
          make yours truly spectacular. Let us show you what we can do.
        </IntroText>

        <EventTypesGrid />
        <WhyChooseUsGrid />
        <SpecialSection />
        <InActionGrid />
        <Testimonial />
        <CSRSection />
        <TeamGrid />
        <InspireGrid />
        <EventContactForm />
      </main>

      <Footer />
    </>
  );
}
