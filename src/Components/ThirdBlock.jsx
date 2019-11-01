import React, {Component} from 'react'

export default class ThirdBlock extends Component {
    render() {
        const {list,deletePost,editPost} = this.props;
        return (
            <div className="content-area_main-twitShowArea-second_block3">
                <div className="content-area_main-twitShowArea-second_block3-actionMessage">
                    Action
                </div>
                <div className="content-area_main-twitShowArea-second_block3-action">
                    {list.map((obj,index) =>
                        <div className="content-area_main-twitShowArea-second_block3-action-buttons">
                            <button onClick={() => deletePost(index)}>
                                Delete
                            </button>
                            <button onClick={()=>editPost(index)}>
                                Edit
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
