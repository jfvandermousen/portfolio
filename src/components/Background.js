import React from 'react'
import Particles from 'react-particles-js';

export default function Background() {
    return (
        <div>
            <Particles className="particles"
            params={{
                particles: {
                    color: {
                        "value": "#ffffff"
                      },
                      opacity: {
                        "value": 0.5,
                        "random": false
                      },
                        "anim": {
                          "enable": false,
                          "speed": 2,
                          "opacity_min": 0.1,
                          "sync": false           
                },
                move: {
                  speed: 1
              },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.2,
                    "width": 1.5
                  },
                  
            }
            }}/>
            
        </div>
    )
}
