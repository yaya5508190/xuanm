module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: 'xuanm',
      script: 'build/main.js',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
