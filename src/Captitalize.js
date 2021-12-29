function capitalize(string) {
  const wordRegex = /\w\S*/g;
  const firstLetterRegex = /^\w/;
  string.trim().toLowerCase().replace(
    wordRegex, (word) => word.replace(
      firstLetterRegex, (letter) => letter.toUpperCase())
  )
  return string;
}

module.exports = capitalize;