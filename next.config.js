const { redirect, rewrites } = require("next/dist/server/api-utils");
const API_KEY = "6015bc027aef1e97c5ae0ffbd8d1b85b"

module.exports = {
  reactStrictMode: true,
  async redirect() {
    return [
      {
        source: "/old-url/:path*",
        destination: "/new-url/:path*",
        permanent: false,
      },
      {
        source: "/old-url/:path*",
        destination: "/new-url/:path*",
        permanent: false,
      },//주소유도가 가능하다 
      //예를들어 이전 블로그에 진입한 유저가 있다면 새로운 블로그로 이동시킴
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      /* 
      rewrites도 주소 유도가 가능하다 redirect와 다른점은 
      redirect는 주소가 이동되고 url또한 바뀌지만
      rewrites는 주소가 이동되고 url은 유지 된상태로 바뀐다.
      이걸로 url에 마스크를씌우는것처럼 fake-url을 구현할 수 있다.
      */
    ]
  }
}
