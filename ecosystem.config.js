module.exports = {
  apps : [{
    name: "bolsosjeze",
    script: "./src/servidor.js",
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: "development"
    },
    env_production : {
      NODE_ENV: "production"
    }
  }]
}