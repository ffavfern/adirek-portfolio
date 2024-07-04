const EducationExperience = () => {
  const educationData = [
    {
      period: "2021 - present",
      institution: "ST THERESA INTERNATIONAL COLLEGE",
      degree: "Graduate Diploma Program in Teaching Profession",
      location: "Nakhon Nayok, Thailand",
      logo: "https://upload.wikimedia.org/wikipedia/th/0/01/St_theresa.jpg",
    },
    {
      period: "2010 - 2013",
      institution: "Beijing Languages University",
      degree: "Master of Education in Curriculum & Methodology",
      location: "Beijing, China",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hNQwWbETJ6lKQndo_FHDg3zUftB0q1_75Q&s",
    },
    {
      period: "2010 - 2012",
      institution: "Assumption University",
      degree: "Master of Arts in Chinese Teaching as a Second Language",
      location: "Bangkok, Thailand",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Assumption_University_seal.svg/1200px-Assumption_University_seal.svg.png",
    },
    {
      period: "2005 - 2009",
      institution: "Mae Fah Luang University",
      degree: "Bachelor's of Arts in Business Chinese",
      location: "Chiang Rai, Thailand",
      logo: "https://archives.mfu.ac.th/wp-content/uploads/2019/06/Mae-Fah-Luang-University-2.png",
    },
  ];

  const experienceData = [
    {
      period: "2014 - Present",
      position: "TCL Expert",
      company: "Beijing Languages University",
      responsibilities: [
        "Curriculum design and prepare volunteer teachers to perform teaching duties in Thailand.",
        "Plan a workshop and design Learning Processes.",
        "Study and research together to develop Chinese language teaching for foreigners.",
      ],
      logo: "https://static.wixstatic.com/media/8fc1f4_2d4cf37317154ec7a5c6b014d2c10609~mv2.jpg",
    },
    {
      period: "2016 - Present",
      position: "Consultant & Assessor",
      company:
        "Thailand Professional Qualification Institute (Public Organization)",
      responsibilities: [
        "Established a professional standard for Chinese language teachers in Thailand.",
        "Managed the organization to certify the vocational competence of Chinese language teachers in Thailand.",
        "Appointed to be a committee for encouraging the professional standards of Chinese language teachers in Thailand.",
        "Planned strategies and workshops to promote professional competence for Thai people.",
        "Coordinated with government and private agencies in Thailand to promote the professional competencies of Chinese language teachers in Thailand.",
      ],
      logo: "https://catalog-tpqi.data.go.th/uploads/admin/2022-12-15-045347.331807Logo2.png",
    },
    {
      period: "2019 - 2020",
      position: "General Manager",
      company: "General Manager, Central Garden Co., Ltd.",
      responsibilities: [
        "Planned and oversaw the overall management of manpower, service, budget, building new customer base and retaining existing customers.",
        "Provided advice and build a business network in the form of business partners in conjunction with the marketing team as well as promotions with various departments on various platforms.",
        "Promoted a good image for society for the organization.",
      ],
      logo: "https://static.wixstatic.com/media/1615f4_5aa54d44246a4b0685639eb5b57be192~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1614826461.png",
    },
    {
      period: "2016 - 2019",
      position:
        "Assistant Director of Office of Customer Experience Management",
      company: "Siam Gems Group",
      responsibilities: [
        "Establish managing plans and strategies for the department in accordance with the company’s missions.",
        "Design and implement the Standard Operation Procedures (S.O.P) for all business units in the group.",
        "Research and analyze customer behavior for establishing customer experience.",
        "Design and develop internal service auditing System.",
        "Develop customer satisfaction survey along with spreadsheet / database. From the spreadsheet / database, produce findings of the customer satisfaction in report / graph form.",
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd8tFHL1xMExCg-XTl5JouGN88gb3VIVxKA&s",
    },
  ];
  const skillset = [
    "Proficient in organizing strategies and plans for organizational management for sustainable development and covering budget management, finance, HR, corporate goals and missions, as well as building corporate image towards society.",
    "Proficient in management, workforce management, KPIs, monitoring, coaching and team building for common goals.",
    "Proficient in building relationships and doing business with organizations both public and private.",
    "Creating and developing training and evaluating management system for the enhancement of personnel performance in the organization.",
    "Design and develop courses and manage training according to the individual competency framework.",
    "Strategies and layout planning to support Academy Center (Make relationships with School/Colleges/University) to find out Internships, Corporate Projects and New talents.",
    "Planning and managing customer experience creation (CXM + Internal Service Audit)",
    "Determination of service standards of the organization and front desk positions (SOP).",
    "Research design on service behavior and consumer behavior for to develop and create customer experience including analyzing customer satisfaction.",
  ];

  const languages = [
    { language: "Thai", proficiency: "Native" },
    { language: "English", proficiency: "Good" },
    { language: "Chinese", proficiency: "Excellent" },
  ];

  return (
    <section id="education-experience" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Education Section */}
          <div className="lg:w-1/2 lg:pr-10">
            <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">
              Qualification
            </h3>
            <h2 className="text-3xl font-bold mb-8">My Education</h2>
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="w-16 h-16 mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold">
                      {item.institution}{" "}
                      <span className="text-gray-600">({item.period})</span>
                    </h4>
                    <p className="text-gray-600">{item.degree}</p>
                    <p className="text-gray-600">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Skillset and Languages Section */}
            <div className="flex flex-col justify-between pt-10">
              <div className="">
                <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">
                  Professional Skillset
                </h3>
                <h2 className="text-3xl font-bold mb-8">My Skills</h2>
                <ul className="list-disc pl-5">
                  {skillset.map((skill, index) => (
                    <li key={index} className="text-gray-600 mb-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-10">
                <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">
                  Languages
                </h3>
                <h2 className="text-3xl font-bold mb-8">Languages I Speak</h2>
                <ul className="list-disc pl-5">
                  {languages.map((language, index) => (
                    <li key={index} className="text-gray-600 mb-2">
                      {language.language}: {language.proficiency}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
            <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">
              Work Experience
            </h3>
            <h2 className="text-3xl font-bold mb-8">My Awesome Experience</h2>
            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-16 h-16 mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold">
                      {item.position}{" "}
                      <span className="text-gray-600">({item.period})</span>
                    </h4>
                    <p className="text-gray-600">{item.company}</p>
                    <ul className="list-disc pl-5">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-600">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
