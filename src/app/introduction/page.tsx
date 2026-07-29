import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Introduction | AIPECA',
  description: 'Letter of Introduction and Invitation for Partnership from Akwa Ibom Pillars Empowerment Co-operative Association (AIPECA)'
};

export default function IntroductionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Hero Banner */}
      <section className="pt-24 pb-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 blob-green" />
          <div className="absolute bottom-0 left-0 w-64 h-64 blob-gold" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">Official Communication</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Letter of Introduction &amp; Invitation for Partnership
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-[rgba(254,244,230,1)]">
            Akwa Ibom Pillars Empowerment Co-operative Association (AIPECA)
          </p>
        </div>
      </section>
      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
          <span>/</span>
          <span className="text-foreground font-semibold">Introduction</span>
        </div>
      </div>
      {/* Letter Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Letter Paper */}
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">

            {/* Letter Header */}
            <div className="bg-primary/5 border-b border-border px-8 sm:px-12 py-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">From</p>
                  <p className="font-display text-lg font-bold text-primary">AIPECA</p>
                  <p className="text-sm text-muted-foreground">Akwa Ibom Pillars Empowerment Co-operative Association</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Registered With</p>
                  <p className="text-sm text-foreground font-medium leading-snug max-w-xs sm:text-right">
                    Akwa Ibom State Ministry of Humanitarian Commission &amp; Ministry of Rural Development and Co-operative Commission
                  </p>
                </div>
              </div>
            </div>

            {/* Letter Body */}
            <div className="px-8 sm:px-12 py-10 space-y-8 text-foreground leading-relaxed">

              {/* Subject */}
              <div className="border-l-4 border-accent pl-5 py-2">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Subject</p>
                <p className="font-display text-xl font-bold text-primary">
                  Letter of Introduction and Invitation for Partnership
                </p>
              </div>

              {/* Salutation */}
              <p className="text-base font-semibold text-foreground">Dear Sir,</p>

              {/* Opening Paragraph */}
              <p className="text-base text-foreground/85 leading-[1.85]">
                The members and officials of Akwa – Ibom Pillars Empowerment Co-operative association (AIPECA) write officially to introduce ourselves and to intimate you about our decision and willingness to partner with you and your organization to effect changes in the lives of the less privileged in the society. We have over 1000 other NGOS in our group.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                The scope and characteristics of our service is to contribute our quota towards enhancing the lives of the downtrodden among us.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                We are a Non-Governmental, non-Profitable organization aspiring to provide philanthropic services to the less–privileged, financially handicapped and physically challenge and incapacitated indigent citizens in our society.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                Akwa Ibom Pillars Empowerment Co-operative Association (AIPECA) is an Apex NON GOVERNMENTAL ORGANIZATION REGISTERED WITH THE AKWA IBOM STATE MINISTRY OF HUMANITARIAN COMMISSION AND AKWA IBOM STATE MINISTRY OF RURAL DEVELOPMENT AND CO-OPERATIVE COMMISSION. To offer humanitarian service in Nigeria. This group is detribalized as our membership cut across all strata of life irrespective of religious affiliation, educational attainment, political cultural and traditional background, language and gender equality.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                As the name implies, AKWA IBOM PILLARS EMPOWERMENT CO-OPERATIVE ASSOCIATION (AIPECA) stands as a pillar offering sacrificial, non-profitable, selfless services to breach the gaps identified in the course of our survey and operations.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                Wherever we work, whoever we work with, the benefits and advantages of our services transcends our immediate beneficiaries as we touch countless lives around the country.
              </p>

              {/* Unique Services */}
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <p className="text-base font-semibold text-foreground mb-4">Our services are unique largely because:</p>
                <ol className="space-y-3 list-none">
                  {[
                  { letter: 'a', text: 'We aim at sustainability.' },
                  { letter: 'b', text: 'We aim at capacity building, utilization to bring dynamic positive and impactful changes to the lives of beneficiaries that come our way; we also task them to respond positively to the changes.' },
                  { letter: 'c', text: 'We operate with integrity as our watchword and the power to initiate and execute changes.' },
                  { letter: 'd', text: 'We make our beneficiaries cohesive, passionate team leaders, and supporters in their respective field of endeavours.' },
                  { letter: 'e', text: 'We offer services that brings lasting impression to the beneficiaries in particular and the society at large.' },
                  { letter: 'f', text: 'We bring erudition and brilliance in all our undertakings.' }]?.
                  map((item) =>
                  <li key={item?.letter} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center uppercase">
                        {item?.letter}
                      </span>
                      <span className="text-base text-foreground/85 leading-[1.75] pt-0.5">{item?.text}</span>
                    </li>
                  )}
                </ol>
              </div>

              <p className="text-base text-foreground/85 leading-[1.85]">
                AKWA IBOM PILLARS EMPOWERMENT CO-OPERATIVE ASSOCIATION (AIPECA) has committed, intellectual titans, commensurate administrators who undertake their work with the efficiency and professionalism it requires.
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-border" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="flex-1 h-px bg-border" />
              </div>

              <p className="text-base text-foreground/85 leading-[1.85]">
                Sir, we believe Nigeria has the potentials of greatness, she can be great. Nigeria will be wealthy when we are healthy physically, financially and materially, that is why we partner with other organizations, individuals and groups to provide health care, medical and educational facilities and structures to the less privileged in the society.
              </p>

              {/* Pull Quote */}
              <blockquote className="relative border-l-4 border-primary pl-6 py-4 my-6">
                <p className="font-display text-xl italic text-primary leading-relaxed">
                  "AKWA IBOM PILLARS EMPOWERMENT CO-OPERATIVE ASSOCIATION (AIPECA) wields no sword but she strikes out ignorance and illiteracy with the power of education and truth."
                </p>
              </blockquote>

              <p className="text-base text-foreground/85 leading-[1.85]">
                Nigeria has danced around and wangled and immersed in poverty and lack for several decades. All efforts by successive administrations to alleviate the menace is in a sorry state as it yields little or no impacts. We also believe that this scenario should not be left on government's hands alone, else, poverty will usurp every home in few years to come. It's high time we took the Bull by the horns, take swift, sporadic actions, take concrete and result oriented steps to ameliorate this plight.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                AKWA IBOM PILLARS EMPOWERMENT CO-OPERATIVE ASSOCIATION (AIPECA) as a matter of urgency therefore solicits collaboration with pragmatic, curious, likeminded, courageous, successful, culturally oriented philanthropic individuals and groups to partner with us to kick POVERTY AND LACK out of Nigeria. We need partners with borderless generosity, tremendous compassion to give developmental interactions to the downtrodden to further our course. We need people oriented partners who will embrace these individuals with the tenderness that moves them to tears of joy. We need leaders with emotional intelligence, professional integrity and conventional wisdom to enable us reach achievable targets and realizable goals and dreams of the less privileged. Together, we can nip the menace in the bud and bring laughter and joy to the beneficiaries.
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-border" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Quotes Section */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <p className="font-display text-base italic text-foreground/80 leading-relaxed mb-3">
                    "You cannot think well, love well or sleep well if you don't dine well."
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">— Virginia Woolf</p>
                </div>
                <div className="bg-accent/5 rounded-xl p-5 border border-accent/20">
                  <p className="font-display text-base italic text-foreground/80 leading-relaxed mb-3">
                    "Laughter is brightest where there is food."
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">— Irish Proverb</p>
                </div>
              </div>

              <p className="text-base text-foreground/85 leading-[1.85]">
                It is an axiomatic fact that when someone needs a shoulder to cry on, the first person that springs up in that person's mind is his BEST FRIEND. Let us make friends and be good friends to feel our impacts. This is why we earn the acronym <strong className="text-primary">"FRIENDS OF THE POOR."</strong>
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                AKWA IBOM PILLARS EMPOWERMENT CO-OPERATIVE ASSOCIATION (AIPECA) believes in illumination of spirit, minds and souls. The importance of light should not be over emphasized. Light cannot be covered, it transforms, inspires and changes things and outcomes. We believe a candle loses nothing by giving its light to another candle. Together we will illuminate their pathway.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                Over the years, AKWA IBOM PILLARS EMPOWERMENT CO-OPERATIVE ASSOCIATION (AIPECA) has become an answer to people's prayers and solution to people's problems. She has been a beacon of hope to the hopeless and a voice to the voiceless.
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-border" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Legacy Statement */}
              <div className="bg-foreground rounded-xl p-6 sm:p-8">
                <p className="text-primary-foreground/90 text-base leading-[1.9] italic font-display text-lg">
                  "We want history to record that there walked among us men, women, groups who didn't bow to the tide of fear, or acquisition of more than enough wealth, people who stood firm when it was easier to bend, a group who spoke vigorously, tenaciously and tentatively against poverty when silence could have shielded them, a group when others whispered but they roared, when others hesitated, they marched forward. A group who gave counsel in crisis and criticism in comfort."
                </p>
                <p className="text-accent font-bold text-sm uppercase tracking-widest mt-4">
                  — This is AKWA IBOM PILLARS EMPOWERMENT CO-OPERATIVE ASSOCIATION (AIPECA)
                </p>
              </div>

              <p className="text-base text-foreground/85 leading-[1.85]">
                Let us infuse in the hearts of the handicapped that even in the darkest moment, a single act of kindness can ignite hope and transform lives thereby making them look beyond today and believe that their journey could change from despair to a fresh start or new beginning. It's the compassion of strangers that most profoundly heals a broken heart.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                Join us to provide shade and shelter to shield our brothers and sisters from the heat of the day and a refuge and hiding place to our aged from the storm of the rain.
              </p>

              {/* Bob Marley & Tony Elumelu Quotes */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary rounded-xl p-5 border border-border">
                  <p className="font-display text-base italic text-foreground/80 leading-relaxed mb-3">
                    "The greatness of a man is not in how much he acquires but in his capacity, ability and character to affect the lives of others."
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">— Bob Marley</p>
                </div>
                <div className="bg-secondary rounded-xl p-5 border border-border">
                  <p className="font-display text-base italic text-foreground/80 leading-relaxed mb-3">
                    "The greatest success in life/leadership is leaving a legacy and pathway for the next generation."
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">— Tony Elumelu</p>
                </div>
              </div>

              <p className="text-base text-foreground/85 leading-[1.85]">
                We know change takes time but it's constant and sacrosanct. With you it's possible and we can leave remarkable imprints on the sands of time.
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-border" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="flex-1 h-px bg-border" />
              </div>

              <p className="text-base text-foreground/85 leading-[1.85]">
                Sir, we therefore trust with the uniqueness of our proposition, you will give due consideration to our proposal to partner with us and as appropriate contribute your ideas and furnish us with the necessary information to enable us perform.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                We thank you for the courtesy extended to us, we state here unequivocally and categorically our effectiveness in this business. We express our readiness to partner with you as our interests continue to coincide with yours.
              </p>

              <p className="text-base text-foreground/85 leading-[1.85]">
                We also look forward to a mutual working relationship as we expect you will uncompromisingly join the endless list of our satisfied partners, beneficiaries and clientele.
              </p>

              {/* Closing */}
              <div className="pt-4">
                <p className="text-base font-semibold text-foreground mb-8">Yours faithfully,</p>
                <p className="text-sm font-bold text-primary mb-6 uppercase tracking-wide">
                  For: AKWA IBOM PILLARS EMPOWERMENT CO-OPERATIVE ASSOCIATION (AIPECA)
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-t-2 border-primary pt-4">
                    <p className="font-display text-lg font-bold text-foreground">Rev (AMB.) SAM IBANGA</p>
                    <p className="text-sm font-semibold text-primary uppercase tracking-widest mt-1">President</p>
                  </div>
                  <div className="border-t-2 border-primary pt-4">
                    <p className="font-display text-lg font-bold text-foreground">Rev FRIDAY AKPAN</p>
                    <p className="text-sm font-semibold text-primary uppercase tracking-widest mt-1">Secretary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Letter Footer */}
            <div className="bg-primary/5 border-t border-border px-8 sm:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                This is an official communication from AIPECA — a registered Non-Governmental Organization in Nigeria.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-secondary-foreground transition-colors duration-200 whitespace-nowrap">

                Partner With Us
              </Link>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>);

}