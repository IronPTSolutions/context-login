import { useState, useEffect } from 'react'

const useFetchWithLoading = (fetchFn) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  })

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchFn()

        setState({
          loading: false,
          data,
          error: null
        })
      } catch(error) {
        setState({
          loading: false,
          data: null,
          error
        })
      }
    }

    fetch()
  }, [])

  return {
    loading: state.loading,
    data: state.data,
    error: state.error
  }
}

export default useFetchWithLoading
