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

module.exports = {
  dummy,
  totalLikes
}
