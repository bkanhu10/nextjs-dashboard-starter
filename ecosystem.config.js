module.exports = {
  apps: [
    {
      name: "", // Your app name
      exes_mode: "cluster",
      instances: "max",
      script: "./node_modules/next/dist/bin/next",
      autorestart: true,
      args: "start -p 3001",
      exp_backoff_restart_delay: 100,
      env: {
        NODE_ENV: "production",
      },
      watch: true,
      max_memory_restart: "400M",
    },
  ],
};
