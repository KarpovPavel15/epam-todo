import React,{Component} from 'react'
import '../../scss/Content/content.scss'

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state={
            listOfMessage:[],
            hidden: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onClick=()=>{
        this.setState(
            {
                hidden:true,
            });
    };

    onSubmit=(event)=>{
        this.setState(
            {
                hidden:false,
            });
        event.preventDefault();
    };
    // toggleFun=(event)=>{
    //     let target=event.target;
    //     this.hideInputs(target);
    //     this.hideBtn(target);
    //     //     let id = event.target.dataset.toggleId;
    //     //     let elem = document.getElementsByClassName("content-area_main-twitArea-btnArea-btn");
    //     //     elem.addEventListener('click',(event)=>{
    //     //
    //     //         let elem2 = document.getElementById(id);
    //     //
    //     //         elem2.hidden = !elem2.hidden;
    //     //     });
    // };

    render() {
        const { hidden } = this.state;
        return(
            <main className="content-area">
                <div className="content-area_main">
                    <div className="content-area_main-twitArea">
                        <div className="content-area_main-twitArea-textArea">
                            <p className="content-area_main-twitArea-textArea-txt">All tips</p>
                        </div>
                        <form className="content-area_main-twitArea-btnArea">
                            <input name="title" className={!hidden ? "content-area_main-twitArea-input_hidden" : "content-area_main-twitArea-btnArea-titleInput"}/>
                            <input name="description" className={!hidden ? "content-area_main-twitArea-input_hidden" : "content-area_main-twitArea-btnArea-titleInput"}/>
                            <button onClick={(event => this.onSubmit(event) )} className={!hidden ? "content-area_main-twitArea-btnArea-btnSubmit_hidden" : "content-area_main-twitArea-btnArea-btnSubmit"}>Submit</button>
                        </form>
                        <div className="content-area_main-twitArea-btn">
                        <button id="hiddenId4" className={!hidden ?  "content-area_main-twitArea-btnArea-btn" : "content-area_main-twitArea-btnArea-btn_hidden"} onClick={()=>this.onClick()}>
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