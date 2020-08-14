import React, { Component, Fragment } from "react";
import api from "../../services/api";
import Avatar from '@material-ui/core/Avatar';
import './styles.css';

export default class Main extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = async () => {
        const response = await api.get();
        this.setState({ items: response.data.items });
    };
    
    render() {
        const { items } = this.state;
        return (
            <Fragment>
                <div className="items-list">
                    {items.map(item => (
                        <article key={item.id}>
                            <td>
                                <Avatar variant="square" alt="Remy Sharp" src={item.owner.avatar_url} />
                            </td>
                            <td>
                                <strong>{item.owner.login}</strong>
                                <p>{item.name}</p>
                            </td>
                        </article>
                    ))}
                </div>
            </Fragment>
        );
    }
}