class DataSource {
  static async searchBatik(keyword) {
    try {
      const response = await fetch(`http://batikita.herokuapp.com/index.php/batik/${keyword}`);
      const responseJson = await response.json();
      if (responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
         return Promise.reject(`${keyword} is not found`);
      }
    }
    catch (error) {
      return Promise.reject(error);
    }
      // return fetch(`https://superheroapi.com/api/2059791557497640/search/${keyword}`, {mode: 'no-cors'}).
      //   then(response => {
      //      return response.json();
      //  })
      //  .then(responseJson => {
      //      if(responseJson.results) {
      //          return Promise.resolve(responseJson.results);
      //      } else {
      //          return Promise.reject(`${keyword} is not found`);
      //      }
      //  });
  }
}

export default DataSource;