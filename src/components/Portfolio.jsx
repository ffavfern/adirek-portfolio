import  { useState } from 'react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  const portfolioItems = [
    {
      _id: '1',
      title: 'ตรวจประเมินจัดตั้งองค์กร',
      description: "ตรวจประเมินจัดตั้งองค์กรรับรองสมรรถนะบุคคลฯ สถาบันคุณวุฒิวิชาชีพ องค์การมหาชน",
      date: '2023-06-01',
      type: 'Research and Publication',
      image: 'https://static.wixstatic.com/media/1615f4_e5bcb70ed9ec447baf88c235cab042b8~mv2.png/v1/fill/w_312,h_205,al_c,q_80,usm_0.66_1.00_0.01/1615f4_e5bcb70ed9ec447baf88c235cab042b8~mv2.png',
      link: '#'
    },
    {
      _id: '2',
      title: 'พัฒนาศักยภาพทางวิชาชีพครูไทย',
      description: 'การบรรยาย "การพัฒนาศักยภาพครูไทย ที่สอนภาษาจีนในประเทศไทย"',
      date: '2023-05-15',
      type: 'Competition and Awards',
      image: 'https://static.wixstatic.com/media/1615f4_2ebaf24a541d40bbbb55884ad1982b60~mv2.jpg/v1/fill/w_312,h_234,al_c,q_80,usm_0.66_1.00_0.01/1615f4_2ebaf24a541d40bbbb55884ad1982b60~mv2.jpg',
      link: '#'
    },
    {
      _id: '3',
      title: 'การเสวนาแลกเปลี่ยนความรู้และประสบการณ์',
      description: 'การเสวนาแลกเปลี่ยนความรู้และประสบการณ์การจัดการเรียนการสอนภาษาจีนสำหรับนักเรียนไทย',
      date: '2023-04-20',
      type: 'Speaker and Expert',
      image: 'https://static.wixstatic.com/media/1615f4_8ea4677774fe483e9f3460d9e8a5a51d~mv2.jpg/v1/fill/w_312,h_234,al_c,q_80,usm_0.66_1.00_0.01/1615f4_8ea4677774fe483e9f3460d9e8a5a51d~mv2.jpg',
      link: '#'
    },
    {
      _id: '4',
      title: 'การลงนามความร่วมมือทางวิชาการ',
      description: 'การลงนามความร่วมมือทางวิชาการด้านภาษาและวัฒนธรรมจีน ระหว่างสถานศึกษา องค์กรต่าง ๆ',
      date: '2023-03-10',
      type: 'Teaching and Learning',
      image: 'https://static.wixstatic.com/media/1615f4_8ced037eb24b46aab1f303b2fa40c971~mv2.jpg/v1/fill/w_312,h_207,al_c,q_80,usm_0.66_1.00_0.01/1615f4_8ced037eb24b46aab1f303b2fa40c971~mv2.jpg',
      link: '#'
    },
    {
      _id: '5',
      title: 'การลงนามความร่วมมือทางวิชาการ',
      description: 'การลงนามความร่วมมือทางวิชาการด้านภาษาและวัฒนธรรมจีน ระหว่างสถานศึกษา องค์กรต่าง ๆ',
      date: '2023-03-10',
      type: 'Teaching and Learning',
      image: 'https://static.wixstatic.com/media/1615f4_8ced037eb24b46aab1f303b2fa40c971~mv2.jpg/v1/fill/w_312,h_207,al_c,q_80,usm_0.66_1.00_0.01/1615f4_8ced037eb24b46aab1f303b2fa40c971~mv2.jpg',
      link: '#'
    },
    {
      _id: '6',
      title: 'การลงนามความร่วมมือทางวิชาการ',
      description: 'การลงนามความร่วมมือทางวิชาการด้านภาษาและวัฒนธรรมจีน ระหว่างสถานศึกษา องค์กรต่าง ๆ',
      date: '2023-03-10',
      type: 'Teaching and Learning',
      image: 'https://static.wixstatic.com/media/1615f4_8ced037eb24b46aab1f303b2fa40c971~mv2.jpg/v1/fill/w_312,h_207,al_c,q_80,usm_0.66_1.00_0.01/1615f4_8ced037eb24b46aab1f303b2fa40c971~mv2.jpg',
      link: '#'
    },
    
    // Add more items as needed
  ];

  const filteredItems = activeTab === 'All' ? portfolioItems : portfolioItems.filter(item => item.type === activeTab);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">Portfolio</h3>
        <h2 className="text-3xl font-bold mb-8">Some Of My Recent Works</h2>
        <div className="flex justify-center mb-12 space-x-4">
          {['All', 'Research and Publication', 'Competition and Awards', 'Speaker and Expert', 'Teaching and Learning'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="relative">
              <img src={item.image} alt={item.title} className="w-full h-80 object-cover rounded" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-500 text-white rounded-b">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;