import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row  } from 'react-bootstrap';
import { contentfulClient } from "../utils/contenfulClient";
import Headers from './headers';
import Menu from './menu';
import Split_one from './split_one';
import Split_two from './split_two';
import Split_three from './split_three';


class home extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        contentfulClient.getEntries({ content_type: 'featuresSplits' })
            .then((response) => {
                console.log(response)
                this.setState({
                    articles: response.items
                })
            })
            .catch(console.error)
    }
    static propTypes = {
        titles: PropTypes.string,
        description: PropTypes.string,

      };
    static async getInitialProps() {
        const data = await contentfulClient.getEntry('4Q4a5gykT1Sj7o5d92JqtN');
    
        return { ...data.fields };
      };

    render() {
        const { titles, description } = this.props;
        console.log ( 'render1', titles);
        return (
            <div>
            <Headers />
            <Menu />
            

            <div> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <h2 className='title'>{titles}</h2>
                <h2 className='title'>{description}</h2>
            </div>
            <Split_one />
            <Split_two />
            <Split_three />
            </div>

            
        );
    }
}

export default home;




