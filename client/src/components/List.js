import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'

class List extends Component {
  state = {
    items: [
      { id: uuid(), name: "Stuff" },
      { id: uuid(), name: "Things" },
      { id: uuid(), name: "Carrots" },
      { id: uuid(), name: "Chungus" }
    ]
  };

  render() {
      const { items } = this.state
      return(
          <Container>
              <Button
              color="dark"
              style={{marginBottom: '2rem'}}
              onClick={() => {
                  const name = prompt('Enter Item')
                  if(name) {
                      this.setState(state => ({
                          items:[...state.items, { id: uuid(), name}]
                      }))
                  }
              }}> Add Item</Button>

              <ListGroup>
                  <TransitionGroup className='list'>
                      {items.map(({ id, name }) => (
                          <CSSTransition key={id} timeout={500} classNames='fade'>
                              <ListGroupItem>
                              <Button
                              className='remove-btn' 
                              color='danger' 
                              size='sm' 
                              marginRight={0.5}
                              onClick={() => {
                                  this.setState(state => ({
                                      items: state.items.filter(item => item.id !== id)
                                  }))
                              }}
                              >&times;</Button>
                                  {name}
                              </ListGroupItem>
                          </CSSTransition>
                      ))}
                  </TransitionGroup>
              </ListGroup>
          </Container>
      )
  }
}

export default List