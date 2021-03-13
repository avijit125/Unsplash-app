import React from 'react'
import Images from './Images'
const Body = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h1 className="h1 text-bpld">Nature</h1>
                    <p className="lead mt-3">Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between.</p>
                    <p><small>Beautify your forms with Unsplash + Typeform</small></p>
                </div>
                <div className="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3 text-center">status</h5>
                        <hr style={{borderBottom:"1px solid gray"}}/>
                        <h5 class="card-title text-center mb-3">curator</h5>
                        <hr style={{borderBottom:"1px solid gray"}}/>
                        <h5 class="card-title text-center mb-3">Contributions</h5>
                        </div>
                        <button class="btn mt-5  bg-dark text-white">Submit to Nature</button>
                    </div>
                </div>
            </div>
            <Images/>
            
            
        </div>
    )
}

export default Body
