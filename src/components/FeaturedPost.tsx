export default function FeaturedPost() {
    return (
      <section className="bg-[#7C4EE4] text-white py-20 px-6 flex flex-col md:flex-row items-center justify-center md:space-x-10">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <p className="text-sm uppercase font-semibold text-gray-200">
            Featured Post
          </p>
          <h1 className="text-4xl font-bold mt-2 leading-tight">
            How AI will <br /> Change the Future
          </h1>
          <p className="text-gray-200 mt-4 text-sm">
            The future of AI will see home robots having enhanced intelligence, 
            increased capabilities, and becoming more personal and possibly cute. 
            For example, home robots will overcome navigation, direction.
          </p>
          <button className="mt-6 bg-white text-[#7C4EE4] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Read more
          </button>
        </div>
  
        {/* Right Placeholder Box */}
        <div className="w-64 h-64 bg-gray-300 rounded-lg mt-10 md:mt-0" />
      </section>
    );
  }
  