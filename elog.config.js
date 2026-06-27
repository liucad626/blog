module.exports = {
  write: {
    platform: "feishu",
    feishu: {
      appId: "cli_aab5275497385bea",
      appSecret: "lo7Lk4tcAE7XvKoyhZD3mbzGQDZ183ju",
      folderToken: "GhhUftA7ilFGg1dS2mWchUp0nIc"
    }
  },
  deploy: {
    platform: "local",
    local: {
      outputDir: "./source/_posts",
      format: "markdown",
      filename: "title",
      catalog: false,
      image: {
        enable: true,
        outputDir: "./source/images",
        prefix: "/images/"
      }
    }
  }
}