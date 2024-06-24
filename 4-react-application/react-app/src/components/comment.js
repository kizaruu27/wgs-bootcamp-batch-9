import React, {Component} from "react";

export default class Comment extends Component {
    render() {
        const {img, nama, date, comment} = this.props;

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
                                <div class="date">{date}</div>
                            </div>
                            <div class="text">
                                {comment}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}