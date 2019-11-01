import React, {Component} from 'react'
import './content.scss'
import HeaderButtons from '../HeaderButtons'
import FirstBlock from '../FirstBlock'
import SecondBlock from '../SecondBlock'
import ThirdBlock from '../ThirdBlock'

export default class Content extends Component {
    state = {
        listOfMessage: [],
        hidden: true,
        title:'',
        description:'',
        editing:false,
        selectedIndex: null,
    };
    isDone=(index)=>{
        const {listOfMessage}=this.state;

        listOfMessage[index].done = !listOfMessage[index].done;

        this.setState({
            listOfMessage: listOfMessage,
        });


    };
    onClick = () => {
        this.setState(
            {
                hidden: false,
            });
    };


    deletePost = (index) => {
        const {listOfMessage} = this.state;
        listOfMessage.splice(index, 1);
        this.setState({
            listOfMessage
        })
    };

    titleInput = (event) => {
        let title = event.target.value;
        this.setState({
            title
        })
    };

    descriptionInput = (event) => {
        let description=event.target.value;
        this.setState({
            description
        })
    };

    onSubmit = (event) => {
        const {listOfMessage, title, description} = this.state;

        let obj = {
            title,
            description,
            done:false
        };
        if ( title !== '' && description !== '' ) {
            listOfMessage.push(obj);
        } else alert('Fill all fields ПЛЕАЗЕ');

        this.setState({
            hidden: false,
            listOfMessage,
        });
        event.preventDefault();
    };
    editPost=(index)=>{
        const {listOfMessage}=this.state;
        const message=listOfMessage[index];
        this.setState({
            selectedIndex:index,
            editing:true,
            title:message.title,
            description:message.description
        })
    };
    onEdit=(event)=>{
        const {selectedIndex,listOfMessage,title,description}=this.state;

        listOfMessage[selectedIndex] = {
            title,
            description
        };

        this.setState({
            listOfMessage: listOfMessage,
            editing:false,
        });

        event.preventDefault();
    };

    render() {
        const {hidden, listOfMessage,title,description,editing} = this.state;
        return (
            <main className="content-area">
                <div className="content-area_main">
                    <div className="content-area_main-twitArea">
                        <div className="content-area_main-twitArea-textArea">
                            <p className="content-area_main-twitArea-textArea-txt">All tips</p>
                        </div>
                        <HeaderButtons
                            hidden={hidden}
                            onSubmit={!editing ? this.onSubmit : this.onEdit}
                            titleInput={this.titleInput}
                            descriptionInput={this.descriptionInput}
                            title={title}
                            description={description}
                        />
                        <div className="content-area_main-twitArea-btn">
                            <button id="hiddenId4"
                                    hidden={!hidden}
                                    onClick={this.onClick}>
                                Add tips
                            </button>
                        </div>
                    </div>
                    <div className="content-area_main-twitShowArea">
                        <div className="content-area_main-twitShowArea-second">
                            <FirstBlock list={listOfMessage} isDone={this.isDone}/>
                            <SecondBlock list={listOfMessage}/>
                            <ThirdBlock list={listOfMessage} deletePost={this.deletePost} editPost={this.editPost}/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}