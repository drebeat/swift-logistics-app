import useAxiosPrivate from "./useAxiosPrivate"

const useFetcherPrivate = () => {
  const axiosPrivate = useAxiosPrivate()

  const fetcherPrivate = async url => {
    const res = await axiosPrivate.get(`${url}`)
    return res?.data?.data
  }

  return fetcherPrivate
}

export default useFetcherPrivate
