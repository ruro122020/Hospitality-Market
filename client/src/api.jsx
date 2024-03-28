
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
    console.log('post error', err)
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
    console.log('fetch error', err)
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
    console.log('delete error', err)
  }
}

const update = async (url, service) => {
  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(service)
    })
    if (!res.ok) {
      throw new Error('update not successful')
    }
    const updatedService = await res.json()
    return updatedService

  } catch (err) {
    console.log('update error', err)
    return false
  }
}


export {
  apiLogout,
  apiLogin,
  apiCheckSession,
  post,
  getData,
  deleteData,
  update
}