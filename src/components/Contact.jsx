

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">Contact Me</h3>
        <h2 className="text-3xl font-bold mb-8">Got a Project? Let's Talk!</h2>
        <button className="btn btn-primary mb-8">Get A Quote</button>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-dribbble"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
