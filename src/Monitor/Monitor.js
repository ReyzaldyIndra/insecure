import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import {LabelModel} from './LabelModel'
import Card from 'react-bootstrap/Card'

const video = 'https://insecure-res-doc.s3.amazonaws.com/demoVideos/rekog1.mp4'

class Monitor extends Component {
    state = {
        data: LabelModel,
    }

     componentDidMount() {
        const url = 'https://5f0adadd5e512a00161c1876.mockapi.io/labels'
        
        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result,
            })
            // console.log(result)
        })

        // setInterval(() => this.setState({ time: Date.now()}), 1000)
        
    }
    render() {
        const {data} = this.state

        console.log(data.Labels)
        // console.log('data', data.Labels)
        // const items = .map((entry, index) => <li key={index}>{index}</li>)
        
        // console.log('lka', data.Labels)
        // const items = data.Labels
        // const res = items.map((i) => <li key={i}>{i.Timestamp}</li>)
        const peking =[{"Labels":
        { "Name":"Animal",
        "Count":"1"
            }},{"Labels":{"Name":"Rhino",
            "Count":"1"}}];
        console.log('peking', peking)
        const listItems = peking.map((d) => <p key={d.Labels.Name}>{d.Labels.Name}</p>)
        const count = peking.map((i) => <p key={i.Labels.Count}>{i.Labels.Count}</p>)
        // const result = label.foreach((element) => {
        //     // return <li key={index}>{entry}</li>
        //     for (let i=0; i<label.length; i++) {
        //         console.log("labels", element)
        //     }
        //     })
        return(
            <div className="wrapper">
                <div style={{display:"flex", marginLeft:"20px"}}>
                    <div style={{display:"grid", width:"65%"}}>
                        <p style={{fontWeight:"bold", fontSize:"25px"}}>Node 1</p>
                    <video width="800" controls autoPlay>
                        <source src="https://insecure-res-doc.s3.amazonaws.com/demoVideos/capture1.mp4" type="video/mp4"/>
                    </video>
                    <div style={{display:"flex", marginTop:"20px"}}>
                        <div style={{display:"grid"}}>
                            <p>Node 2</p>
                        <video width="300" controls>
                        <source src="https://insecure-res-doc.s3.amazonaws.com/demoVideos/popopo.mp4" type="video/mp4"/>
                    </video>
                        </div>
                    <div style={{display:"grid", marginLeft:"20px"}}>
                        <p>Node 3</p>
                        <video width="300" controls>
                        <source src="https://insecure-res-doc.s3.amazonaws.com/demoVideos/swawawawa.mp4" type="video/mp4"/>
                    </video>
                    </div>
                    
                    </div>
                    
                    </div>
                    
                    <div style={{ marginLeft:"30px", backgroundColor:"#d6fff7", width:"20%", height:"30%", padding:"20px", borderRadius:"8px", marginTop:"13%"}}>
                        <span style={{borderBottom:"1px solid black", width:"100%"}}>Object :</span>
                        <div style={{display:"flex", marginTop:"10px"}}>
                            <p>{listItems}</p>
                            <p style={{marginLeft:"10px", fontWeight:"bold"}}>{count}</p>
                         </div>            
                    </div>
            </div>
            </div>
            

        )
    }
}

export default Monitor