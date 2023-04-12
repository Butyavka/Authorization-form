import { useEffect, useState } from 'react'

export default (url: string, params: any = {}) => {
  const [ data, setData ] = useState(null)
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const sendRequest = (url: string | undefined, params: any = {}) => {
    if (!url) return

    setLoading(() => true)

    fetch(url, params)
      .then(response => response.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    sendRequest(url, params)
  }, [])

  return {
    data,
    error,
    loading,
    sendRequest,
  }
}