const books = [
  {
    id: '001',
    title: 'To Kill a Mockingbird',
    author: 'Harper lee'
  },
  {
    id: '002',
    title: 'Brave New World',
    author: 'Aldous Huxley'
  },
  {
    id: '003',
    title: 'Moby-Dick',
    author: 'Herman Melville'
  },
  {
    id: '004',
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  },
  {
    id: '005',
    title: '1984',
    author: 'George Orwell'
  },
  {
    id: '006',
    title: 'Purple Hibiscus',
    author: 'Chiamanmanda Adichie'
  }


]

const bookCard = books.map(book => (
  <section key={book.id} className="p-[4rem] shadow-2xl">
    <h2>{book.title}</h2>
    <p>{book.author}</p>
  </section>
))



export default function page() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"> 
      {bookCard}
      </div>
  )
}
