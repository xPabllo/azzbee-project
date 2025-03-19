import axios from 'axios'

const API_URL = 'https://api.pump.fun/launches' // Replace with actual API endpoint

export const fetchLaunches = async () => {
  try {
    // Temporary mock data until API is available
    return [
      {
        id: 1,
        name: "RocketToken",
        network: "BSC",
        launchTime: new Date(Date.now() + 3600000).toISOString(),
        initialPrice: "0.0001",
        website: "https://example.com"
      },
      {
        id: 2,
        name: "MoonCoin",
        network: "ETH",
        launchTime: new Date(Date.now() + 7200000).toISOString(),
        initialPrice: "0.001",
        website: "https://example.com"
      },
      // Add more mock launches as needed
    ]
    
    // Uncomment when API is available
    // const response = await axios.get(API_URL)
    // return response.data
  } catch (error) {
    console.error('Error fetching launches:', error)
    throw error
  }
}
