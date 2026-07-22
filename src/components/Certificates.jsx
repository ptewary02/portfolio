const certificates = [
  {
    company: "Google",
    image: "/assets/certificates/Google1.jpg",
    url: "https://www.coursera.org/account/accomplishments/verify/BI6S0UVBA5DE",
  },
  {
    company: "JPMorganChase",
    image: "/assets/certificates/JPMorganChase1.jpg",
    url: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_6903ba1c0577c96de00ad7b8_1784195713252_completion_certificate.pdf",
  },
  {
    company: "Udacity",
    image: "/assets/certificates/Udacity2.jpg",
    url: "https://www.udacity.com/certificate/e/c00cedec-54ca-11f1-ae34-c70644b76ce3",
  },
  {
    company: "AlgoUniversity",
    image: "/assets/certificates/AlgoUniversity1.png",
    url: "https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/graph_camp/pravesh-tewary.png",
  },
  {
    company: "Udacity",
    image: "/assets/certificates/Udacity1.jpg",
    url: "https://www.udacity.com/certificate/e/bdb69662-58bf-11f1-93ee-df24f3a0fd03",
  },
]

export default function Certificates() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap border-t border-outline-variant dark:border-outline overflow-hidden mr-10 ml-10"
      id="certificates"
    >
      <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-primary mb-12 px-gutter">
        Certificates
      </h2>

      <div className="relative w-full overflow-hidden group">
        <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
          
          {[...certificates, ...certificates, ...certificates].map((cert, i) => (
            <a
              key={`${cert.company}-${i}`}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 w-64 bg-surface-light dark:bg-surface-container-high border border-outline-variant dark:border-outline rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="h-40 bg-surface-container dark:bg-surface-container-low flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={`${cert.company} certificate`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-bold text-on-surface dark:text-on-surface">
                  {cert.company}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}