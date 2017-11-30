import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'

const post = {
  image: 'https://aloveroftheroad.files.wordpress.com/2016/07/unusual-weekend04.jpg',
  tag: 'Adventures',
  title: 'Unusual weekends',
  comments: 12,
  published: '29 Nov 2017'
}

const Index = () => {
  return (
    <div>
      <Header title="Bristou" subtitle="Theme" />
      <Jumbotron {...post } />
      Hola!
    </div>
  )
}

export default Index

// Node
// const React = require('react')
// module.exports Index
