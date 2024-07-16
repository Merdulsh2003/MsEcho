import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
const Sidebar = () => {

    const [extended, setExtended] = useState(false)

    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt='' />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)}</p>
                                </div>

                            )
                        })}

                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <a href="mailto:merdulsharma2003@gmail.com">
                    <div className="bottom-item recent-entry">
                        <img src={assets.mail_icon} alt="Mail" />
                        {extended ? <p style={{ textDecoration: 'none'}}>Mail</p> : null}
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/merdul-sharma-962324292/">
                    <div className="bottom-item recent-entry">
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                        {extended ? <p>LinkedIn</p> : null}
                    </div>
                </a>
                <a href="https://github.com/Merdulsh2003">
                    <div className="bottom-item recent-entry">
                        <img src={assets.github_icon} alt="GitHub" />
                        {extended ? <p>Github</p> : null}
                    </div>
                </a>

            </div>

        </div>
    )
}

export default Sidebar
