import FaqQuestion from './components/FaqQuestion.js';
import FaqButton from './components/FaqButton.js';
import Step from './components/Step.js';
import StoryCard from './components/StoryCard.js';
import GameCard from './components/GameCard.js';
import NavbarLink from './components/NavbarLink.tsx';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

function App() {
  const [email, setEmail] = useState("");
  const [scrollY, setScrollY] = useState(document.body.scrollTop);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <div className="absolute top-0 left-0 w-1/3 z-40 pointer-events-none hidden lg:block">
        <img 
          src="/backgrounds/corner-cloud.png" 
          alt=""
          className="w-full h-full object-cover select-none"
        />
      </div>

      <div className="w-full h-screen">
        <header className="relative h-[80px] lg:h-[115px] bg-[#45b4f5] flex justify-end items-center content-center lg:pr-16">
          <nav className="flex gap-4 text-3xl lg:gap-12 items-center text-white lg:text-5xl font-bold font-ember-and-fire">
            <NavbarLink onClick={() => scrollToSection('steps')}>How to organize</NavbarLink>
            {/* <NavbarLink onClick={() => scrollToSection('map')}>Map</NavbarLink> */}
            {/* <NavbarLink onClick={() => scrollToSection('letter')}>Letter</NavbarLink> */}
            <NavbarLink onClick={() => scrollToSection('previous-events')}>Previous events</NavbarLink>
            <NavbarLink onClick={() => scrollToSection('faq')}>FAQ</NavbarLink>
          </nav>
        </header>

        <section className="relative h-full flex items-end pb-32 2xl:pb-48 px-6 md:px-16 lg:px-24 2xl:px-32 bg-[url(/backgrounds/blue-sky.png)] bg-center bg-cover">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <img src="/backgrounds/sky-shine.png" alt="" className="w-full h-full object-cover select-none" />
          </div>

          <div
            className="absolute bottom-[32px] right-[140px] w-full h-full pointer-events-none"
            style={{
              transform: `translateY(${-scrollY / 12}px)`
            }}
          >
            {/* fishy on the right. His name is frederick. */}
            <div className="absolute top-[64px] right-[140px] w-1/6">
              <img src="/characters/fish-2.png" alt="Fish named Frederick" className="w-full h-full object-cover select-none" />
            </div>

            {/* fishy on the left. His name is gubson */}
            <div className="absolute top-[32px] right-[300px] w-1/6">
              <img src="/characters/fish-1.png" alt="Fish named Gubson" className="w-full h-full object-cover select-none" />
            </div>
          </div>

          <div className="absolute bottom-0 lg:bottom-[160px] flex items-end lg:block left-0 w-full h-full lg:animate-cloud-float-right pointer-events-none">
            <img
              src="/backgrounds/bottom-cloud.png"
              alt=""
              className="select-none"
              style={{
                transform: `translateY(${-scrollY / 5}px)`
              }}
            />
          </div>
 
          <div className="absolute -bottom-[50px] left-0 w-full h-[120px] pointer-events-none">
            <img
              src="/decorative/vines.png"
              alt=""
              className="w-full h-full object-cover object-top select-none"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 pb-24 z-10 h-full pt-16 lg:pt-0 lg:h-auto">
            <div className="flex flex-col gap-4 w-full lg:w-[648px]">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <img 
                    src="/decorative/hack-club-flag.png" 
                    alt="Hack Club" 
                    className="w-[151px] h-[53px] object-cover transform rotate-[-4.8deg] select-none"
                  />
                </div>
                
                <div className="transform rotate-[-2.97deg]">
                  <h1 
                    className="text-[#fcf5ed] text-[80px] md:text-[120px] lg:text-[150px] font-normal leading-none mb-4 font-dream-planner"
                    style={{ 
                      textShadow: "5px 8px 0px rgba(0,0,0,0.25)"
                    }}
                  >
                    CAMPFIRE
                  </h1>
                </div>

                <div className="pl-4">
                  <p 
                    className="text-white text-4xl font-bold mb-2 font-ember-and-fire"
                    style={{ 
                      textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                    }}
                  >
                    Game jam for high schoolers in 200+ cities
                  </p>
                  <p 
                    className="text-white text-4xl font-bold font-ember-and-fire"
                    style={{ 
                      textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                    }}
                  >
                    Feb 7-8, 2026
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-2">
                <div 
                  className={clsx(
                    "bg-[#f9e2ca] border-4 border-[#d5a16c] rounded-[20px] px-4 md:px-8 py-4 flex items-center gap-3 md:gap-6 w-full transform rotate-[-1.2deg] shadow-[0_8px_20px_rgba(0,0,0,0.25)]",
                    "transition-transform hover:scale-105"
                  )}
                >
                  <img src="/icons/email.svg" alt="" className="w-6 h-5 flex-shrink-0 select-none" />
                  <input
                    required
                    ref={emailRef}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    className="text-[#854d16] text-2xl md:text-4xl font-bold truncate bg-transparent border-none outline-none flex-1 cursor-text font-ember-and-fire"
                    placeholder="you@hackclub.com"
                    defaultValue="you@hackclub.com"
                  />
                </div>
                
                <button 
                  className="bg-[#fca147] border-[5px] border-[rgba(0,0,0,0.2)] rounded-[20px] px-8 md:px-14 py-4 hover:scale-105 transition-transform w-full md:w-auto transform rotate-[1.5deg] shadow-[0_8px_20px_rgba(0,0,0,0.25)] cursor-pointer active:scale-95"
                  type="button"
                  onClick={() => {
                    if (!emailRef?.current?.reportValidity() || !email)
                      return;

                    window.open(
                      `https://forms.hackclub.com/t/a3QSt8MuvHus?email=${encodeURIComponent(email)}`,
                      "_blank"
                    );
                  }}  
                >
                  <p 
                    className="text-[#8d3f34] text-3xl md:text-5xl font-normal font-dream-planner"
                  >
                   ORGANIZE!
                  </p>
                </button>
              </div>
            </div>

            <div className="relative w-full lg:w-auto">
              <div className="flex items-center justify-center gap-3 mb-4 2xl:mb-8">
                <p 
                  className="text-white text-4xl 2xl:text-6xl md:text-4xl font-bold font-ember-and-fire"
                  style={{ 
                    textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                  }}
                >
                  watch the video
                </p>

                <img 
                  src="/ui/arrow.png" 
                  alt="" 
                  className="w-[45px] md:w-[55px] h-[33px] md:h-[41px] translate-y-6 rotate-[6.2deg] z-50 select-none"
                />
              </div>

              <div className="relative transform rotate-[1.7deg] transition-transform hover:scale-105">
                <iframe
                  width="442"
                  height="249"
                  src="https://www.youtube.com/embed/yVgqQQ5xYJo?si=1PngS7-FtsjCfAGy" 
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-[180px] lg:h-[250px] w-auto lg:w-full lg:max-w-[442px] aspect-video rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,0.25)] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <img
            src="/backgrounds/landing-grass.png"
            alt=""
            className="w-full h-full object-cover select-none"
            style={{
              transform: `translateY(${scrollY / 10}px)`
            }}
          />
        </div>
      </div>

      <section className="relative pt-[13vw] pb-96 bg-[url(/backgrounds/underwater-gradient.png)] bg-cover">
        <div className="absolute top-0 left-0 w-screen h-[200px] bg-gradient-to-b from-[#004b2a] to-transparent pointer-events-none"></div>
        <div className="absolute top-[30px] left-0 w-full scale-125 pointer-events-none z-50">
          <img src="/decorative/vines.png" alt="" className="w-full h-full object-cover select-none" />
        </div>

        <div className="absolute bottom-[500px] left-0 w-full h-[800px] z-0 pointer-events-none">
          <img src="/decorative/clouds-3.png" alt="" className="w-full h-full object-cover select-none" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-[613px] z-0 pointer-events-none">
          <img src="/backgrounds/seafloor.png" alt="" className="w-full h-full object-cover select-none" />
        </div>
        
        <div className="absolute bottom-[400px] left-32 w-[569px] h-[676px] pointer-events-none">
          <img 
            src="/characters/astronaut.png" 
            alt="" 
            className="w-full h-full object-cover transform rotate-[172deg] scale-y-[-1] select-none"
          />
        </div>
        
        <div className="absolute top-[0px] z-45 right-0 w-[150px] lg:w-[352px] pointer-events-none">
          <img
            src="/decorative/cogs-top-right.png" alt=""
            className="w-full h-full object-contain select-none"
          />
        </div>

        <div className="absolute invisible lg:visible top-[55%] z-45 left-0 w-[260px] pointer-events-none">
          <img src="/decorative/cogs-mid-left.png" alt="" className="w-full h-full object-contain select-none" />
        </div>
        
        <div className="absolute invisible lg:visible top-[75%] z-45 right-0 translate-x-20 w-[280px] pointer-events-none">
          <img src="/decorative/single-cog-1.png" alt="" className="w-full h-full object-contain select-none" />
        </div>

        <div className="absolute invisible lg:visible top-[82%] z-45 left-0 translate-x-10 w-[280px] pointer-events-none">
          <img src="/decorative/single-cog-2.png" alt="" className="w-full h-full object-contain select-none" />
        </div>

        <div id="steps" className="relative z-40 flex flex-col gap-24 items-center px-12 max-w-7xl mx-auto pt-12 lg:pt-0">
          <Step 
            stepNumber={1}
            imageSrc="/ui/step-signup.jpeg"
            imageAlt="Step 1"
          >
            Sign up for a <span className="font-bold text-[#F77034]">Campfire</span><br /> near you
          </Step>

          <Step 
            stepNumber={2}
            imageSrc="/ui/step-team.png"
            imageAlt="Step 2"
            isReversed={true}
          >
            Grab <span className="font-bold text-[#F77034]">friends</span> (or make new friends!) and form a <span className="text-[#F77034] font-bold">team of 2-3</span>
          </Step>

          <Step 
            stepNumber={3}
            imageSrc="/ui/step-workshops.jpeg"
            imageAlt="Step 3"
          >
            Learn from <span className="text-[#F77034] font-bold">workshops</span>, enjoy free food and merch!
          </Step>

          <Step 
            stepNumber={4}
            imageSrc="/ui/step-build.jpeg"
            imageAlt="Step 4"
            isReversed={true}
          >
            <span className="text-[#F77034] font-bold">Build</span> your game & <span className="text-[#F77034] font-bold">publish</span> it online!
          </Step>
        </div>
      </section>

      <section className="relative h-full lg:h-[800px] pb-8 px-8 z-30 -mt-96">
        <div className="absolute top-0 left-0 w-full h-full from-transparent to-[#022994] bg-gradient-to-b pointer-events-none">
          <img src="/decorative/clouds-3.png" alt="" className="w-full h-full object-cover select-none" />
        </div>

        <div id="letter" className="relative w-full h-full z-50 translate-y-20 lg:translate-y-64 flex justify-center">
          <img src='/backgrounds/world-map-left.png' alt='' className='h-full hidden lg:block' />
          <div className='flex items-center lg:block lg:relative'>
            <img src='/backgrounds/world-map-right.png' alt='' className='h-full hidden lg:block' />
            <div className='lg:absolute lg:top-0 lg:left-0 pt-16 pb-16 lg:pb-0 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.25)] lg:rounded-none lg:shadow-none lg:pt-30 pl-6 lg:pl-12 pr-6 lg:pr-64 text-xl bg-[#EAD6BE] border-[#DCA87E] border-4 lg:border-0 lg:bg-transparent lg:text-2xl flex flex-col gap-6 font-solway'>
              <h1>Dear Hackers, Musicians, and Artists,</h1>
              <p>
                Welcome to Hack Club's newest adventure. This winter we invite you to join us for Campfire, the world's biggest Game Jam happening simultaneously in 100 cities.
              </p>

              <p><b>Hack Club wants you to make a game this winter.</b></p>

              <p>
                Don't consider yourself a game dev? No problem - we have tons of online and in-person workshops for you to make your first game!
              </p>

              <p>
                This winter, we invite you to learn something new, make something you're really proud of, meet new friends, and go on an incredible adventure together.
              </p>

              <p>
                With love, <br />
                The Campfire Team
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#384fbc] bg-cover bg-center z-20 pt-90 lg:pt-130 pb-60 bg-[url(/backgrounds/blue-gradient.png)]">
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <img
            src="/decorative/clouds-1.png"
            alt=""
            className="w-full h-full object-contain select-none"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-[80vw] pointer-events-none">
          <img 
            src="/decorative/moon-composite.png" 
            alt="" 
            className="w-full h-full object-contain transform rotate-[346deg] select-none"
          />
        </div>

        <div className="absolute bottom-[64px] translate-y-full scale-105 left-0 w-full pointer-events-none">
          <img
            src="/decorative/puzzle-composite.png"
            alt=""
            className="w-full h-full object-cover select-none"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-12 items-center lg:px-24 w-full lg:w-auto lg:max-w-7xl mx-auto -translate-y-56">
          <h2
            id="previous-events"
            className="text-[#d7cfeb] text-6xl font-bold text-center mb-8 font-ember-and-fire"
            style={{ 
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
            }}
          >
            Stories from past events
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 justify-between w-full items-center">
            <StoryCard 
              imageSrc="/stories/counterspell.jpg"
              imageAlt=""
              titleImageSrc="/branding/logo-counterspell.png"
              titleImageAlt="Counterspell logo"
              description="Our first worldwide game jam! In 50 cities including Toronto, Boston, & Singapore"
              videoButtonText='Watch the video'
              videoUrl="https://www.youtube.com/watch?v=H5RPsCMl3uM"
              btnColorPair={["#FF4186", "#41DDFF"]}
            />

            <StoryCard 
              imageSrc="/stories/scrapyard.png"
              imageAlt=""
              titleImageSrc="/branding/logo-scrapyard.svg"
              titleImageAlt="Scrapyard logo"
              description="Build stupid stuff, get stupid prizes! In-person hackathon in 70+ cities."
              videoButtonText='Check out vid!'
              videoUrl="https://www.youtube.com/watch?v=8iM1W8kXrQA"
              btnColorPair={["#AF8D67", "#956F43"]}
            />

            <StoryCard 
              imageSrc="/stories/daydream.jpg"
              imageAlt=""
              titleImageSrc="/branding/logo-daydream.png"
              titleImageAlt="Daydream logo"
              description="Game jam in 100 cities worldwide -- from London to NYC to Penang!"
              videoButtonText='Video here!'
              videoUrl="https://www.youtube.com/watch?v=vvdoW2gh9YU"
              btnColorPair={["#3F709A", "#FFFDCB"]}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#384fbc] pt-[25vw] z-10">
        <div className="flex flex-col gap-8 items-center px-8 max-w-7xl mx-auto">
          <h2 
            className="text-[#f1ebff] text-6xl font-bold text-center mb-8 font-ember-and-fire"
            style={{ 
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
            }}
          >
            Favorite games from past events
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-5 w-full justify-between">
            <GameCard 
              imageSrc="/games/office-click-clack.png"
              imageAlt="Office Click Clack"
              title="Office Click Clack"
              author="bunnyguy - Daydream DFW"
              href="https://theavgeekbee.itch.io/office-click-clack"
            />

            <GameCard 
              imageSrc="/games/zero-sum.png"
              imageAlt="Zero Sum"
              title="Zero Sum"
              author="ARandomPsi - Daydream SV"
              href="https://arandompsi.itch.io/zero-sum"
            />

            <GameCard 
              imageSrc="/games/macuahuitl.png"
              imageAlt="Macuahuitl"
              title="Macuahuitl"
              author="scoopish - Daydream Global"
              href="https://scoopish.itch.io/macuahuitl"
            />
          </div>
        </div>

        <div className="scale-105 left-0 w-full pointer-events-none">
          <img
            src="/decorative/puzzle-cloud-bottom.png"
            alt=""
            className="w-full h-full object-cover select-none"
          />
        </div>
      </section>

      <section className="relative pb-64 bg-[#081F8B]">
        <div className="absolute w-full h-full z-10 pointer-events-none">
          <img 
            src="/decorative/speech-bubble-bg.png" 
            alt=""
            className="w-full h-full select-none pointer-events-none"
          />
        </div>

        <div className="relative z-10 lg:px-32">
          <h2
            id="faq"
            className="text-[#d7cfeb] text-[128px] font-bold text-center mb-16 font-ember-and-fire"
            style={{ 
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
            }}
          >
            FAQ
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
            <div className="relative">
              <div className="absolute inset-0 lg:w-[608px] pointer-events-none flex flex-col min-h-[105%]">
                <img src="/ui/woodboard-1-top.svg" alt="" className="w-full flex-shrink-0 select-none" />
                <div className="bg-[#AD684F] flex-1 w-full py-4"></div>
                <img src="/ui/woodboard-1-bottom.svg" alt="" className="w-full flex-shrink-0 select-none" />
              </div>
              
              <div className="relative z-10 flex flex-col gap-10 items-center lg:px-16 pt-8 w-[90%] lg:w-[608px]">
                <p 
                  className="text-[#d7cfeb] text-6xl font-bold text-center mb-4 font-ember-and-fire"
                  style={{ 
                    textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                  }}
                >
                  Participant
                </p>
                
                <FaqQuestion question="What is a game jam?">
                  A game jam is an event where you build a game from scratch in a short time period! It's all about creativity, teamwork, and having fun while learning new skills.
                </FaqQuestion>
                <FaqQuestion question="Am I eligible?">
                  If you're a high schooler (or younger), you're eligible! No prior experience required - just bring your enthusiasm and willingness to learn.
                </FaqQuestion>
                <FaqQuestion question="But I've never hacked before!">
                  Perfect! Game jams are designed for beginners. You'll have workshops, mentors, and teammates to help you every step of the way.
                </FaqQuestion>
                <FaqQuestion question="All this, for free?">
                  Yes! Everything is completely free - venue, food, swag, workshops, and prizes. Hack Club covers all costs so you can focus on creating.
                </FaqQuestion>
                <FaqQuestion question="What do I need to bring?">
                  Just bring yourself, a laptop, charger, and any personal items you need. We'll provide food, drinks, and everything else!
                </FaqQuestion>
                <FaqButton content="Check out the parent guide" />
              </div>
            </div>

            <div className="relative w-full lg:w-auto">
              <div className="absolute inset-0 lg:w-[608px] pointer-events-none flex flex-col min-h-[105%]">
                <img src="/ui/woodboard-2-top.svg" alt="" className="w-full flex-shrink-0 select-none" />
                <div className="bg-[#AD684F] flex-1 w-full"></div>
                <img src="/ui/woodboard-2-bottom.svg" alt="" className="w-full flex-shrink-0 select-none" />
              </div>
              
              <div className="relative z-10 flex flex-col gap-10 items-center px-16 pt-9 w-full lg:w-[608px]">
                <p 
                  className="text-[#d7cfeb] text-6xl font-bold text-center mb-4 font-ember-and-fire"
                  style={{ 
                    textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                  }}
                >
                  Organizer
                </p>
                
                <FaqQuestion question="Can I organize a Campfire in my city?">
                  Absolutely! We're always looking for passionate organizers. If you're ready to bring the magic of game development to your community, we'd love to help.
                </FaqQuestion>
                <FaqQuestion question="What are the steps to organizing?">
                  First, apply through our organizer form. Then we'll guide you through venue booking, team building, workshop planning, and day-of coordination.
                </FaqQuestion>
                <FaqQuestion question="Do we get funding?">
                  Yes! Hack Club provides funding for venue, food, swag, and other event costs. We want to remove financial barriers for amazing events.
                </FaqQuestion>
                <FaqQuestion question="Do we get volunteer hours?">
                  Many schools accept organizing hours as community service. Check with your school's requirements - we can provide documentation.
                </FaqQuestion>
                <FaqQuestion question="Can I join an organizing team?">
                  Of course! Many cities have organizing teams. Reach out to organizers in your area or apply to join an existing team.
                </FaqQuestion>
                <FaqButton content="Apply to be an organizer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-0 -mt-80">
        <img
          src="/backgrounds/footer-background.png"
          alt=""
          className="w-full select-none"
        />

        <div className="relative w-full h-[190px] bg-[#0f371d] -mt-3 flex flex-col items-center justify-center gap-6 z-10">
          <p 
            className="text-white text-4xl lg:text-5xl text-center font-bold font-ember-and-fire"
            style={{ 
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
            }}
          >
            made with ♥ by Hack Club teens
          </p>

          <div className="flex items-center gap-4 text-white text-2xl lg:text-3xl font-ember-and-fire font-bold z-20">
            <a href="https://hackclub.com/" target="_blank" className="hover:underline">Hack Club</a>
            <span>•</span>
            <a href="https://hackclub.com/slack" target="_blank" className="hover:underline">Slack</a>
            <span>•</span>
            <a href="https://hackclub.com/clubs" target="_blank" className="hover:underline">Clubs</a>
            <span>•</span>
            <a href="https://hackclub.com/hackathons" target="_blank" className="hover:underline">Hackathons</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
