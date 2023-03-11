export default function handler(req, res) {
  const post = {
    title: 'Post #1',
    body: 'Lorem ipsum raedum',
    date: '2023-03-02'
  }
  // const message = 'This is a success json example about how to use nextjs dynamic routes and fetching.'
  res.status(200).json(post)
}
