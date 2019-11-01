import React, {Component} from 'react'

export default class HeaderButtons extends Component {
    render() {
        const {hidden,onSubmit,titleInput,descriptionInput,title,description} = this.props;
        return (
            <div className="content-area_main-twitArea-btnArea">
                <input  value={title} ref="titleRef" onChange={titleInput} hidden={hidden} name="title"
                       className="content-area_main-twitArea-btnArea-titleInput"
                />
                <input value={description} ref="descriptionRef" hidden={hidden} onChange={descriptionInput}
                       name="description"
                       className="content-area_main-twitArea-btnArea-titleInput"
                />
                <button onClick={onSubmit} hidden={hidden}
                        className="content-area_main-twitArea-btnArea-btnSubmit">Submit
                </button>
            </div>
        )
    }
}