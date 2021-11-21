class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-\s]+/g, "");
  }
  static titleize(string) {
    const arr = string.split(" ");
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newArr = arr.map(word => {
      if (exceptions.indexOf(word.toLowerCase()) < 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    newArr[0] = newArr[0][0].toUpperCase() + newArr[0].slice(1);
    return newArr.join(" ");
  }
}
