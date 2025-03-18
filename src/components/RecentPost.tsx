export default function RecentPosts() {
    const posts = [
      {
        category: "DEVELOPMENT",
        date: "16 March 2023",
        title: "How to make a Game look more attractive with New VR & AI Technology",
        description:
          "Google has been investing in AI for many years and bringing its benefits to individuals, businesses, and communities. Whether it’s publishing research or developing tools, we're committed to making AI accessible.",
        image: "/placeholder-image-1.jpg",
      },
      {
        category: "TRAVEL",
        date: "13 March 2023",
        title: "8 Rules Of Travelling In Sea You Need To Know",
        description:
          "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include low costs.",
        image: "/placeholder-image-2.jpg",
      },
      {
        category: "DEVELOPMENT",
        date: "11 March 2023",
        title: "How to build strong portfolio and get a Job in UI/UX",
        description:
          "Capitalize on low hanging fruit to identify a value added activity.",
        image: "/placeholder-image-3.jpg",
      },
      {
        category: "SPORTS",
        date: "10 March 2023",
        title: "How to Be a Professional Footballer in 2023",
        description: "Organically grow the holistic world view of innovation.",
        image: "/placeholder-image-4.jpg",
      },
    ];
  
    return (
      <section className="py-16 px-6">
        {/* Section Header yes*/}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Our Recent Posts</h2>
          <button className="bg-[#7C4EE4] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#5a34b7] transition">
            View All
          </button>
        </div>
  
        {/* Featured Post (Directly Displayed) */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-64 rounded-lg bg-gray-100"></div>
          </div>
  
          {/* Content */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
            <p className="text-sm text-gray-500 uppercase">
              {posts[0].category} | {posts[0].date}
            </p>
            <h3 className="text-xl font-bold mt-2">{posts[0].title}</h3>
            <p className="text-gray-600 mt-3 text-sm">{posts[0].description}</p>
            <button className="mt-4 border border-[#7C4EE4] text-[#7C4EE4] px-4 py-2 rounded-lg hover:bg-[#7C4EE4] hover:text-white transition">
              Read More
            </button>
          </div>
        </div>
  
        {/* Other Posts in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {posts.slice(1).map((post, index) => (
            <div key={index} className="">
              <div className="bg-gray-100 w-full h-48 rounded-lg">
              </div>
              <p className="text-sm text-gray-500 mt-3 uppercase">
                {post.category} | {post.date}
              </p>
              <h4 className="text-lg font-bold mt-2">{post.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <a href="#" className="text-[#7C4EE4] font-medium mt-2 block">
                Read More...
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  