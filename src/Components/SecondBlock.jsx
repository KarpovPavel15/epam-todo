import React, {Component} from 'react'

export default class SecondBlock extends Component {
    render() {
        const {list} = this.props;
        return (
            <div className="content-area_main-twitShowArea-second_block2">
                <div className="content-area_main-twitShowArea-second_block2-descriptionMessage">
                    Description
                </div>
                <div className="content-area_main-twitShowArea-second_block2-message">
                    {list.map((obj) =>
                        <div className="content-area_main-twitShowArea-second_block2-message-description">
                            {obj.description}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
