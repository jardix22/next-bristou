import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Event from '../components/Event'
const post = {
  image: 'https://aloveroftheroad.files.wordpress.com/2016/07/unusual-weekend04.jpg',
  tag: 'Adventures',
  title: 'Unusual weekends',
  comments: 12,
  published: '29 Nov 2017'
}

const event = {
  image: 'http://thefederalist.com/wp-content/uploads/2015/07/shutterstock_121722655-998x663.jpg',
  tag: 'lifestyle',
  title: 'Snap stories life',
  comments: 12,
  published: '29 nov 2017',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
  callToAccion: 'http://google.com'
}

const Index = () => {
  return (
    <div>
      <Header title="Bristou" subtitle="Theme" />
      <Jumbotron {...post } />
      <Event {...event} />
      Hola!
    </div>
  )
}

export default Index

// Node
// const React = require('react')
// module.exports Index
