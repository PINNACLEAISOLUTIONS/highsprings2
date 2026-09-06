export const ClinicLogoEmblem = () => (
  <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
    <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#0f2752] to-[#08152e] border border-sky-400/60 shadow-md flex items-center justify-center p-1 sm:p-1.5">
      <svg className="w-full h-full filter drop-shadow-[0_2px_6px_rgba(56,189,248,0.4)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="careStarGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284c7" />
            <stop offset="0.5" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        {/* Stylized Care Star */}
        <path
          d="M50 12L61 35L86 38L67 56L72 81L50 69L28 81L33 56L14 38L39 35L50 12Z"
          fill="url(#careStarGrad)"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Caring Child Hand Silhouette */}
        <path
          d="M50 42C48 42 46.5 43.5 46.5 45.5V56C45 54.5 43 54.5 42 56C41 57.5 42 59.5 44 61.5L48 66C49.5 68 51.5 69 54 69C58 69 60.5 65.5 60.5 61.5V47.5C60.5 45.5 59 44 57 44C55.5 44 54.5 45 54 46V45.5C54 43.5 52.5 42 50.5 42H50Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  </div>
)

export default ClinicLogoEmblem
