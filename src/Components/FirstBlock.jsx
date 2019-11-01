import React, {Component} from 'react'

export default class FirstBlock extends Component {
    render() {
        const {list,isDone} = this.props;
        return (
            <div className="content-area_main-twitShowArea-second_block1">
                <div className="content-area_main-twitShowArea-second_block1-titleMessage">
                    Title
                </div>
                <div className="content-area_main-twitShowArea-second_block1-message">
                    {list.map(({title, done},index) =>
                        <div className={done ? "content-area_main-twitShowArea-second_block1-message-title_done" : "content-area_main-twitShowArea-second_block1-message-title"} onClick={()=>isDone(index)}>
                            {title}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

