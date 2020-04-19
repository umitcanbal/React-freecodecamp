import React from "react"

class MemeGenerator extends React.Component {

  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allImages: [],
      isGenerated: false,
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then( response => response.json() )
      .then( data => {
        const {memes} = data.data
        const allImages = memes.map( (meme) => {return meme.url} )
        
        this.setState( { allImages: allImages } )
      })
  }

  handleChange = () => {
    const {name, value} = event.target

    this.setState( { [name]: value } )
  }

  handleSubmit = () => {
    event.preventDefault()

    const {allImages} = this.state
    const randomNumber = Math.floor(Math.random()*allImages.length)
    const generatedImage = this.state.allImages[randomNumber]
    this.setState( {isGenerated: true, randomImage: generatedImage} )
  }

  render() {
    const {isGenerated, randomImage, topText, bottomText} = this.state
    
    return (
      <div>
        
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange}/>
          <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange} />
          <button>Generate</button>
        </form>

        {isGenerated &&
          <div>
            <img style={{width: 300}} src={randomImage} />
            <p>{topText}</p>
            <p>{bottomText}</p>
          </div>
        }
      </div>

    )
  }
}

export default MemeGenerator