const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST ||
      'mongodb://' + (process.env.IP || 'localhost') + ':' +
      (process.env.MONGO_PORT || '27017') +
      '/mernproject',
    stripe_connect_test_client_id: 'pk_test_PVDtjcPMpM4iLEur4BaswfTi005JveTczq',
    stripe_test_secret_key: 'sk_test_PEP1zS5hcueo4dzVHLuBylxp00ZpiX7N0M',
    stripe_test_api_key: 'pk_test_PVDtjcPMpM4iLEur4BaswfTi005JveTczq' 
  }
  
  export default config
  