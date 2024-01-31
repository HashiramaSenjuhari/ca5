import axios from 'axios';

const fetchDetails = async () => {
  try {
    const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
      headers: {
        'Authorization': 'whatever-you-want'
      }
    });

    const data = response.data;
    // console.log(data.books);
    return data.books;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchDetails;
