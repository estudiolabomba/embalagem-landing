import axios from 'axios'

const pipedrive = axios.create({
  baseURL: process.env.NEXT_CRM_API_ENDPOINT,
  params: {
    api_token: process.env.NEXT_CRM_API_KEY
  }
})

export default pipedrive
