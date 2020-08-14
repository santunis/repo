import React, { Component, Fragment } from "react";
import api from "../../services/api";
import Avatar from '@material-ui/core/Avatar';
import './styles.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';


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
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar variant="square" alt="Remy Sharp" src={item.owner.avatar_url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.owner.login}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                {item.name}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    ))}
                </div>
            </Fragment>
        );
    }
}