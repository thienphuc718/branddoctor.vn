export default function(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=0')
  next()
}
