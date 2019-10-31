import React, {Component} from 'react'
import '../../scss/сontent/content.scss'

export default class Content extends Component {
    state = {
        listOfMessage: [],
        hidden: false,
        title: "",
        description: "",
        index: 1
    };

    onClick = () => {
        this.setState(
            {
                hidden: true,
            });
    };

    titleInput = (event) => {
        let title = event.target.value;
        this.setState({
            title
        })
    };

    descriptionInput = ({target: {value: description}}) => {
        //let description=event.target.value;
        console.log(description);
        this.setState({
            description
        })
    };

    deletePost = (index) => {
        const {listOfMessage} = this.state;
        listOfMessage.splice(index, 1)
        this.setState({
            listOfMessage
        })
    };

    onSubmit = (event) => {
        const {listOfMessage, title, description} = this.state;

        let obj = {
            title,
            description
        };
        listOfMessage.push(obj);
        this.setState({
            title: "",
            description: "",
            hidden: false,
            listOfMessage,
        });
        event.preventDefault();
    };

    render() {
        const {hidden, title, description, listOfMessage} = this.state;
        return (
            <main className="content-area">
                <div className="content-area_main">
                    <div className="content-area_main-twitArea">
                        <div className="content-area_main-twitArea-textArea">
                            <p className="content-area_main-twitArea-textArea-txt">All tips</p>
                        </div>
                        <div className="content-area_main-twitArea-btnArea">
                            <input value={title} onChange={this.titleInput} hidden={!hidden} name="title"
                                   className="content-area_main-twitArea-btnArea-titleInput"/>
                            <input value={description} hidden={!hidden} onChange={this.descriptionInput}
                                   name="description"
                                   className="content-area_main-twitArea-btnArea-titleInput"/>
                            <button onClick={this.onSubmit} hidden={!hidden}
                                    className="content-area_main-twitArea-btnArea-btnSubmit">Submit
                            </button>
                        </div>
                        <div className="content-area_main-twitArea-btn">
                            <button id="hiddenId4"
                                    className={!hidden ? "content-area_main-twitArea-btnArea-btn" : "content-area_main-twitArea-btnArea-btn_hidden"}
                                    onClick={this.onClick}>
                                Add tips
                            </button>
                        </div>
                    </div>
                    <div className="content-area_main-twitShowArea">
                        <div className="content-area_main-twitShowArea-second">
                            <div className="content-area_main-twitShowArea-second_block1">
                                <div className="content-area_main-twitShowArea-second_block1-titleMessage">
                                    Title
                                </div>
                                <div className="content-area_main-twitShowArea-second_block1-message">
                                    {listOfMessage.map((obj) =>
                                        <div className="content-area_main-twitShowArea-second_block1-message-title">
                                            {obj.title}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="content-area_main-twitShowArea-second_block2">
                                <div className="content-area_main-twitShowArea-second_block2-descriptionMessage">
                                    Description
                                </div>
                                <div className="content-area_main-twitShowArea-second_block2-message">
                                    {listOfMessage.map((obj) =>
                                        <div
                                            className="content-area_main-twitShowArea-second_block2-message-description">
                                            {obj.description}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="content-area_main-twitShowArea-second_block3">
                                <div className="content-area_main-twitShowArea-second_block3-actionMessage">
                                    Action
                                </div>
                                <div className="content-area_main-twitShowArea-second_block3-action">
                                    {listOfMessage.map((index) =>
                                        <div className="content-area_main-twitShowArea-second_block2-message-buttons">
                                            <button onClick={() => this.deletePost(index)}>
                                                Delete
                                            </button>
                                            <button>
                                                Edit
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}