import SectionCard from './SectionCard';

export default function Education() {
  return (
    <section className="border-t border-outline-variant dark:border-outline md:py-section-gap-mobile mx-2 sm:mx-4 md:mx-8" id='education'>
      <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-primary mb-12">
        Education
      </h2>

      <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] gap-x-4 sm:gap-x-8 gap-y-10">

        {/* Gradient connector line — spans both rows, sits in the icon column */}
        <div
          className="row-start-1 row-span-2 col-start-1 justify-self-center w-1 rounded-full"
          style={{
            background: 'linear-gradient(180deg, #4285F4 0%, #34A853 33%, #FBBC05 66%, #EA4335 100%)'
          }}
        />

        {/* Row 1: MMMUT */}
        <div className="row-start-1 col-start-1 relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-surface-container-high shadow-md flex items-center justify-center shrink-0 overflow-hidden">
          <img src={`${import.meta.env.BASE_URL}assets/MMMUT_logo.png`} alt="MMMUT logo" className="w-20 h-20 object-contain" />
        </div>
        <div className="row-start-1 col-start-2 space-y-0">
          <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-primary">
            Madan Mohan Malaviya University of Technology, Gorakhpur
          </h3>
          <p className="font-body-md text-body-md font-bold text-on-surface dark:text-inverse-primary">
            B.Tech in Electrical Engineering
          </p>
          <p className="text-on-surface-variant dark:text-outline-variant font-label-caps text-label-caps">
            FINAL YEAR
          </p>
          <p className="text-on-surface-variant dark:text-outline-variant font-label-caps text-label-caps">
            2023-2027
          </p>
        </div>

        {/* Row 2: Hallmark World School */}
        <div className="row-start-2 col-start-1 relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-surface-container-high shadow-md flex items-center justify-center shrink-0 overflow-hidden">
          <img src={`${import.meta.env.BASE_URL}assets/HWS_logo.png`} alt="Hallmark World School logo" className="w-20 h-20 object-contain" />
        </div>
        <div className="row-start-2 col-start-2 space-y-0">
          <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-primary">
            Hallmark World School, Gorakhpur
          </h3>
          <p className="font-body-md text-body-md font-bold text-on-surface dark:text-inverse-primary">
            Intermediate
          </p>
          <p className="text-on-surface-variant dark:text-outline-variant font-label-caps text-label-caps">
            PCM
          </p>
          <p className="text-on-surface-variant dark:text-outline-variant font-label-caps text-label-caps">
            2022-2023
          </p>
        </div>

      </div>
    </section>
  )
}