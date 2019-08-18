import React from 'react';
import Webcam from "react-webcam";
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import {FacebookShareButton,TwitterShareButton,RedditShareButton} from 'react-share';
import {FacebookIcon,TwitterIcon,RedditIcon} from 'react-share';
interface IState {
  updateVideoList: any,
  player: any,
  playingURL: string
  videoList: object,
  authenticated: boolean,
  refCamera: any,
  predictionResult: any
}
/*
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}
*/
class App extends React.Component<{}, IState> {
  public constructor(props: any) {
      super(props);
      this.state = {
          player: null,
          playingURL: "",
          updateVideoList: null,
          videoList: [],
          authenticated: false,
          refCamera: React.createRef(),
          predictionResult: null
      }
      this.authenticate = this.authenticate.bind(this)
  }
public render() {

const { authenticated } = this.state

return (<div>

    <div>
        {(!authenticated) ?
            <div>
                <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    ref={this.state.refCamera}
                />
                <div className="row nav-row">
                    <div className="btn btn-primary bottom-button" onClick={this.authenticate}>Login</div>
                </div>
            </div>
            : ""}

          {(authenticated) ?
              <div> 
                  <Header />
                  <div style = {{display:"flex"}}>
                  <FacebookShareButton url ="https://my-blogfrontend.azurewebsites.net/" ><FacebookIcon/></FacebookShareButton>
                  <TwitterShareButton url ="https://my-blogfrontend.azurewebsites.net/"><TwitterIcon/></TwitterShareButton>
                  <RedditShareButton url = "https://my-blogfrontend.azurewebsites.net/"><RedditIcon></RedditIcon></RedditShareButton>
                  </div>
                  <MainContent />
              </div>
              : ""}

      </div>

  </div>)
}

private authenticate() {
  const screenshot = this.state.refCamera.current.getScreenshot();
  this.getFaceRecognitionResult(screenshot);
}

private getFaceRecognitionResult(image: string) {
  const url = "https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/427e79e3-e72a-406c-bc18-411f90a84e1a/classify/iterations/Iteration1/image"
  if (image === null) {
      return;
  }
  const base64 = require('base64-js');
  const base64content = image.split(";")[1].split(",")[1]
  const byteArray = base64.toByteArray(base64content);
  fetch(url, {
      body: byteArray,
      headers: {
          'cache-control': 'no-cache', 'Prediction-Key': '20eca3a19a4247fab059a58a18714e1e', 'Content-Type': 'application/octet-stream'
      },
      method: 'POST'
  })
      .then((response: any) => {
          if (!response.ok) {
              // Error State
              alert(response.statusText)
          } else {
              response.json().then((json: any) => {
                  console.log(json.predictions[0])

                  this.setState({ predictionResult: json.predictions[0] })
                  if (this.state.predictionResult.probability > 0.7) {
                      this.setState({ authenticated: true })
                  } else {
                      this.setState({ authenticated: false })
                      console.log(json.predictions[0].tagName)
                  }
              })
          }
      });
}
}


export default App;