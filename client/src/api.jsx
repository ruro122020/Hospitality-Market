
const apiLogout = async () => {
  try {
    const res = await fetch('/api/logout', { method: 'DELETE' })
    if (!res.ok) {
      throw new Error('logout request failed')
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
    // const user = await res.json()
    if (!res.ok) {
      throw new Error('login request failed')
    }
    return true
  } catch (error) {
    console.error('Error logging in: ', error)
    return false
  }
}

export { apiLogout, apiLogin }