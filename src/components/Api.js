import axios from 'axios'
import R from 'ramda'

const Api = {
  get(url, opts) {
    return axios
      .get(
        url,
        R.merge(
          {
            headers: { Authorization: localStorage.getItem('hatool-token') },
          },
          opts,
        ),
      )
      .then(res => res.data)
  },
  getRaw(url, opts) {
    return axios.get(url, opts)
  },
  post(url, data, opts) {
    return axios
      .post(
        url,
        data,
        R.merge(
          {
            headers: { Authorization: localStorage.getItem('hatool-token') },
          },
          opts,
        ),
      )
      .then(res => res.data)
  },
  put(url, data, opts) {
    return axios
      .put(
        url,
        data,
        R.merge(
          {
            headers: { Authorization: localStorage.getItem('hatool-token') },
          },
          opts,
        ),
      )
      .then(res => res.data)
  },
  delete(url, opts) {
    return axios.delete(
      url,
      R.merge(
        {
          headers: { Authorization: localStorage.getItem('hatool-token') },
        },
        opts,
      ),
    )
  },
}

export default Api
