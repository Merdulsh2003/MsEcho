import React, { useContext } from 'react'
import './ChatMain.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInput(promptText);
        onSent(promptText);
    };

    return (
        <div className='main' >
            <div className="nav">
                <div className="ms-echo-container">
                    <img src={assets.MsEcho} alt="" />
                    <p className='rainbow-text'>MsEcho</p>
                </div>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello there!</span></p>
                            <p>I'm Master Merdul Sharma's assistant, here to offer you top-notch support and information <br /> How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleCardClick("Suggest beautiful places to see on an upcoming road trip")}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Briefly summarize this concept: urban planning")}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Brainstorm team bonding activities for our work retreat")}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Tell me about React js and React native")}>
                                <p>Tell me about React js and React native</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                        </>
                        : <div className="result">
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.MsEcho} alt="" />
                                {loading
                                    ? <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                    : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>
                }


                        <div className="main-bottom">
                            <div className="search-box">
                                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                                <div>
                                    {input ? <img onClick={() => onSent(input)} src={assets.send_icon} alt="" /> : null}
                                </div>
                            </div>
                            <p className="bottom-info">
                                MsEcho may display inaccurate info, including about people, so double-check its responses. Your privacy and MsEcho Apps
                            </p>
                        </div>
                    </div>
            </div>
            )
}

            export default Main
