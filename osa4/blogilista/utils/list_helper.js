const dummy = (blogs) => {
  // Lisätty toimintaa, jotta menee linttauksen läpi
  let result = blogs
  result = 1
  // Always return 1
  return result
}

const totalLikes = (blogs) => {
  // Copilotin kirjoittama koodi
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  // Copilotin kirjoittama koodi
  const favoriteBlog = blogs.reduce((prev, current) => (prev.likes > current.likes) ? prev : current)
  // Poistetaan turhat kentät
  const result = {
    title: favoriteBlog.title,
    author: favoriteBlog.author,
    likes: favoriteBlog.likes
  }
  return result
}

const 
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
