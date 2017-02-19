let host;

if (process.ENV === 'production') {
  host = "https://graph.facebook.com/v2.8"
} else {
  host = "https://graph.facebook.com/v2.8"
}

module.exports = {
  host
};
