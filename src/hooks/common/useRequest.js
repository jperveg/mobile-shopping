import { useCallback, useState } from 'react'

export function useRequest(request) {
  const [state, setState] = useState({
    data: undefined,
    error: undefined,
    isLoading: false,
    isSuccess: false,
  })
  //   const isMounted = useRef(false)

  //   useEffect(() => {
  //     isMounted.current = true

  //     return () => {
  //       isMounted.current = false
  //     }
  //   }, [])

  const fetch = useCallback(
    async (...args) => {
      setState(({ data, error, isSuccess }) => ({
        data,
        error,
        isSuccess,
        isLoading: true,
      }))

      try {
        const data = await request(...args)
        // if (!isMounted.current) return

        setState({ data, error: undefined, isLoading: false, isSuccess: true })
      } catch (error_1) {
        // if (!isMounted.current) return
        setState({
          error: error_1.message,
          data: undefined,
          isLoading: false,
          isSuccess: false,
        })
      }
    },
    [request]
  )

  //   const reset = useCallback(() => {
  //     setState({
  //       error: undefined,
  //       data: undefined,
  //       isLoading: false,
  //       isSuccess: false,
  //     })
  //   }, [])

  return {
    fetch,
    // fetchAsync: request,
    data: state.data,
    error: state.error,
    isLoading: state.isLoading,
    isSuccess: state.isSuccess,
  }
}
