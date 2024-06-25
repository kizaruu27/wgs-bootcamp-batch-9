import React, {Component} from "react";

export default class Comment extends Component {
    constructor(props) {
        super(props);
        const {img, nama, date, comment, likes} = this.props;
        this.state = {
            img,
            nama,
            date,
            comment,
            likes
        }
    }

    render() {
        const {img, nama, date, comment, likes} = this.state;

        return (
            <div className="comments mt-3">
                <div class="ui comments">
                    <div class="comment">
                        <a class="avatar">
                            <img src={img} />
                        </a>
                        <div class="content">
                            <a class="author">{nama}</a>
                            <div class="metadata">
                                <div class="date">{date} | </div>
                            </div>
                            <div class="text">
                                {comment}
                            </div>
                            <div class="ui labeled button" tabindex="0" onClick={() => this.setState({likes: likes + 1})}>
                                <div class="ui red button">
                                    <i class="heart icon"></i> Like
                                </div>
                                <p class="ui basic red left pointing label">{likes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}