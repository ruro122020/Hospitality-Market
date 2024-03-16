
const apiLogout = async () => {
  try {
    const res = await fetch('/api/logout', { method: 'DELETE' })
    const data = await res.json()
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
      throw new Error('check_session not confirmed')
    }
    return true
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
export { apiLogout, apiLogin, apiCheckSession, apiServices }