import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { suggetions, commentList } from "./Data";

const App = () => {
    return (
        <div>
            <nav id="navbar">
                <img src="./youtube.png" alt="youu" width="50px" />
                <div>
                    <input type="text" size="100" />
                    <input type="button" value="search" />
                </div>
                <img
                    class="style-scope yt-img-shadow"
                    alt="he"
                    height="32"
                    width="32"
                    src="https://yt3.ggpht.com/yti/ANoDKi5Qz1WE0u7r0K1eZBRs0-yp1r0vcM_BlpnfM4Gm=s88-c-k-c0x00ffffff-no-rj-mo"
                    id="avatar"
                />
            </nav>
            <div className="row">
                <div className="col-sm-8">
                    <iframe
                        width="950"
                        height="538"
                        src="https://www.youtube.com/embed/w7ejDZ8SWv8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <div className="col">
                        {commentList.map((comment, key) => (
                            <div className="row" key={key}>
                                <h6>{comment.name}</h6>
                                <span>{comment.body}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-sm-4">
                    {suggetions.map((el, key) => (
                        <div className="side" key={key}>
                            <iframe
                                width="250"
                                height="100"
                                src={el.url}
                                title={el.title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            <div className="ss">
                                <h6>{el.title} </h6>
                                <p>{el.views} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
