const articles = [
  {
    title: "Sports activity at TSS makes the impact.",
    date: "June 20",
    image: "/article1.svg",
  },
  {
    title: "Students are making their future bright by themselves.",
    date: "May 20",
    image: "/article2.svg",
  },
  {
    title: "TSS giving opportunities to students.",
    date: "February 29",
    image: "/article3.svg",
  },
]

export default function ArticlesSection() {
  return (
    <section className="py-12 lg:py-20 bg-school-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-primary mb-2">ARTICLE AND BLOGS</h2>
          <p className="text-school-gray">BY STELLAR</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative h-40 md:h-48">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-school-primary mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-school-gray">{article.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
