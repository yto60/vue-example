import axios from 'axios'

// モックサーバー
axios.defaults.baseURL =
  'https://virtserver.swaggerhub.com/60-deg/hitonome-API/1.0.0'

// 実際のサーバーサイド
// axios.defaults.baseURL = 'localhost:(サーバー側を動かすポート番号)'

export default axios
