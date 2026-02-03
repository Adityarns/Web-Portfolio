// src/Reactbits/Timeline.jsx
const Timeline = ({ experiences }) => {
  return (
    <div className="relative py-8">
      {/* Garis vertikal timeline - hanya tampil di desktop */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#3BC1A8] via-[#3BC1A8]/50 to-transparent hidden md:block"></div>

      {/* Garis vertikal timeline mobile - di kiri */}
      <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-[#3BC1A8] via-[#3BC1A8]/50 to-transparent md:hidden"></div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative mb-8 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay={index * 100}
          data-aos-once="true"
        >
          {/* DESKTOP VIEW - Card dan Foto bergantian kiri-kanan */}
          <div className="hidden md:flex items-center justify-between gap-6">
            {index % 2 === 0 ? (
              <>
                {/* KIRI - Card */}
                <div className="w-5/12">
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-[#3BC1A8]/30 rounded-lg p-6 hover:border-[#3BC1A8] transition-all duration-300 hover:shadow-lg hover:shadow-[#3BC1A8]/20 group">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#3BC1A8]/20 flex items-center justify-center flex-shrink-0  transition-all">
                        <img
                          src={exp.icon}
                          alt="Icon"
                          className="w-6 h-6 text-[#3BC1A8]"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#3BC1A8] transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-[#3BC1A8] font-semibold">
                          {exp.organization}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3 text-left">
                      {exp.period}
                    </p>
                    {exp.description && (
                      <p className="text-gray-300 text-sm leading-relaxed text-left">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* DOT tengah */}
                <div className="w-6 h-6 bg-[#3BC1A8] rounded-full border-4 border-white shadow-lg shadow-[#3BC1A8]/50 z-10 flex-shrink-0"></div>

                {/* KANAN - Foto */}
                <div className="w-5/12">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.role}
                      className="w-full h-[250px] object-cover rounded-lg shadow-lg border-2 border-[#3BC1A8]/30 hover:border-[#3BC1A8] transition-all duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-[250px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* KIRI - Foto */}
                <div className="w-5/12">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.role}
                      className="w-full h-[250px] object-cover rounded-lg shadow-lg border-2 border-[#3BC1A8]/30 hover:border-[#3BC1A8] transition-all duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-[250px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  )}
                </div>

                {/* DOT tengah */}
                <div className="w-6 h-6 bg-[#3BC1A8] rounded-full border-4 border-white shadow-lg shadow-[#3BC1A8]/50 z-10 flex-shrink-0"></div>

                {/* KANAN - Card */}
                <div className="w-5/12">
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-[#3BC1A8]/30 rounded-lg p-6 hover:border-[#3BC1A8] transition-all duration-300 hover:shadow-lg hover:shadow-[#3BC1A8]/20 group">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#3BC1A8]/20 flex items-center justify-center flex-shrink-0  transition-all">
                        <img
                          src={exp.icon}
                          alt="Icon"
                          className="w-6 h-6 text-[#3BC1A8]"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#3BC1A8] transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-[#3BC1A8] font-semibold">
                          {exp.organization}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3 text-left">
                      {exp.period}
                    </p>
                    {exp.description && (
                      <p className="text-gray-300 text-sm leading-relaxed text-left">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* MOBILE VIEW - Layout vertikal dengan dot di kiri */}
          <div className="md:hidden flex gap-4 pl-2">
            {/* DOT di kiri */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-4 h-4 bg-[#3BC1A8] rounded-full border-2 border-white shadow-lg shadow-[#3BC1A8]/50 z-10 mt-2"></div>
            </div>

            {/* Konten kanan - Card dan Foto vertikal */}
            <div className="flex-1 space-y-4">
              {/* Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#3BC1A8]/30 rounded-lg p-4 hover:border-[#3BC1A8] transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#3BC1A8]/20 flex items-center justify-center flex-shrink-0">
                    <img
                      src={exp.icon}
                      alt="Icon"
                      className="w-6 h-6 text-[#3BC1A8]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-[#3BC1A8] font-semibold text-sm">
                      {exp.organization}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mb-2">{exp.period}</p>
                {exp.description && (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>

              {/* Foto */}
              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.role}
                  className="w-full h-[200px] object-cover rounded-lg shadow-lg border-2 border-[#3BC1A8]/30"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
