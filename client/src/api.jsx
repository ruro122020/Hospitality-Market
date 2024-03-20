
const apiLogout = async () => {
  try {
    const res = await fetch('/api/logout', { method: 'DELETE' })
    if (!res.ok) {
      throw new Error('logout failed')
    }
    return true
  } catch (error) {
    console.error('Error logging out: ', error)
    return false
  }
}

const apiLogin = async (values) => {
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    if (!res.ok) {
      throw new Error('login request failed')
    }
    return true
  } catch (error) {
    console.error('Error logging in: ', error)
    return false
  }
}

const apiCheckSession = async () => {
  try {
    const res = await fetch('/api/check_session')
    if (!res.ok) {
      throw new Error()
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.log('error in checksession route', error)
    return false
  }


}

const apiServices = async () => {
  try {
    const res = await fetch('/api/services')
    if (!res.ok) {
      throw new Error('Fetch to services endpoint failed')
    }
    const services = await res.json()
    return services
  } catch (err) {
    console.log('err', err)
    return false
  }
}

const post = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (!res.ok) {
      throw new Error('Post to database failed')
    }
    const service = await res.json()
    return service
  } catch (err) {
    console.log('err', err)
    return false
  }
}

const getData = async (url) => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Fetch to database failed')
    }
    const data = await res.json()
    return data
  } catch (err) {
    console.log('err', err)
    return false
  }
}

const deleteData = async (url) => {
  try {
    const res = await fetch(url, { method: 'Delete', headers: { "Content-Type": 'application/json' } })

    if (!res.ok) {
      throw new Error('Could not delete')
    }
    const data = await res.json()
    return data
  } catch (err) {
    console.log('err delete', err)
  }
}


export { apiLogout, apiLogin, apiCheckSession, apiServices, post, getData, deleteData }