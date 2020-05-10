// 3rd party imports
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// My imports
import ActiveUser from '../ActiveUser'

const CurrentActiveUsers = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeUsers, setActiveUsers] = useState([])

  useEffect(() => {
    setActiveUsers([
      { username: 'user 1', avatar: 1 },
      { username: 'user 2', avatar: 2 },
      { username: 'user 3', avatar: 3 },
    ])
    setIsLoading(false)
    setError(null)
  }, [])

  if (isLoading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <ComponentContainer>
      {activeUsers.map((activeUser) => {
        return (
          <ActiveUser
            username={activeUser.username}
            avatar={activeUser.avatar}
          />
        )
      })}
    </ComponentContainer>
  )
}

export default CurrentActiveUsers

// STYLING
const ComponentContainer = styled.div`
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`
