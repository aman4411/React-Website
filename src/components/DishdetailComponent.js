import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Media } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComment(dish) {
        if (dish != null) {
            const dishComments = dish.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
                );
            });
          
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                       {dishComments}
                    </ul>
                </div>
            );

        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;

        return (
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderComment(dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;