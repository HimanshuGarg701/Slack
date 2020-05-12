// 3rd party imports
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// My imports
import ActiveUser from '../ActiveUser'
import { setUsers } from '../../redux/actions'
import { Typography, Divider, Button } from '@material-ui/core'

const CurrentActiveUsers = ({ usersList, setUsers, setDrawerOpen }) => {
  const [users, setNewUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (usersList) {
      console.log('UsersList Found')
      console.log('UsersInRedux: ' + usersList)
      setNewUsers(usersList)
    } else {
      setIsLoading(true)
      // api request
      console.log('UsersList Not Found')
      setNewUsers([
        'steven',
        'Jainam',
        'Michael',
        'Himanshu',
        'Ramy',
        'Super Long UserName Just Incase',
      ])
      setUsers([
        'steven',
        'Jainam',
        'Michael',
        'Himanshu',
        'Ramy',
        'Super Long UserName Just Incase',
      ])
    }
    setIsLoading(false)
    setError(null)
  }, [usersList, setUsers])

  if (isLoading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <ComponentContainer>
      <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setDrawerOpen(false)}
          >
            Back
          </Button>
          <Button variant='contained' color='primary'>
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/user'>
              My Profile
            </Link>
          </Button>
        </div>
        <div style={{ padding: '1rem 3rem 3rem 3rem' }}>
          <Typography
            style={{ textAlign: 'center', margin: '10px 0' }}
            variant='h5'
          >
            List of Users
            <Divider variant='middle' />
          </Typography>
          {users.length > 0 ? (
            users.map((username, index) => {
              return <ActiveUser key={index} username={username} />
            })
          ) : (
            <div>No users found</div>
          )}
        </div>
      </React.Fragment>
    </ComponentContainer>
  )
}

const mapStateToProps = (state) => {
  return { usersList: state.usersList }
}

function mapDispatchToProps(dispatch) {
  return {
    setUsers: (usersList) => dispatch(setUsers(usersList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentActiveUsers)

// STYLING
const ComponentContainer = styled.div`
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`
