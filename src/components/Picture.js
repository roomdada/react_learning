import React from 'react'

export default class Picture extends React.Component {
 constructor(props) {
    super(props)
    this.state = {timer: null}
  }

 componentDidMount() {
  this.setState({ timer: setInterval(() => {
     console.log('Timer is called')
  }, 1000) })

    console.log('Le composant image est monté');
  }

 componentWillUnmount() {
    clearInterval(this.state.timer)// pour arreter le timer
    console.log('Le composant image est démonté');
  }

  componentDidUpdate() {
    console.log('Le composant image est mis à jour');
  }

  render() {
    return (
        <img src='img.jpg' alt='image1' className='w-64 h-64'/>
    )
  }
}
