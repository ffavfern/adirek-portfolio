

const Skills = () => {
  return (
    <section id="skillset" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">Skillset</h3>
          <h2 className="text-3xl font-bold mb-4">Creative and Professional Skills Experience on Few Area</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat fringilla lorem sed bibendum. Pellentesque venenatis, ipsum eget ullamcorper gravida in mattis ipsum ligula at tellus.
          </p>
          <button className="btn btn-primary">Get Any Project</button>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-800 font-medium">Product Design & Development</span>
              <span className="text-gray-600">67%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-blue-500 h-2 rounded" style={{ width: '67%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-800 font-medium">Web Development</span>
              <span className="text-gray-600">89%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-blue-500 h-2 rounded" style={{ width: '89%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-800 font-medium">Front-End Development</span>
              <span className="text-gray-600">55%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-blue-500 h-2 rounded" style={{ width: '55%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-800 font-medium">UI Design & UX Development</span>
              <span className="text-gray-600">67%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-blue-500 h-2 rounded" style={{ width: '67%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
