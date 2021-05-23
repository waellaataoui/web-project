import React, { useState, useContext, useEffect } from 'react'
import Quiz from '../Quiz'
import Loader from '../Loader/'
/*import '../assets/css/sty.css'*/

const Welcome = props => {

    return  (
        <div>
        <Loader 
            loadingMsg={"Authentification ..."}
            styling={{textAlign: 'center', color: '#FFFFFF'}}
        />
        <div className="quiz-bg">
            <div className="container">
                <Quiz />
            </div>
        </div>
        </div>
    )
}

export default Welcome
