import React from 'react'
import Particles from 'react-particles-js';

export default function Background() {
    return (
        <div>
            <Particles className="particles"
            params={{
                particles: {
                    "color": {
                        "value": "#ffffff"
                      },
                      "opacity": {
                        "value": 1,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 0.5,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                },"line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1.5
                  },
                  
            }
            }}/>
            
        </div>
    )
}
