import React,{Component} from 'react'
import '../../scss/Content/content.scss'

export default class Content extends Component {
    state={
      inputType:"hidden"
    };
    onClick=()=>{
        this.setState(
            {
                inputType:"text",
            });
        document.getElementById("hiddenId3").hidden=false;
        document.getElementById("hiddenId4").hidden=true;
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
        return(
            <main className="content-area">
                <div className="content-area_main">
                    <div className="content-area_main-twitArea">
                        <div className="content-area_main-twitArea-textArea">
                            <p className="content-area_main-twitArea-textArea-txt">All tips</p>
                        </div>
                        <div className="content-area_main-twitArea-btnArea">
                            <input id="hiddenId" className="content-area_main-twitArea-btnArea-titleInput" type={this.state.inputType}/>
                            <input id="hiddenId" className="content-area_main-twitArea-btnArea-descriptionInput" type={this.state.inputType}/>
                            <button id="hiddenId3" className="content-area_main-twitArea-btnArea-btnSubmit" hidden >Submit</button>
                            <button id="hiddenId4" className="content-area_main-twitArea-btnArea-btn" onClick={()=>this.onClick()}>
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