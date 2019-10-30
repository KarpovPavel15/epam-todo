import React,{Component} from 'react'
import '../../scss/Content/content.scss'

export default class Content extends Component {
    render() {
        return(
            <main className="content-area">
                <div className="content-area_main">
                    <div className="content-area_main-twitArea">
                        <div className="content-area_main-twitArea-textArea">
                            <p className="content-area_main-twitArea-textArea-txt">All tips</p>
                        </div>
                        <div className="content-area_main-twitArea-btnArea">
                            <input className="content-area_main-twitArea-btnArea-titleInput" hidden/>
                            <input className="content-area_main-twitArea-btnArea-descriptionInput" hidden/>
                            <button className="content-area_main-twitArea-btnArea-btn">
                                Add tips
                            </button>
                        </div>
                    </div>
                    <div className="content-area_main-twitShowArea">
                        <div className="content-area_main-twitShowArea-second">
                            <div className="content-area_main-twitShowArea-second_block1">
1
                            </div>
                            <div className="content-area_main-twitShowArea-second_block2">
2
                            </div>
                            <div className="content-area_main-twitShowArea-second_block3">
3
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}